import React from 'react';
import './Certifications.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Certifications({ cert }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className='Certifications'>
      <div className='certcontent'>
        <div>
          <h1 className='certtitle'>Certifications</h1>
          <h5>
            <ul>
              <li>HTML and CSS in depth</li>
              <li>Front End Development - HTML</li>
              <li>React Basics</li>
              <li>Blockchain Basics</li>
              <li>Foundations of User Experience (UX) Design</li>
              <li>UI&UX</li>
              <li>MATLAB Onramp</li>
              <li>Machine Learning Onramp</li>
            </ul>
          </h5>
        </div>
      </div>
      <div className='certdisplay'>
        <Slider {...settings}>
          {cert.map((certificate, index) => (
            <div className="display" key={index}>
              <img className="certimg" src={certificate} alt={`Certificate ${index}`} /> 
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Certifications;
