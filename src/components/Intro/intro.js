import React from 'react';
import './intro.css';
import bg from '../../assets/crop.jpg';
import btnimg from '../../assets/hireme.png'
import { Link } from 'react-scroll'; 

const Intro = () => {
    return (
        <section id="intro">
            <div className="introcontent">
                <span className="hello">Hello, Welcome to my portfolio! </span>
                <span className="introtext">I'm <span className="introname">Monika</span> <br /> Python Web Developer</span>
                <p className="intropara">I am skilled and passionate Python web developer <br/> dedicated to crafting dynamic and efficient web solutions. <br/>With 2.5 years of hands-on experience in web development, <br/> I specialize in leveraging Python's robust capabilities <br/>to create responsive, scalable, and feature-rich web applications.</p>
                <Link><button className="btn" onClick={() => {
                    document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
                }}>
                <img src={btnimg} alt="Hireme" className="btnimg" />My Works!</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )   
}

export default Intro;