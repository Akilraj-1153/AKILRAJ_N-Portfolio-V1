import React from 'react'
import './NavBar.css';
function NavBar(props) {
  return (
    <div className='Navbar'>
        <div className='HomoLogobox'>
            <img src={props.logo} alt="HomeLogo" />
        </div>
        <div className='NavbarBtns'>
            <div className="Nav"><button className='NavButton'>About Me</button></div>
            <div className="Nav"><button className='NavButton'>Resume</button></div>
            <div className="Nav"><button className='NavButton'>Projects</button></div>
            <div className="Nav"><button className='NavButton'>Skill</button></div>
            <div className="Nav"><button className='NavButton'>Certifications</button></div>
        </div>
    </div>
  )
}

export default NavBar;