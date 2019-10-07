import React, { Component } from 'react'
import PortfolioCard from './PortfolioCard'

class PortfolioCardList extends Component {
    render() {
        const { projects } = this.props
        return (
            <div className="portfolio-container">
                <div className="portfolio-page-title">
                        Work Portfolio
                        <hr className="portfolio-page-title-line"></hr>
                </div>
                <div className="portfolio-card-list">
                    {projects.map(project => (
                        <PortfolioCard
                            key={project.id}
                            project={project}
                        />
                    )
                    )}     
                </div>
            </div>
        )
    }
}

export default PortfolioCardList