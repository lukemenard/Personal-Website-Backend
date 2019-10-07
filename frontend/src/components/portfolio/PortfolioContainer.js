import React, { Component } from 'react'
import PortfolioCardList from './PortfolioCardList'
import SearchBar from './SearchBar'

const projectsURL = "http://localhost:3000/projects"

export default class PortfolioContainer extends Component {
    
    state = {
        projects: [],
        filteredProjects: []
    }
    
    componentDidMount() {
        this.fetchProjects()
    }

    fetchProjects = () => {
        fetch(projectsURL)
        .then(response => response.json())
        .then(results => this.setState({
            projects: results,
            filteredProjects: results,
            clicked: false
        }))
    }

    addPortfolioCardList = () => {
        return(
            <div>
                <SearchBar filterProjectTechnology={this.filterProjectTechnology} filterProjectCategory={this.filterProjectCategory} />
                <PortfolioCardList projects={this.state.filteredProjects}/>
            </div>
        )
    }

    isClicked = project => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    filterProjectTechnology = technology => {
        if(technology !== "All"){
            this.setState({
                filteredProjects: this.state.projects.filter(project => {
                    let tech = project.technologies.filter(tech => (tech.name === technology))
                    return project.technologies.includes(tech[0])
            }
            )})
        }else{
            this.setState({
                filteredProjects: this.state.projects
            })
        }
    }

    filterProjectCategory = category => {
        if(category !== "All"){
            this.setState({
                filteredProjects: this.state.projects.filter(project => project.category === category)
            })
        }else{
            this.setState({
                filteredProjects: this.state.projects
            })
        }
    }

    render() {
        return (
            this.addPortfolioCardList()
        )
    }
}