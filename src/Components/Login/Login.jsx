import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';

const Login = () => {
    const [error, setError] = useState('');
    const {signInUser, googleSignIn} = useContext(AuthContext);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('')

        signInUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            form.reset();
            console.log('Log in successfully')
        })
        .catch(error =>{
            console.log(error.message)
            setError(error.message)
        })

    }
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const loggedUser = result.user;
            form.reset();
            console.log('sign in successfully')
        })
        .catch(error =>{
            console.log(error.message)
            setError(error.message)
        })
    }
    return (
        <div className='log-in'>
            <h2>Login</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="email">
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' placeholder='Your email' className='email-field' required />
                    </div>
                    <div className="password">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" placeholder='Your password' className='password-field' required />
                    </div>
                    <Link to='/'><input className='submit' type="submit" value="Login" /></Link>
                    <p>{error}</p>
                    <p>New to Ema-jhon?<Link to='/signup'><span>Create New Account</span></Link></p>
                    <button onClick={handleGoogleSignIn} className='google-login-btn'>Continue with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;