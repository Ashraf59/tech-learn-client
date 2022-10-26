import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaRegUser, FaTwitter, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Register.css';


const Register = () => {
    return (
        <div className="container-login">
            <div className="wrap-login p-t-50 p-b-90 p-l-50 p-r-50">
                <form className="login-form flex-sb flex-w" action="" method="post">
                    <span className="login-form-title">
                        <FaRegUser className='user'/>
                        <p className='text-center fs-3'>Create a new account</p>
                    </span>
                    <div className="wrap-input m-b-16">
                        <input className="input" type="text" name='name' placeholder="Name" required/>
                    </div>
                    <div className="wrap-input m-b-16">
                        <input className="input" type="text" name='photoURL' placeholder="Photo URL"/>
                    </div>
                    <div className="wrap-input m-b-16">
                        <input className="input" type="email" name='email' placeholder="Email" required/>
                        <span className="focus-input"></span>
                    </div>
                    <div className="wrap-input m-b-16">
                        <input className="input" type="password" name='password' placeholder="Password"/>
                        <span className="focus-input"></span>
                    </div>
                    <div className="container-login-form-btn m-t-17">
                        <div className="w-full text-center">
                            <Button className='container-login-form-btn' variant="primary" type="submit">
                                Register
                            </Button>
                        </div>
                    </div>
                    <div className='text-center fs-6 mb-2 mt-3'>
                        <span>Sign Up with social accounts</span>
                    </div>
                    <div className='text-center'>
                        <FaGithub className='me-3 font'/>
                        <FaGoogle className='me-3 font'/>
                        <FaTwitter className='font'/>
                    </div>
                    <p className='m-t-17 text-center'>
                        Already have an account yet?{' '}
                        <Link to='/login' className='hover:underline text-gray-600'>
                            Sign In
                        </Link>
                    .
                    </p>
                </form>
            </div>
        </div>

            
        
    );
};

export default Register;