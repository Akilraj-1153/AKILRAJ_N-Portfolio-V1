import React from 'react';
import './HomePage.css'
import AboutMe from './AboutMe';
import Contact from './Contact';
import NavBar from './NavBar';

function HomePage(props) {
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
                <NavBar logo={props.logo}></NavBar>
             </div>
             <div className="content">
                <AboutMe></AboutMe>
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