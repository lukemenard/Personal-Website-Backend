import React, { Component } from 'react'
import ExperienceCardList from './ExperienceCardList'

export default class ExperienceContainer extends Component {
    render() {
        return (
            <div>
                <h2>Experience Container</h2>
                <ExperienceCardList />
            </div>
        )
    }
}