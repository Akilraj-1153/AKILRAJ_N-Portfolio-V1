import React, { Component, useState } from 'react';
import './HomePage.css'
import AboutMe from './AboutMe';
import Contact from './Contact';
import NavBar from './NavBar';
import Certifications from './Certifications';
import Project from './Project';
import Resume from './Resume';
import Skill from './Skill';






function HomePage(props) {

const[activeComponent,setActiveComponent]=useState('aboutme');

function handleButtonClick(Component){
   setActiveComponent(Component);
}

  return (
    <div className='Home'>
        <div className="Homecontent">
        <div>
             <div className='imagebox'>
                <div className='imginnerbox'>
                <img className='myimage' src={props.image} alt='AKIL'></img> 
                </div>
             </div> 
        </div>
        <div>
             <div className='NavBar'>
                <NavBar logo={props.logo} onButtonClick={handleButtonClick}></NavBar>
             </div>
             <div className="content">
               {activeComponent==='aboutme'&& <AboutMe></AboutMe>}
               {activeComponent==='resume'&& <Resume resume={props.resume}></Resume>}
               {activeComponent==='project'&& <Project proj={props.proj}></Project>}
               {activeComponent==='skill'&& <Skill></Skill>}
               {activeComponent==='certifications'&& <Certifications cert={props.cert}></Certifications>}
             </div>
             <div className="footer">
                <Contact></Contact>
             </div>
        </div>
        
        </div>
    </div>
  )
}

export default HomePage;