import React from 'react';
import './Project.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ExternalLink } from 'react-external-link';

function Project({ proj }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const projTitles = [
    'Rock paper scissor',
    'Etch-a-Sketch Color Game',
    'SIMPLE CALCULATOR',
  ];

  const projDescriptions = [
    'Enjoy a digital twist on the classic Rock, Paper, Scissors game. Crafted with HTML, CSS, and JavaScript, this interactive experience brings timeless fun to your fingertips.',
    'Immerse yourself in nostalgia with our digital Etch-a-Sketch Color Game. Using HTML, CSS, and JavaScript, this game transforms the classic toy into a vibrant canvas, allowing you to draw and paint with a virtual twist.',
    'Streamline your calculations with our sleek and user-friendly Simple Calculator. Developed using HTML, CSS, and JavaScript, it offers a smooth interface for basic arithmetic, making number crunching a breeze.',
  ];

  const projLinks = [
    'https://akilraj-1153.github.io/React-js-Rock_paper_scissors/',
    'https://akilraj-1153.github.io/Odin-Student-Etch-a-Sketch/',
    'https://akilraj-1153.github.io/Odin-Student-Calculator/'
  ];

  return (
    <div className='projects'>
      <div className='projheader'>
        <h1>Projects</h1>
      </div>
      <div>
        <Slider className='slider' {...settings} style={{ width: '64vw', margin: '0 auto' }}>
          {proj.map((project, index) => (
            <div className="projitem" key={index}>
              <div className="projimgbox">
                <img className="projimg" src={project} alt={`Project ${index}`} />
              </div>
              <div className="projcontent">
                <div id='projtitle'>
                  <h2>{projTitles[index]}</h2>
                  <button><ExternalLink href={projLinks[index]}>Visit the page</ExternalLink></button>
                </div>
                <p>{projDescriptions[index]}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Project;
