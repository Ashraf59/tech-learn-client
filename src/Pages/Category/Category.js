import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../../Shared/CourseDetails/CourseDetails';

const Category = () => {

    const courses = useLoaderData();
    return (
        <div className='shadow p-4 mb-4 rounded-3 w-50 m-auto col-sm-12'>
            <h2 className='text-secondary text-center'>Popular Course</h2>
            {
                courses.map(course => <CourseDetails
                
                    key = {course._id}
                    course = {course}
                
                ></CourseDetails>)
            }
        </div>
    );
};

export default Category;