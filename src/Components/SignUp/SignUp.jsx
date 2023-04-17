import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const { createUser, googleSignIn } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.ConfirmPassword.value;

        setError('')
        if (password !== confirmPassword) {
            setError("Password didn't match")
            return;
        } else if (password.length < 6) {
            setError('Password should be 6 Characters or longer')
            return;
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
                console.log('sign up successfully')
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log('sign in successfully')
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    }
    return (
        <div>
            <div className='log-in'>
                <h2>Sign Up</h2>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="email">
                            <label htmlFor="email">Email</label> {/* Updated htmlFor attribute */}
                            <input type="email" name='email' placeholder='Your email' className='email-field' required />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label> {/* Updated htmlFor attribute */}
                            <input type="password" name="password" placeholder='Your password' className='password-field' required />
                        </div>
                        <div className="password">
                            <label htmlFor="ConfirmPassword">Confirm Password</label> {/* Updated htmlFor attribute */}
                            <input type="password" name="ConfirmPassword" placeholder='Confirm password' className='password-field' required /> {/* Use "ConfirmPassword" as per attribute name */}
                        </div>
                        <p className='text-error'>{error}</p>
                        <input className='submit' type="submit" value="Sign Up" />
                        <p>Already have an Account?<Link to='/login'><span>Please Login</span></Link></p>
                        <button onClick={handleGoogleSignIn} className='google-login-btn'>Continue with Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
