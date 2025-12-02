import React, { useState } from 'react'
import contact_icon from "../../pictures/contact.png"
import "./Contact.css"

function Contact(){
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        if (formData.username && formData.email && formData.message) {
            setSubmitted(true)
            setTimeout(() => setSubmitted(false), 3000)
        }
    }

    return (
        <div id="contact">
            <div className="contact-container">
                <div className="leftContact">
                    <img src = {contact_icon} alt = "contact"></img>
                    <div className="social-links">
                        <h3>Connect with me</h3>
                        <div className="social-icons">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
                            <a href="mailto:aakashrajput0901@gmail.com" className="social-icon">Email</a>
                        </div>
                    </div>
                </div>
                <div className="rightContact">
                    <div className="form-header">
                        <h2>Get In Touch</h2>
                        <p>I'd love to hear from you. Let's discuss your project.</p>
                    </div>
                    <form action = "https://formspree.io/f/xovkkdlz" method = 'POST' onSubmit={handleSubmit}> 
                        <div className="form-group">
                            <input 
                                name="username" 
                                type="text" 
                                placeholder="Your Name" 
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                name="Email" 
                                type="email" 
                                placeholder="your.email@example.com" 
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="message" 
                                id="textarea" 
                                placeholder="Your message..." 
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" id="btn" className={submitted ? 'success' : ''}>
                            {submitted ? '✓ Message Sent!' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Contact