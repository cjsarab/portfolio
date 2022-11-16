import React from 'react';
import cammy from '../img/cammy.jpeg';

const Home = () => {
  return (
    <>
    <div className="component">
      <div className="title">Home</div>
      <div className="body">
        <p className="welcome">
        Welcome to my portfolio! Please use the links above to check out some of my recent projects.
        </p>
        <p className="about">
        I like to develop all kinds of software, but I especially enjoy making software easier and more enjoyable for people to use.
        </p>
        <img className="profile" src={cammy} alt="cammy"/>
      </div>
    </div>
    </>
  );
};

export default Home;