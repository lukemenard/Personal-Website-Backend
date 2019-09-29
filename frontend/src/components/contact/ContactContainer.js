import React, { Component } from 'react'
import ContactCardList from './ContactCardList'

export default class ContactContainer extends Component {
    render() {
        return (
            <div>
                <h2>Contact Container</h2>
                <ContactCardList />
            </div>
        )
    }
}