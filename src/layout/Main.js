import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
         <Header></Header>
         <Outlet></Outlet>
        </div>
     );
};

export default Main;