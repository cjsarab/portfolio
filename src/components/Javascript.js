import React from 'react';

import js1 from '../img/javascript/yahtzee_form.png';
import js2 from '../img/javascript/yahtzee_gameplay.png';
import js3 from '../img/javascript/yahtzee_scoring.png';
import js4 from '../img/javascript/yahtzee_game_over.png';

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
                    <p> Paragraph to type text in</p>
                    
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

        </div>
      </div>
    </div>
    </>
  );
};

export default Javascript;