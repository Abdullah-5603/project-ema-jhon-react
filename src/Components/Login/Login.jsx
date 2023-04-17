import React from 'react';
import './Login.css'
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState('');
    const {signInUser, googleSignIn} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';

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
            navigate(from, {replace: true})
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
                        <input type="email" name='email' id='email' placeholder='Your email' className='email-field' required />
                    </div>
                    <div className="password">
                        <label htmlFor="">Password</label>
                        <div className="password-show-field">
                        <input type={show ? 'text' : 'password'} name="password" id='password' placeholder='Your password' className='password-field' required />
                        {
                            show ? 
                            <FontAwesomeIcon onClick={() => setShow(!show)} icon={faEyeSlash} />
                            : <FontAwesomeIcon onClick={() => setShow(!show)} icon={faEye}></FontAwesomeIcon>
                        }
                        </div>
                    </div>
                    <input className='submit' type="submit" value="Login" />
                    <p>{error}</p>
                    <p>New to Ema-jhon?<Link to='/signup'><span>Create New Account</span></Link></p>
                    <button onClick={handleGoogleSignIn} className='google-login-btn'>Continue with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;