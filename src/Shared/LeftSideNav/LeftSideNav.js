import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css'

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);
 
    useEffect(()=>{
        fetch('https://tech-learn-server.vercel.app/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className='shadow p-4 rounded-3 text-center col-sm-12'>
            <h2 className='bg-info rounded-3 p-2 text-white'>All Courses</h2>
            <div className='category-design'>
           {
                categories.map(category => <p key = {category.id}>
                    <Link style={{textDecoration: 'none', color: 'black', fontSize: '20px'}} to = {`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
           </div>
        </div>
    );
    
    
};

export default LeftSideNav;