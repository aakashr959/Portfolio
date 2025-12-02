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

        gsap.from(".project-subtitle", {
        opacity: 0,
        duration: 0.8,
        scrollTrigger:{
            trigger: ".project-subtitle",
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
            <div className="projects-header">
                <h1 id = "project-heading">Implementing REAL-WORLD IDEAS through PROJECTS</h1>
                <p className="project-subtitle">Showcasing my expertise in full-stack development and innovative solutions</p>
            </div>
            <div className="slider">
                <Card title = "InfiGPT" projectLink="https://example.com/infigpt" githubLink="https://github.com/aakash/infigpt"/>
                <Card title = "Hand-gesture control game" projectLink="https://example.com/gesture-game" githubLink="https://github.com/aakashr959/Hand-Gesture-Controlled-Game"/>
                <Card title = "Text to Speech Generator" projectLink="https://example.com/text-to-speech" githubLink="https://github.com/aakashr959/Text-to-Speech-Generator
                "/>
                <Card title = "Secure ME - Password Generator" projectLink="https://example.com/password-gen" githubLink="https://github.com/aakash/password-gen"/>
            </div>
        </div>
    )
}

export default Projects;