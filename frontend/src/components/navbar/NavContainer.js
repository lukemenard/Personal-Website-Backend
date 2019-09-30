import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/LumenLogo.png'
import './NavBar.css'

const NavContainer = () => {
  return (
    <div className="navbar">
        <img className="logo" src={Logo} />
        <div className="nav-links">
            <NavLink
                className="nav-item"
                id="home"
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className="nav-item"
                to="/experience"
            >
                Experience
            </NavLink>
            <NavLink
                className="nav-item"
                to="/expertise"
            >
                Expertise
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
        </div>
    </div>
  );
};

export default NavContainer;