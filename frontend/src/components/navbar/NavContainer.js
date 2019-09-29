import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon, Button } from 'semantic-ui-react'
import './NavBar.css'

const linkedin = "https://www.linkedin.com/in/lukemenard/"
const medium = "https://medium.com/@lukemenard"
const twitter = "https://twitter.com/LukeMenard12"
const github = "https://github.com/lukemenard"

const NavContainer = () => {
  return (
    <div className="navbar">
        <div className="social-media">
            <Button 
                circular
                icon="linkedin"
                size="small"
                className="social-media-button"
                href={linkedin}
                target="_blank"
            />
            <Button
                circular
                icon="github"
                size="small"
                className="social-media-button"
                href={github}
                target="_blank"
            />
            <Button
                circular
                icon="medium"
                size="small"
                className="social-media-button"
                href={medium}
                target="_blank"
            />
            <Button 
                circular
                icon="twitter"
                size="small"
                className="social-media-button"
                href={twitter}
                target="_blank"
            />  
        </div>

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