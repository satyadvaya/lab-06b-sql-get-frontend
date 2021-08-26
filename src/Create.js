import React, { Component } from 'react';
import { createSoup, getCategories } from './fetch-utils.js';
import classNames from 'classnames';

class Create extends Component {
    state = {
        name: '',
        // image_url: '',
        category_id: 0,
        seasonal: true,
        tastiness: 0,
        categories: [],
        message: '',
        error: false
    };

    componentDidMount = async () => {
        // when page loads we need to fetch our data
        const categories = await getCategories();
        this.setState({ categories });
    };

    getCategoryId = () => {
        const categoryObject = this.state.categories.find(
            (cat) => cat.name === this.state.category
        );
        return categoryObject.id;
    };

    handleClick = async (event) => {
        event.preventDefault();
        // get soup id
        const soupData = {
            name: this.state.name,
            // image_url: this.state.image_url,
            category_id: this.getCategoryId(),
            seasonal: this.state.seasonal,
            tastiness: this.state.tastiness
        };
        // call POST to /soups
        const data = await createSoup(soupData);
        // if error then display error
        if (data.error) {
            this.setState({ message: data.error, error: true });
        } else {
            // if successful then redirect to home page
            this.props.history.push('/');
        }
    };

    render() {
        console.log(this.props);
        return (
            <>
                {this.state.message && (
                    <div
                        className={classNames({
                            message: true,
                            error: this.state.error,
                            success: !this.state.error,
                        })}
                    >
                        {this.state.message}
                    </div>
                )}
                <h1>{this.state.name}</h1>
                {/* <img src={this.state.image_url} alt='cover' /> */}
                <form id='update-soup'>
                    <div className='form-group'>
                        <label>Name: </label>
                        <input
                            onChange={(event) => {
                                this.setState({ 
                                    name: event.target.value 
                                });
                            }}
                            type='text'
                            value={this.state.name}
                        ></input>
                    </div>
                    {/* <div className='form-group'>
                        <label>Image URL: </label>
                        <input
                            onChange={(event) => {
                                this.setState({
                                    image_url: event.target.value
                                });
                            }}
                            type='text'
                            value={this.state.image_url}
                        ></input>
                    </div> */}
                    <div className='form-group'>
                        <label>Seasonal: </label>
                        <input
                            onChange={(event) => {
                                this.setState({
                                    seasonal: event.target.value
                                });
                            }}
                            type='boolean'
                            value={this.state.seasonal}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <label>Tastiness: </label>
                        <input
                            onChange={(event) => {
                                this.setState({ 
                                    tastiness: event.target.value 
                                });
                            }}
                            type='number'
                            value={this.state.tastiness}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <label>Category: </label>
                        <select
                            value={this.state.category}
                            onChange={(event) => {
                                this.setState({ 
                                    category: event.target.value 
                                });
                            }}
                        >
                            {this.state.categories.map((cat) => {
                                return (
                                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                                );
                            })}
                        </select>
                    </div>
                    <button onClick={this.handleClick}>Create Soup</button>
                </form>
            </>
        );
    }
}
 
export default Create;