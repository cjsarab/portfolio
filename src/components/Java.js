import React from 'react'
import video from '../videos/crocCodeIsleDemo.mp4';


const Java = () => {
  return (
    <>
    <div className="component">
      <div className="title">Projects</div>
      <div className="projects-body">
        <div className="java">
            <h2>Croc Code Isle</h2>
                <h4>Java/React Native/Spring</h4> 
                <a className="github-link" target="blank" href="https://github.com/cjsarab/capstone">GitHub Front</a>
                <br></br>
                <a className="github-link" target="blank" href="https://github.com/DuncanRN/capstone_backend">GitHub Back</a>
                <p>This is a mobile app created using Java and React Native. The app allows the user to refresh their programming knowledge with multiple languages supported. </p>
                    <li>Duolingo-style app for learning programming languages.</li>
                    <li>Fully extendable design, able to accommodate more languages as needed.</li>
                    <li>Fun, user-friendly aesthetic.</li>
                    <li>Integrated back end database to allow users to compete with each other for high scores.</li>
                    <p> This app was built in ten days and was my first experience using React Native. </p>
                    <p>I thoroughly enjoyed the mobile development aspect of designing this app.</p>
                    
                    <ul className="java-pics">
                    <li className="java-video">
                      <video width="240" height="480" controls
                        source src={video} type="mp4">
                      </video>
                      </li>
                    </ul>

                    <p>
                      Crocodile images used courtesy of <a className="github-link" target="blank" href="https://www.shutterstock.com/g/catalyststuff/sets">Catalyst Labs</a>
                    </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Java;