import React from 'react';
import python1 from '../img/python/python_user_sitemap.png';
import python2 from '../img/python/python_screenshot_1.png';
import python3 from '../img/python/python_add_country.png';
import python4 from '../img/python/python_view_country.png';

const Python = () => {
  return (
    <>
    <div className="component">
      <div className="title">Projects</div>
      <div className="projects-body">
        <div className="python">
            <h2>Travel Tracker</h2>
                <h4>Python/Flask/PostgreSQL</h4>
                <a className="github-link" target="blank" href="https://github.com/cjsarab/project_travel">GitHub Repository</a>
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
      </div>
    </div>
    </>
  );
};

export default Python;