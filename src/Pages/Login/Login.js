import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle, FaRegUser, FaTwitter } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {

    const {signIn, setLoading} = useContext(AuthContext)
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result => {
      const user = result.user;
      form.reset();
      setError('')
      if(user.emailVerified){
      navigate(from, {replace: true})
      }
      else{
        toast.error('You are not verified email, please verify your mail')
      }
    })
    .catch(error => {
      console.log(error)
      setError(error.message)
    })
    .finally(() => {
      setLoading(false)
    })
  }

//   const handleForgetPassword = () =>{
    
//   } 

    return (
        <div className="container-login">
            <div className="wrap-login p-t-50 p-b-90 p-l-50 p-r-50">
                <form onSubmit={handleSubmit} className="login-form flex-sb flex-w" action="" method="post">
                    <span className="login-form-title">
                        <FaRegUser className='user'/>
                        <p className='text-center fs-3'>Please Login</p>
                    </span>
                    
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
                                Login
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
                    </p>
                    
                      <p className='text-danger'>{error}</p>
                     
                </form>
            </div>
        </div>

            
        
    );
};

export default Login;