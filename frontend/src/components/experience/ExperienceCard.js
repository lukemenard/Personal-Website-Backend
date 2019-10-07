import React from 'react';
import { Image, Card } from 'semantic-ui-react'
import './Experience.css'

const ExperienceCard = props => {
    const { experience } = props
    return (
        <div>
            <Card className={`experience-card experience-card-${experience.id}`}>
                <Image src={experience.image} className={`experience-image experience-image-${experience.id}`} />    
                <div className={`experience-card-front experience-card-front-${experience.id}`}>
                    <div className={`experience-card-content experience-card-content-${experience.id}`}>
                        <Card.Header>
                            <h1 className={`company company-${experience.id}`}>{experience.company}</h1>
                            <h3 className={`title title-${experience.id}`}>{experience.title}</h3>
                            <hr className="experience-line"></hr>
                        </Card.Header>
                        <Card.Content>
                            <Card.Meta>
                                <h4 className={`location location-${experience.id}`}>{experience.location}</h4>
                                <p className={`work-dates work-dates-${experience.id}`}>{experience.start_year} to {experience.end_year}</p>
                            </Card.Meta>
                        </Card.Content>
                    </div>
                    <div className={`experience-card-back experience-card-back-${experience.id}`}>
                        <Card.Content className={`work-description work-description-${experience.id}`}>
                            <ul>
                                <li>{experience.description1}</li>
                                <li>{experience.description2}</li>
                                {experience.description3 ? <li>{experience.description3}</li> : null}
                                {experience.description4 ? <li>{experience.description4}</li> : null}
                            </ul>
                        </Card.Content>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default ExperienceCard;