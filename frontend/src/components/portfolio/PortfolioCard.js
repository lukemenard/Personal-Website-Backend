import React from 'react';
import { Image, Card, Label } from 'semantic-ui-react'
import './Portfolio.css'
// import { Page, Document } from 'react-pdf/dist/entry.parcel';

const PortfolioCard = props => {
    const { project } = props
    // debugger

    return (
        <Card className={`project-card project-card-${project.id}`}>
            <div className={`project-card-front project-card-front-${project.id}`}>
                <div className={`project-card-content project-card-content-${project.id}`}>
                    <Card.Header>
                        <a 
                            href={project.link}
                            target="_blank"
                        >
                            <h1 className={`project-name project-name-${project.id}`}>{project.name}</h1>
                        </a>
                        <hr className="project-line"></hr>
                    </Card.Header>
                    <Image src={project.image} className={`project-image project-image-${project.id}`} />    
                    <hr className="project-line"></hr>
                    <Card.Content>
                        <Card.Meta>
                            <p className={`project-description project-description-${project.id}`}>{project.description}</p>
                        </Card.Meta>
                    </Card.Content>
                </div>
                <div className={`project-card-back project-card-back-${project.id}`}>
                    <Card.Content className={`technologies technologies-${project.id}`}>
                            {project.technologies[0] ? <Label color="orange">{project.technologies[0].name}</Label> : null}
                            {project.technologies[1] ? <Label color="orange">{project.technologies[1].name}</Label> : null}
                            {project.technologies[2] ? <Label color="orange">{project.technologies[2].name}</Label> : null}
                    </Card.Content>
                </div>
            </div>
        </Card>
    );
}

export default PortfolioCard;
