import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='log-in'>
            <h2>Login</h2>
            <div>
                <form>
                    <div className="email">
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' placeholder='Your email' className='email-field' required />
                    </div>
                    <div className="password">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" placeholder='Your password' className='password-field' required />
                    </div>
                    <input className='submit' type="submit" value="Login" />
                    <p>New to Ema-jhon?<Link to='/signup'><span>Create New Account</span></Link></p>
                    <button className='google-login-btn'>Continue with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;