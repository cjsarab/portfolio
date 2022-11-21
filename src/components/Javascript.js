import React from 'react';

import js1 from '../img/javascript/yahtzee_form.png';
import js2 from '../img/javascript/yahtzee_gameplay.png';
import js3 from '../img/javascript/yahtzee_scoring.png';
import js4 from '../img/javascript/yahtzee_game_over.png';

import video from '../videos/amiibo.mp4';
import amiibo1 from '../img/javascript/amiibo1.png';
import amiibo2 from '../img/javascript/amiibo2.png';
import amiibo3 from '../img/javascript/amiibo3.png';


const Javascript = () => {
  return (
    <>
    <div className="component">
      <div className="title">Projects</div>
      <div className="projects-body">
        <div className="javascript">
            <h2>Yahtzee</h2>
                <h4>Javascript/React/MongoDB</h4> 
                <a className="github-link" target="blank" href="https://github.com/cjsarab/yahtzee-javascript-react">GitHub Repository</a>
                <p>This is a web app created using Javascript and React. The app allows between one and six people to play Yahtzee together! </p>
                    <li>Full Yahtzee game allowing up to six players</li>
                    <li>Fully worked out logic for all scoring categories.</li>
                    <li>Pleasant, user-friendly aesthetic.</li>
                    <p> I had great fun working on this project and learned a lot from it!</p>
                    
                    <ul className="js-pics">
                        <li className='js-pic-1'>
                        <img src={js1} alt="screenshot of yahtzee form"/>
                        </li>
                        <li className='js-pic-2'>
                        <img src={js2} alt="screenshot of yahtzee gameplay"/>
                        </li>
                        <li className='js-pic-3'>
                        <img src={js3} alt="screenshot of yahtzee lower scores"/>
                        </li>
                        <li className='js-pic-4'>
                        <img src={js4} alt="screenshot of yahtzee game over"/>
                        </li>
                    </ul>
            <h2>Amiibo API</h2>
              <h4>Javascript/React/MongoDB</h4> 
              <a className="github-link" target="blank" href="https://github.com/cjsarab/react-e-commerce-site">GitHub Repository</a>
              <p>This is a web app created using Javascript and React. This app uses an API. The app allows a user to add and delete their favourite amibos to a basket. </p>
                  <li>Full utilisation of a publicly-available API.</li>
                  <li>User is able to add and delete amiibo from the basket.</li>
                  <li>Style was carefully considered regarding the user experience and method of information display.</li>

                  <ul className="amiibo-pics">
                      <li className="amiibo-video">
                      <video width="640" height="385" controls
                        source src={video} type="mp4">
                      </video>
                      </li>
                      <li className='js-pic-2'>
                      <img src={amiibo1} alt="screenshot of amiibo home"/>
                      </li>
                      {/* <li className='js-pic-3'>
                      <img src={amiibo2} alt="screenshot of amiibo further info"/>
                      </li>
                      <li className='js-pic-4'>
                      <img src={amiibo3} alt="screenshot of amiibo basket"/>
                      </li> */}
                  </ul>

        </div>
      </div>
    </div>
    </>
  );
};

export default Javascript;