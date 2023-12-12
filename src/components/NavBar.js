import React from 'react';
import './NavBar.css';

function Navbar(props) {
  return (
    <div className='Navbar'>
      <div className='HomoLogobox'>
        <img
          className='homeimg'
          src={props.logo}
          alt="Home Logo"
          onClick={() => props.onButtonClick('aboutme')}
        />
      </div>
      <div className='NavbarBtns'>
        <div className="Nav"><button className='NavButton' onClick={() => props.onButtonClick('resume')}>Resume</button></div>
        <div className="Nav"><button className='NavButton' onClick={() => props.onButtonClick('project')}>Projects</button></div>
        <div className="Nav"><button className='NavButton' onClick={() => props.onButtonClick('skill')}>Skill</button></div>
        <div className="Nav"><button className='NavButton' onClick={() => props.onButtonClick('certifications')}>Certifications</button></div>
      </div>
    </div>
  );
}

export default Navbar;
