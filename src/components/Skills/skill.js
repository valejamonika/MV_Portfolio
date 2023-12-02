import React from 'react';
import './skill.css';
import uidesign from '../../assets/ui-design.png';
import webdesign from '../../assets/website-design.png';
import appdesign from '../../assets/app-design.png';

const Skill = () => {
  return (
    <section id='skills'>
        <span className="skilltitle">What I Do</span>
        <span className="skilldesc">I am skilled and passionate Python full stack web developer. Currently working as a Software Engineer in Msys Technologies Pvt Ind Ltd.</span>
        <div className="skillbars">
            <div className="skillbar">
                <img src={uidesign} alt="UI Design" className="skillbarimg" />
                <div className="skillbartxt"><h2>UI/UX Development</h2><p>As a Frontend Developer I am dedicated to crafting immersive and intuitive web experiences. With a strong foundation in HTML, CSS, and JavaScript, React JS, I specialize in transforming design concepts into functional and visually captivating websites and applications.</p></div>
            </div>
            <div className="skillbar">
                <img src={webdesign} alt="web Design" className="skillbarimg" />
                <div className="skillbartxt"><h2>Backend Development</h2><p>As a Backend Developer I have a passion for leveraging the power of Python to architect and develop robust, scalable, and efficient server-side solutions. I specialize in utilizing Python frameworks like Django and Flask to build high-performance applications and APIs. My expertise extends to crafting RESTful APIs that facilitate seamless communication between the frontend and backend, prioritizing security, efficiency, and scalability.  </p></div>
            </div>
            <div className="skillbar">
                <img src={appdesign} alt="App Design" className="skillbarimg" />
                <div className="skillbartxt"><h2>Database Development</h2><p>As a Database Developer I am proficient in designing and optimizing robust data solutions using MySQL. I have strong foundation in database architecture, query optimization, and data management. In database development began with a fascination for organizing and manipulating data effectively. MySQL became my tool of choice due to its reliability, performance, and extensive capabilities in handling complex datasets.</p></div>
            </div>
        </div>
    </section>
  )
}

export default Skill