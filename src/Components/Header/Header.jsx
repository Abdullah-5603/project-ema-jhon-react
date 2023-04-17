import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const {user, signOutUser} = useContext(AuthContext);

    const handleSignOut = () =>{
        signOutUser()
        .then(()=>{})
        .catch(error =>{
            console.log(error.message)
        })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-link'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                {
                    user && <div><p className='email-text'>{user.email}</p> <button onClick={handleSignOut} id='sign-out'>Sign Out</button></div>
                }
            </div>
        </nav>
    );
};

export default Header;