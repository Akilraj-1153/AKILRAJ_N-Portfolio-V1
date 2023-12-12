// App.js
import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Akilimage from './images/Homeimg.jpg';
import Logo from './images/HomeLogo6.png';

import certificate1 from './images/HTML and CSS in depth.jpg';
import certificate2 from './images/Front End Development - HTML.jpg'
import certificate3 from './images/React Basics.jpg'
import certificate4 from './images/Blockchain Basics.jpg'
import certificate5 from './images/Foundations of User Experience (UX) Design.jpg'
import certificate6 from './images/UI&UX.jpg'
import certificate7 from './images/MATLAB Onramp.jpg'
import certificate8 from './images/Machine Learning Onramp.jpg' 

import project1 from './images/ROCK PAPER SCISSOR.png';
import project2 from './images/Etch-a-Sketch Color Game.png';
import project3 from './images/SIMPLE CALCULATOR.png';

function App() {
  const certificates = [
    certificate1,
    certificate2,
    certificate3,
    certificate4,
    certificate5,
    certificate6,
    certificate7,
    certificate8,
  ];

  const projects = [
    project1,
    project2,
    project3,
  ];

  return (
    <div className="App">
      <HomePage image={Akilimage} logo={Logo} cert={certificates} proj={projects} />
    </div>
  );
}

export default App;
