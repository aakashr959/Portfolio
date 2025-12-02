import React from 'react'
import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()
    
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>AAKASH RAJPUT</h3>
                    <p>Full Stack Developer & Tech Innovator</p>
                </div>
                
                
                
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#certificates">Certificates</a></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h4>See my Work</h4>
                    <div className="footer-social">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        
                        <a href="https://leetcode.com/u/aakash_rajput09/" target="_blank" rel="noopener noreferrer">Leetcode</a>
                        <a href= "https://learn.microsoft.com/en-us/users/aakashrajput-8767/" target="_blank" rel="noopener noreferrer">Microsoft Learn</a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {currentYear} Aakash Rajput. All rights reserved.</p>
                <p>Designed & Built with <span className="heart">♥</span> using React & GSAP</p>
            </div>
        </footer>
    )
}

export default Footer
