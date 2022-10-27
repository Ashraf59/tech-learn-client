import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const readMore = useLoaderData();
    const {category_id, details, image_url, title} = readMore
    return (
        <div className='shadow p-4 mb-4 rounded-3 w-50 m-auto'>
                  <Card>  
          <Card.Img variant="top" className = "img-fluid" src={image_url} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
               {details}
              
            </Card.Text>
            <Link to = {`/checkout/${category_id}`}>
            <Button className = "text-white fs-5" variant="info">Get Premeum Access</Button>

            </Link>
          </Card.Body>
          </Card>
        </div>
        
      );
};

export default Courses;