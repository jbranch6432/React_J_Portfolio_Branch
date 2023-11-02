import React from 'react';
import './Navbar.css';
import logo from '../../assets/icons8-letter-b-64.png';
import contactImg from '../.././assets/contactme.jpg';
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className='desktopMenu'>
                <Link className='desktopMenuListItem'>Home</Link> 
                <Link className='desktopMenuListItem'>About</Link>
                <Link className='desktopMenuListItem'>Portfolio</Link>
            </div>
            <button className='desktopMenuBtn'>
                <img src={contactImg} alt='' className='desktopMenuImg'/>
            </button>
        </nav>
    )
}

export default Navbar;