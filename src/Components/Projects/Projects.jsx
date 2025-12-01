import React from 'react'
import Card from "../Card/Card"
import "./Projects.css"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"

function Projects() {
    useGSAP(() => {
    gsap.from("#project-heading", {
        x: -100,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger:{
            trigger: "#project-heading",
            scroll:"body",
            scrub: 2,
            start: "top 60%",
            end: "top 30%"
            }
        })

        gsap.from(".slider", {
        y: 100,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger:{
            trigger: ".slider",
            scroll:"body",
            scrub: 2,
            start: "top 70%",
            end: "top 30%"
            }
        })
    })    
    return (
        <div id ="projects">
            <h1 id = "project-heading"> Implementing REAL-WORLD IDEAS through PROJECTS</h1>
            <div className="slider">
                <Card title = "InfiGPT"/>
                <Card title = "Hand-gesture control game" image />
                <Card title = "Text to Speech Generator"/>
                <Card title = "Secure ME - Password Generator"/>
            </div>
        </div>
    )
}

export default Projects;