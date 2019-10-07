import React, { Component } from 'react'
import ContactCardList from './ContactCardList'
import './Contact.css'
import Tree from '../../Assets/Tree.png'
import { Button } from 'semantic-ui-react'

export default class ContactContainer extends Component {
    render() {
        return (
            <div className="contact-container">
                <div className="contact-page-title">
                    Contact
                <hr className="contact-page-title-line"></hr>
            </div>
                <div className="contact-card">
                    <div className="tree-container">
                        <img className="tree" src={Tree} alt=""/>
                    </div>
                    <div className="contact-name-div">
                        <h1 className="contact-name">Luke Menard</h1>
                    </div>
                    <hr className="contact-name-line"></hr>
                    <div className="contact-info">    
                            <div className='contact-email'>
                                <a
                                    className='about-email'
                                    href="mailto:lukemenard@gmail.com"
                                >
                                    lukemenard@gmail.com
                                </a>
                            </div> 
                            <div className='contact-phone'>
                                <a
                                    className='about-phone'
                                    href="tel:413.658.4758"
                                >
                                    413.658.4758
                                </a>
                            </div>
                    </div>
                    <div>

                    
                    </div>
                </div>
            </div>
        )
    }
}