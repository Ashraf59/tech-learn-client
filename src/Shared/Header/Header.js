import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import image from '../../Asset/image/logo-1.png'
import { AuthContext } from '../../context/AuthProvider';
import { FaUser } from 'react-icons/fa';



const Header = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
    .then(() => {

    })
    .catch(error => console.log(error))
  }

    return (
        //Nav Bar Start 
        <nav className="navbar navbar-expand-lg navbar-light bg-white  p-4 sticky-top">
          <div className="container d-flex justify-content-center">
          <Link
          style={{textDecoration: 'none'}}
            to='/'
            
          >
            <img className= "me-3" src={image} alt="" />
            <span className='text-info fw-bold fs-4'>
              Tech Learn
            </span>
          </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  mb-2 mb-lg-0 mx-5 ms-auto">
                <li className="nav-item mx-4">
                <Link
          style={{textDecoration: 'none', color: 'black', alignItems: 'center'}}
            to='/home'>
            <span>
              Home
            </span>
          </Link>
                </li>
                <li className="nav-item mx-4">
                <Link
               style={{textDecoration: 'none', color: 'black', alignItems: 'center'}}
                 to='/blog'>
            <span>
              Courses
            </span>
          </Link>
                </li>
                <li className="nav-item mx-4">
                <Link
               style={{textDecoration: 'none', color: 'black', alignItems: 'center'}}
                 to='/blog'>
            <span>
              FAQ
            </span>
          </Link>
                </li>
                <li className="nav-item mx-4">
                <Link
               style={{textDecoration: 'none', color: 'black', alignItems: 'center'}}
                 to='/blog'>
            <span>
              Blog
            </span>
          </Link>
                </li>
                
              </ul>
              <div className='d-flex align-items-center'>
                <>
                {
                  user?.uid ? 
                  <>
                {user?.displayName}
                <Button variant="info" onClick={handleLogOut} className='ms-2'>Log out</Button>
                  </>
                  :
                  <>
                  
                  <form className="d-flex">
                <Link to = '/register'><button type="button" className="btn btn-outline-info btn-lg me-2">Register</button></Link>
              </form>
              <form className="d-flex">
                <Link to = '/login'><button type="button" className="btn btn-outline-info btn-lg me-2">Login</button></Link>
              </form>
                  
                  </>

                }
                
                </>

                <div>
                {
                    user?. photoURL?
                    <Image
                    style = {{height: '40px'}} roundedCircle src = {user?.photoURL}
                    ></Image>
                    :
                    <FaUser></FaUser>
                  }
                </div>
                
              </div>
              
             
            </div>
          </div>
        </nav>
      );
};

export default Header;