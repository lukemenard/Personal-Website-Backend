import React from 'react'
import ExperienceCard from './ExperienceCard'
import './Experience.css'

class ExperienceCardList extends React.Component {
    render(){
        const { experiences } = this.props
        return (
            <div className="experience-container">
                <div className="experience-page-title">
                        Experience
                        <hr className="experience-page-title-line"></hr>
                </div>
                <div className="experience-card-list">
                    {experiences.map(experience =>
                        <ExperienceCard
                            key={experience.id}
                            experience={experience}
                        />
                    )}     
                </div>
            </div>
        )
    }
}

export default ExperienceCardList