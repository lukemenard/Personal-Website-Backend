import React, { Component } from 'react'
import PortfolioCardList from './PortfolioCardList'

export default class PortfolioContainer extends Component {
    render() {
        return (
            <div>
                <h2>Portfolio Container</h2>
                <PortfolioCardList />
            </div>
        )
    }
}