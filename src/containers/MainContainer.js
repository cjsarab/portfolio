import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Python from '../components/python/Python';
import ErrorPage from '../components/ErrorPage';

const MainContainer = () => {
  return (
    <Router>
        <>
        <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/python" element={<Python />} />

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    </Router>
  );
};

export default MainContainer;