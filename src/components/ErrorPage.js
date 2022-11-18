import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
    <h1>404</h1>
    <div className="welcome">Oops! This page has not been found! Jump back to 
    <Link className="github-link" to="/"> homepage</Link>
    </div>
    </>
  );
};

export default ErrorPage;