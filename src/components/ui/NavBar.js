import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
    <ul>
        <li>
            <Link to="/portfolio/">Home</Link>
        </li>
        <li>
            <Link to="/portfolio/python">Python</Link>
        </li>
        <li>
            <Link to="/portfolio/javascript">Javascript</Link>
        </li>
        <li>
            <Link to="/portfolio/java">Java</Link>
        </li>
        <li>
            <Link to="/portfolio/contact">Contact</Link>
        </li>
    </ul>
    </div>
  );
};

export default NavBar;
