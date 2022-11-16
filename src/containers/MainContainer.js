import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from '../components/ui/NavBar';

import Home from '../components/Home';
import Python from  '../components/Python';
import Javascript from '../components/Javascript';
import Java from '../components/Java';
import Contact from '../components/Contact';
import ErrorPage from '../components/ErrorPage';

const MainContainer = () => {
  return (
    <Router>
        <>
        <NavBar />
            <Routes>
                <Route path="/portfolio/home" element={<Home />} />
                <Route path="/portfolio/python" element={<Python />} />
                <Route path="/portfolio/javascript" element={<Javascript />} />
                <Route path="/portfolio/java" element ={<Java />} />
                <Route path="/portfolio/contact" element={<Contact />} />

                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <footer><p> &copy; cjsarab 2022</p></footer>
        </>
    </Router>
  );
};

export default MainContainer;