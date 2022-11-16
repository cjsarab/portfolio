import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="component">
      <div className="title">Contact Details</div>
      <div className="projects-body">
        <div className="body">
            <div className="contacts">
                <p className="about">
                    Please feel free to contact me on LinkedIn. I'm always happy to discuss code and new projects!
                </p>
                <ul className="contact-links">
                    <li>
                    <a className="github-link" target="blank" href="https://www.linkedin.com/in/cammy-smith/">LinkedIn</a>
                    </li>
                    <li>
                    <a className="github-link" target="blank" href="https://github.com/cjsarab">GitHub Repository</a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;