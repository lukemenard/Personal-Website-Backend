import React, { Component } from 'react'
import ExperienceCardList from './ExperienceCardList'
import Photo from '../../Assets/SL2.jpg'

const experiencesURL = "http://localhost:3000/experiences"

export default class ExperienceContainer extends Component {
    state = {
        experiences: []
    }

    componentDidMount() {
        this.fetchExperiences()
    }

    fetchExperiences = () => {
        fetch(experiencesURL)
        .then(response => response.json())
        .then(results => this.setState({
            experiences: results
        }))
    }

    addExperienceCardList = () => {
        return(
            <div>
                <ExperienceCardList experiences={this.state.experiences}/>
            </div>
        )
    }

    render() {
        return (
            this.addExperienceCardList()
        )
    }
}