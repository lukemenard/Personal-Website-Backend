import React from 'react';
import './Footer.css'
import { Button } from 'semantic-ui-react'

const linkedin = "https://www.linkedin.com/in/lukemenard/"
const medium = "https://medium.com/@lukemenard"
const twitter = "https://twitter.com/LukeMenard12"
const github = "https://github.com/lukemenard"

const Footer = () => {
    return (
        <footer>
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
        </footer>
    )
}

export default Footer