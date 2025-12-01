import React, {useRef} from 'react'
import "./Navbar.css"
import {Link} from "react-scroll"
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'

function Navbar(){
    let menu = useRef();
    let mobileMenu = useRef();

    useGSAP(() => {
        let timeLine = gsap.timeline()
        timeLine.from("nav h1",{
            y:-100,
            duration:0.5,
            opacity: 0
        })

        timeLine.from("nav ul li",{
            y:-100,
            duration:0.5,
            opacity: 0,
            stagger: 1
        })
    })

    return (
        
        <nav>
            <h1>PORTFOLIO</h1>
            <ul className = "desktop-menu">
                <Link to = "home" activeClass = 'active' smooth = {true} spy = {true} duration = {600}><li>Home</li></Link>
                <Link to = "about" activeClass = 'active' smooth = {true} spy = {true} duration = {600}><li>About</li></Link>
                <Link to = "projects" activeClass = 'active' smooth = {true} spy = {true} duration = {600}><li>Projects</li></Link>
                <Link to = "certificates" activeClass = 'active' smooth = {true} spy = {true} duration = {600}><li>Certificates</li></Link>
                <Link to = "contact" activeClass = 'active' smooth = {true} spy = {true} duration = {600}><li>Contact</li></Link>
                
                
            </ul>
            <div className="hamburger" ref = {menu} onClick = {()=> {
                mobileMenu.current.classList.toggle("activeMobile");
                menu.current.classList.toggle("activeham");
                }
            }>
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>
            </div>
            <ul className = "mobile-menu" ref = {mobileMenu}>
                <Link to = "home" activeClass = 'active' smooth = {true} spy = {true} duration = {600}><li>Home</li></Link>
                <Link to = "about" activeClass = 'active' smooth = {true} spy = {true} duration = {600}><li>About</li></Link>
                <Link to = "projects" activeClass = 'active' smooth = {true} spy = {true} duration = {600}><li>Projects</li></Link>
                <Link to = "certificates" activeClass = 'active' smooth = {true} spy = {true} duration = {600}><li>Certificates</li></Link>
                <Link to = "contact" activeClass = 'active' smooth = {true} spy = {true} duration = {600}><li>Contact</li></Link>
                
            </ul>
        </nav>
        
    )
}

export default Navbar