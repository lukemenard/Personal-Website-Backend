import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/LumenLogo.png'
import './NavBar.css'

const NavContainer = () => {
  return (
    <div className="navbar">
        <img className="logo" src={Logo} alt=""/>
        <div className="nav-links">
            <NavLink
                className="nav-item"
                id="home"
                to="/"
            >
                About
            </NavLink>
            <NavLink
                className="nav-item"
                to="/experience"
            >
                Experience
            </NavLink>

            <NavLink
                className="nav-item"
                to="/portfolio"
            >
                Portfolio
            </NavLink>
            <NavLink
                className="nav-item"
                to="/contact"
            >
                Contact
            </NavLink>
            <a
                className="nav-item-resume"
                href="https://drive.google.com/file/d/10jd6cWjZHgoWbENlPFk1EYFnAvARukwd/view?usp=sharing"
                target="_blank"
                download
            >
                Resume
            </a>                
        </div>
    </div>
  );
};

export default NavContainer;