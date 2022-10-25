import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../../Shared/CourseDetails/CourseDetails';

const Home = () => {

    const allCourses = useLoaderData();
    return (
        <div>
            <h2>Home course page: {allCourses.length}</h2>
            {
                allCourses.map(course => <CourseDetails
                key = {course.id}
                course = {course}
                
                ></CourseDetails>)
            }
        </div>
    );
};

export default Home;