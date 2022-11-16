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
                <Route path="/" element={<Home />} />
                <Route path="/python" element={<Python />} />
                <Route path="/javascript" element={<Javascript />} />
                <Route path="/java" element ={<Java />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <footer><p> &copy; cjsarab 2022</p></footer>
        </>
    </Router>
  );
};

export default MainContainer;