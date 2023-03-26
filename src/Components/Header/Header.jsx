import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="" herf="/shop">Shop</a>
                <a href="" herf="/order">Order</a>
                <a href="" herf="/inventory">Inventory</a>
                <a href="" herf="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;