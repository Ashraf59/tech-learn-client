import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import Course from '../Course/Course';

const CourseInitial = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg = "4 d-none d-lg-block">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg = "8">
                        <Course></Course>
                    </Col>
                </Row>
                
        </Container>
        </div>
    );
};

export default CourseInitial;