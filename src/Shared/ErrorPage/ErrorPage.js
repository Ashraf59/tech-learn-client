import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div>
            <section className="flex align-items-center mx-auto justify-content-center error">
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center text-info">
                    <h1 className="display-1 fw-bold text-danger">404</h1>
                    <p className="fs-3 text-black"> <span className="text-danger">Opps!</span> Page not found.</p>
                    <p className="lead text-black">
                        The page you're looking for doesn't exist.
                    </p>
                    <Link to='/' className="btn btn-primary text-decoration-none">Back To Home</Link>
                </div>
            </div>
        </section>

        </div>
    );
};

export default ErrorPage;