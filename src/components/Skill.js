import React from 'react';
import './Skill.css';

function Skill() {
  return (
    <div className='skill'>
      <div>
        <section id="technical-skills">
          <h2>Technical Skills:</h2>

          <h3>Programming Languages:</h3>
          <ul>
            <li>C</li>
            <li>JavaScript</li>
          </ul>

          <h3>Web Development:</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>
              Front-end frameworks:
              <ul>
                <li>React</li>
              </ul>
            </li>
          </ul>

          <h3>Version Control:</h3>
          <ul>
            <li>Git and GitHub</li>
          </ul>
        </section>

        <section id="web-design-skills">
          <h2>Designing Skills:</h2>

          <h3>Graphic Design:</h3>
          <ul>
            <li>Figma</li>
            <li>Canva</li>
          </ul>
        </section>

        <section id="leadership">
          <h2>Leadership:</h2>
          <ul>
            <li>Served as a non-tech head for YRC (Youth Red Cross) in my college.</li>
          </ul>
        </section>

        <section id="non-tech-skills-hobbies">
          <h2>Non-Technical Skills and Hobbies:</h2>

          <h3>Hobbies:</h3>
          <ul>
            <li>Gardening</li>
            <li>Photography</li>
            <li>Volunteering</li>
          </ul>
        </section>

        <section id="key-highlights">
          <h2>Key Highlights:</h2>
          <ul>
            <li>Proficient in C and JavaScript for programming.</li>
            <li>Experienced in web development using HTML, CSS, and JavaScript, with expertise in the React framework.</li>
            <li>Skilled in graphic design with tools such as Sketch, Figma, and Canva.</li>
            <li>Familiar with version control using Git and GitHub.</li>
            <li>Demonstrated leadership as a non-tech head for YRC in college.</li>
            <li>Enjoys hobbies including gardening and photography, with a passion for volunteering.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Skill;
