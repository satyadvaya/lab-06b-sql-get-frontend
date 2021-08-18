import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    state = {  }
    render() { 
        return (
            <header>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/create'>Add New Soup</NavLink>
            </header>
        );
    }
}
 
export default Header;