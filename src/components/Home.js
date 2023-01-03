import React from 'react';
import cammy from '../img/cammy.jpeg';

const Home = () => {
  return (
    <>
    <div className="component">
      <div className="title">Home</div>
      <div className="body">
        <p className="welcome">
        <b>Welcome to my portfolio!</b>
        <br></br>
        <br></br>
        Please use the links above to check out some of my recent projects.
        </p>
        <p className="about">
        My passion is for development of excellent applications that serve a purpose in the real world, for example in education, entertainment or user experience.
        <br></br> 
        <br></br>
        I love learning new languages and frameworks and I have recently completed the Professional Software Development course at <a className="github-link" target="blank" href="https://codeclan.com/courses/professional-software-development/">CodeClan</a>.
        </p>
        <img className="profile" src={cammy} alt="cammy"/>
      </div>
    </div>
    </>
  );
};

export default Home;