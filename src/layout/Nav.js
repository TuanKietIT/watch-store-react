import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <ul className='navbar'>
                <li><Link to="/">Home product</Link></li>
                <li><Link to="/add-product">Add product</Link></li>
                <li><Link to="/update-product">update product</Link></li>
                <li><Link to="/delete-product">delete product</Link></li>
                <li><Link to="/logout">logout</Link></li>
                <li><Link to="/profile">profile</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </div>
    )
};

export default Nav;