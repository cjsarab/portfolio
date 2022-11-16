import React from 'react';
import python1 from '../img/python/python_user_sitemap.png';
import python2 from '../img/python/python_screenshot_1.png';
import python3 from '../img/python/python_add_country.png';
import python4 from '../img/python/python_view_country.png';

import js1 from '../img/javascript/yahtzee_form.png';
import js2 from '../img/javascript/yahtzee_gameplay.png';
import js3 from '../img/javascript/yahtzee_scoring.png';
import js4 from '../img/javascript/yahtzee_game_over.png';

const Projects = () => {
  return (
    <>
    <div className="component">
      <div className="title">Projects</div>
      <div className="projects-body">
        <div className="python">
            <h2>Travel Tracker</h2>
                <h4>Python/Flask/PostgreSQL</h4>
                    <p>This is a web app created using Python and Flask. The app includes full CRUD functionality. The user can: </p>
                    <li>Create, update and delete countries from their wishlist.</li>
                    <li>Create, update and delete cities to and from countries.</li>
                    <li>Create update and delete sights to and from cities.</li>
                    <p>The app also persists data using an SQL database.</p>
                    
                    <ul className="python-pics">
                        <li className='python-pic-1'>
                        <img src={python1} alt="screenshot of Python project"/>
                        </li>
                        <li className='python-pic-2'>
                        <img src={python2} alt="screenshot of Python project - add country"/>
                        </li>
                        <li className='python-pic-3'>
                        <img src={python3} alt="screenshot of Python project - view country"/>
                        </li>
                        <li className='python-pic-4'>
                        <img src={python4} alt="screenshot of Python project - view country"/>
                        </li>
                    </ul>
                    <hr></hr>
        </div>
        <div className="javascript">
            <h2>Yahtzee</h2>
                <h4>Javascript/React/MongoDB</h4>
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

export default Projects;