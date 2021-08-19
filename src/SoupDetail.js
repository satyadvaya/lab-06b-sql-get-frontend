import React, { Component } from 'react';
import { getSoup, getCategories, updateSoup } from './fetch-utils.js';

class SoupDetail extends Component {
    state = {
        id: 0,
        name: '',
        category_id: 0,
        seasonal: '',
        tastiness: 0,
        categories: []
    };

    componentDidMount = async () => {
        // when page loads we need to fetch our data
        const soupId = this.props.match.params.soupId;
        const soupData = await getSoup(soupId);
        const categories = await getCategories();
        this.setState({ ...soupData, categories });
    };

    getCategoryId = () => {
        const categoryObject = this.state.categories.find(
            (cat) => cat.name === this.state.category
        );
        return categoryObject.id;
    };

    handleClick = async (event) => {
        event.preventDefault();
        // get category_id from the list of categories
        // gather new soup data from state
        const soupData = {
            id: this.state.id,
            name: this.state.name,
            category_id: this.getCategoryId(),
            seasonal: this.state.seasonal,
            tastiness: this.state.tastiness
        };
        console.log(soupData);
        // call updateSoup from fetch-utils
        const data = await updateSoup(soupData);
    }

    render() { 
        return (
            <>
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
                                this.setState({ category: event.target.value });
                            }}
                        >
                            {this.state.categories.map((cat) => {
                                return (
                                    <option value={cat.name}>{cat.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <button onClick={this.handleClick}>Update Soup</button>
                </form>
            </>
        );
    };
}
 
export default SoupDetail;