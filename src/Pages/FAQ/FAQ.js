import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div className='card-design'>
            <h2 className="font-semibold text-center mt-5 mb-8">Frequently Ask Questions</h2>
            <div>
            <Accordion className='accordion'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='font-bold fs-3'>What is course fee?</Accordion.Header>
                    <Accordion.Body>
                        Our course fee depends on course subject. Hence course price will be started BDT. 5000 to BDT. 10,000. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is your course duration?</Accordion.Header>
                    <Accordion.Body>
                         Our course duration 4 months to 6 months. So course duration will depend as per course subject. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Is this course online classes on pre-recorded classes?</Accordion.Header>
                    <Accordion.Body>
                        Our class is pre-recorded classes. Per day you will get one class. And also will get 3 times support session if you need help.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Do you support to your students to get job?</Accordion.Header>
                    <Accordion.Body>
                        Yes, We help our students to meet interview, who will finish our course on time.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
        </div>
            
        
    );
};

export default FAQ;