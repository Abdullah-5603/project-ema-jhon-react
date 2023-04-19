import React, { useContext, useState } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [open, setOpen] = useState(false);
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => { })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleOpen = () => {
        setOpen(!open);
    }
    return (
        <>
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
                <div className='mobile-header'>
                    <div className='toggler'>
                    <span onClick={handleOpen} className='toggle'>
                        {
                            open ? <FontAwesomeIcon className='icon' icon={faXmark} /> : <FontAwesomeIcon className='icon' icon={faBars} />
                        }
                        {
                            open && (
                                <div className="mobile-nav-link">
                                    <Link onClick={handleOpen} to="/">Shop</Link>
                                    <Link onClick={handleOpen} to="/orders">Order</Link>
                                    <Link onClick={handleOpen} to="/inventory">Inventory</Link>
                                    <Link onClick={handleOpen} to="/login">Log In</Link>
                                    {
                                        user && <Link onClick={handleSignOut}>Sign Out</Link>
                                    }
                                </div>
                            )
                        }
                    </span>
                    </div>
                    <img src={logo} alt="" />
                    <div className='user-profile'>
                    {
                        user && <div><p className='email-text'>{user.email}</p> <button onClick={handleSignOut} id='sign-out'>Sign Out</button></div>
                    }
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;