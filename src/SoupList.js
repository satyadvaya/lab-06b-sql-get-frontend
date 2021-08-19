import React, { Component } from 'react';
import { getSoups } from './fetch-utils.js';
import { Link } from 'react-router-dom';
import './SoupList.css';

class SoupList extends Component {
    state = { soups: [] }
    componentDidMount = async () => {
        // when page loads we need to fetch our data
        const data = await getSoups();
        this.setState({ soups: data })
    };

    render() {
        return (
            <section className='soup-list'>
                {this.state.soups.map((booger) => (
                    <div className='soup-card'>
                        <h2>
                            <Link to={`/soups/${booger.id}`}>{booger.name}</Link>
                        </h2>
                        {/* <img src={booger.image_url} /> */}
                    </div>
                ))}
            </section>
        );
    };
}
 
export default SoupList;