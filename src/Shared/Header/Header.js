import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import image from '../../Asset/image/logo-1.png'


const Header = () => {
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
                  <a className="nav-link text-dark" href="#online-course">Online Courses</a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link text-dark" href="#faq">FAQ</a>
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
                <li className="nav-item mx-4">
                  <a className="nav-link text-dark" href="#enroll">Enroll</a>
                </li>
              </ul>
              <form className="d-flex">
                <button type="button" className="btn btn-outline-info btn-lg me-2">Register</button>
              </form>
              <form className="d-flex">
                <button type="button" className="btn btn-outline-info btn-lg">Login</button>
              </form>
            </div>
          </div>
        </nav>
      );
};

export default Header;