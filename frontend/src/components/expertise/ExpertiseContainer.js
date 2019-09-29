import React, { Component } from 'react'
import ExpertiseCardList from './ExpertiseCardList'

export default class ExpertiseContainer extends Component {
    render() {
        return (
            <div>
                <h2>Expertise Container</h2>
                <ExpertiseCardList />
            </div>
        )
    }
}