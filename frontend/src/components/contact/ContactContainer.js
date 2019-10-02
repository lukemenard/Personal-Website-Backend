import React, { Component } from 'react'
import ContactCardList from './ContactCardList'
import './Contact.css'
import Tree from '../../Assets/Tree.png'

export default class ContactContainer extends Component {
    render() {
        return (
            <div className="contact-container">
                <div className="contact-card">
                    <div className="tree-container">
                        <img className="tree" src={Tree} alt=""/>
                    </div>
                    <div className="contact-info">    
                            <div className='contact-email'>Email:
                                <a
                                    className='about-email'
                                    href="mailto:lukemenard@gmail.com"
                                >
                                    lukemenard@gmail.com
                                </a>
                            </div> 
                            <div className='contact-phone'>Phone: 
                                <a
                                    className='about-phone'
                                    href="tel:413.658.4758"
                                >
                                    413.658.4758
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}