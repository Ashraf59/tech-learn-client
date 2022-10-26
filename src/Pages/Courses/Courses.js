import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const readMore = useLoaderData();
    const {category_id, details, image_url, title} = readMore
    return (
        <Card>  
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
               {details}
              
            </Card.Text>
            <Link to = {`/category/${category_id}`}>
            <Button className = "text-white fs-5" variant="info">All the courses in this category</Button>

            </Link>
          </Card.Body>
          </Card>
        
      );
};

export default Courses;