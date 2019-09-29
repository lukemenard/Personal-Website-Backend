import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavContainer = () => {
  return (
    <div className="navbar">
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
  );
};

export default NavContainer;