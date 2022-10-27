import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../../Shared/CourseDetails/CourseDetails';

const Course = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h2>Our All Courses</h2>
            <div>
                {
                    allCourses.map(course => <CourseDetails
                    key = {course._id}
                    course = {course}
                    
                    ></CourseDetails>)
                }
            </div>
        </div>
    );
};

export default Course;