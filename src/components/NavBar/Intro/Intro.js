import React from "react";
import './Intro.css';
import hs from '../../../assets/headshot_apples.png';
import {Link} from 'react-scroll';

const Intro = () => {
    return (
    <section id="headshot">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Jamie Branch</span> <br/ >Full-stack Developer</span>
            <p className="descrMe">I have a knack for creating seamless web applications. <br></br>With expertise in both front-end and back-end technologies.</p>
        </div>
        <img src={hs} alt="Headshot Pic" className="hs"/>
    </section>
    );
}

export default Intro;