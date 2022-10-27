import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar  } from 'react-icons/fa';
import Pdf from 'react-to-pdf';



const CourseDetails = ({course}) => {
    const {title, image_url, details, instructor, _id, rating} = course;
    const ref = React.createRef()

    return (
        <div className=' p-4 mb-4 rounded-3 col-sm-12'>
            <img className = "img-fluid rounded-3" src={image_url} alt="" />
            <h2>{title}</h2>
            <>{details.length > 250 ?
              <p>{details.slice(0, 250) + '...'} <Link to = {`/courses/${_id}`}>Read More</Link></p>
              :
              <p>{details}</p>
            
            }</>
            <div className='d-flex'>
            <Image 
            roundedCircle
            className='me-3'
            src={instructor.img}
            style = {{height: '80px'}}
            
            ></Image>
            <div>
                <p className='mb-0'>{instructor.name}</p>
                <p><small>Course Duration: {instructor.duration}</small></p>
                <div className='d-flex'>
                <div className='align-items-center'>
                <FaStar className='text-warning me-2'></FaStar>
                <FaStar className='text-warning me-2'></FaStar>
                <FaStar className='text-warning me-2'></FaStar>
                <FaStar className='text-warning me-2'></FaStar>
                <FaStar className='text-warning me-2'></FaStar>
                <span>{rating?.number}</span>
                 </div>
            

            </div>


            
            </div>




            </div>
            

            <div>
            <Pdf targetRef={ref} filename="course-example.pdf">
                                {({ toPdf }) => <Button className="btn-design px-2 mt-3 bg-info" onClick={toPdf}>Download PFD File</Button>}
                            </Pdf>
                            <div className='' ref={ref}>
                                <span className='text-white'>f</span>
                            </div>

            </div>
        </div>
    );
};

export default CourseDetails;