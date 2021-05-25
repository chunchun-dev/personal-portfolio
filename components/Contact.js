import React from 'react'
import ContactForm from './ContactForm'

function Contact() {
    return (
        <div className="contact">
            <div className="contact__bar">
                <img src="./images/mail.svg" alt="email icon" />
                <p>Email</p>
                <span>qtcoder2@gmail.com</span>
            </div>
            <h1>Contact Me</h1>
            <br></br>
            <ContactForm/>
        </div>
    )
}

export default Contact
