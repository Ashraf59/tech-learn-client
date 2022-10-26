import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaRegUser, FaTwitter, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './Register.css';


const Register = () => {
    const {createUser, updateUserProfile, verifyEmail, providerLogin, githubProviderLogin} = useContext(AuthContext)
const [error, setError] = useState('');
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider();

// const [accepted, setAccepted] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            setError('');
            console.log(user)
            handleUpdateUserProfile(name, photoURL)
            handleEmailVarification();
            // toast.success('Please verify your email')

            

        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        
        })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })

        .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        githubProviderLogin(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })  
        
        .catch(error => console.error(error))
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL 
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error))
    }

    const handleEmailVarification = () => {
        verifyEmail()
        .then(() => {})
        .catch(error => console.error(error))
    }

    // const handleAccepted = event => {
    //     setAccepted(event.target.checked)
    // }
    return (
        <div className="container-login">
            <div className="wrap-login p-t-50 p-b-90 p-l-50 p-r-50">
                <form onSubmit={handleSubmit} className="login-form flex-sb flex-w" action="" method="post">
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
                            <Button className='container-login-form-btn bg-info' variant="primary" type="submit">
                                Register
                            </Button>
                        </div>
                    </div>
                    <div className='text-center fs-6 mb-2 mt-3'>
                        <span>Sign Up with social accounts</span>
                    </div>
                    <div className='text-center'>
                        <FaGithub onClick={handleGithubSignIn} className='me-3 font'/>
                        <FaGoogle onClick={handleGoogleSignIn} className='me-3 font'/>
                        <FaTwitter className='font'/>
                    </div>
                    <p className='m-t-17 text-center'>
                        Already have an account? Please{' '}
                        <Link to='/login' className='hover:underline text-gray-600'>
                            Sign In
                        </Link>
                    </p>
                    
                      <p className='text-danger'>{error}</p>
                     
                </form>
            </div>
        </div>

            
        
    );
};

export default Register;