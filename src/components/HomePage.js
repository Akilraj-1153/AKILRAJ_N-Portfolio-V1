import React, { useState } from 'react';
import './HomePage.css';
import AboutMe from './AboutMe';
import Contact from './Contact';
import NavBar from './NavBar';
import Certifications from './Certifications';
import Project from './Project';
import Resume from './Resume';
import Skill from './Skill';

function HomePage({ image, logo, resume, proj, cert }) {
  const [activeComponent, setActiveComponent] = useState('aboutme');

  function handleButtonClick(component) {
    setActiveComponent(component);
  }

  return (
    <div className='Home'>
      <div className="Homecontent">
        <div>
          <div className='imagebox'>
            <div className='imginnerbox'>
              <img className='myimage' src={image} alt='AKIL'></img> 
            </div>
          </div> 
        </div>
        <div>
          <div className='NavBar'>
            <NavBar logo={logo} onButtonClick={handleButtonClick}></NavBar>
          </div>
          <div className="content">
            {activeComponent === 'aboutme' && <AboutMe />}
            {activeComponent === 'resume' && <Resume resume={resume} />}
            {activeComponent === 'project' && <Project proj={proj} />}
            {activeComponent === 'skill' && <Skill />}
            {activeComponent === 'certifications' && <Certifications cert={cert} />}
          </div>
          <div className="footer">
            <Contact></Contact>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
