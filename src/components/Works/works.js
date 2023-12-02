import React from 'react';
import './works.css';
import portfolio1 from '../../assets/portfolio-1.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/portfolio-3.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/portfolio-5.png';
import portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
  return (
    <section id="works">
        <h2 className="workstitle">My Works</h2>
        <span className="workdesc">Below images have link to github repository of some projects which I have created using diffetent technologoies. Click and visit to my workplace.</span>
        <div className="worksimgs">
            <a href = "https://github.com/valejamonika/Bank-Project" title="Portfolio"><img src={portfolio1} alt="" className="workimg" /></a>
            <a href = "https://github.com/valejamonika/Bank-Project" title="Bank Project"><img src={portfolio2} alt="" className="workimg" /></a>
            <a href = "https://github.com/valejamonika/LinkdinProfile-QR-Code" title="QR Code"><img src={portfolio3} alt="" title="Your Image Title" className="workimg" /></a>
            <a href = "https://github.com/valejamonika/MYPORTFOLIO" title="Portfolio"><img src={portfolio4} alt="" className="workimg" /></a>
            <a href = "https://github.com/valejamonika/Job-Portal" title="Job Portal"><img src={portfolio5} alt="" className="workimg" /></a>
            <a href = "https://github.com/valejamonika/Sport-Club-Management" title="Sport Club Management"><img src={portfolio6} alt="" className="workimg" /></a>
        </div>
        <button className="workbtn">See More</button>
    </section>
  )
}

export default Works;