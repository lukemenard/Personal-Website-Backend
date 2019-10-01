import React from 'react';
import { Card } from 'semantic-ui-react'
import './Experience.css'

const ExperienceCard = props => {
    const { experience } = props
    return (
        <div className="experience-card">
            <div className="experience-card-content">
                <div className="experience-card-front">
                    <div className="company">{experience.company}</div>
                    <div className="title">{experience.title}</div>
                    <div className="location">{experience.location}</div>
                    <div>
                        <span className="work-dates">
                            {experience.start_year} to {experience.end_year}
                        </span>
                    </div>
                </div>
                <div className="experience-card-back">
                    <div className="work-description">
                    <ul>
                        <li>{experience.description1}</li>
                        <li>{experience.description2}</li>
                        <li>{experience.description3}</li>
                        <li>{experience.description4}</li>
                    </ul>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default ExperienceCard;