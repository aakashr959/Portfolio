import React from 'react'
import Certificatecard from "../Certificate-card/Certificatecard"
import "./Certificates.css"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import ColumbiaUniversityLogo from "../../pictures/ColumbiaUniversityLogo.png"

function Certificates() {
    useGSAP(() => {
    gsap.from("#certificate-heading", {
        x: -100,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger:{
            trigger: "#certificate-heading",
            scroll:"body",
            scrub: 2,
            start: "top 80%",
            end: "top 10%"
            }
        })

        gsap.from(".cert-subtitle", {
        opacity: 0,
        duration: 0.8,
        scrollTrigger:{
            trigger: ".cert-subtitle",
            scroll:"body",
            scrub: 2,
            start: "top 80%",
            end: "top 10%"
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
            start: "top 10%",
            end: "top 30%"
            }
        })
    })    
    return (
        <div id ="certificates">
            <div className="certificates-header">
                <h1 id = "certificate-heading">MY TOP CERTIFICATES AND CREDENTIALS</h1>
                <p className="cert-subtitle">Professional certifications and achievements in technology and leadership</p>
            </div>
            <div className="slider">
                <Certificatecard 
                    title = "Prompt Engineering using Open AI (Columbia University)" 
                    image = {ColumbiaUniversityLogo}
                    link="https://example.com/certificate1"
                />
                <Certificatecard 
                    title = "Github Copilot Trophy (Microsoft)" 
                    link="https://example.com/certificate2"
                />
                <Certificatecard 
                    title = "MongoDB for Students (MongoDB University)"
                    link="https://example.com/certificate3"
                />
                <Certificatecard 
                    title = "TCS Young Professional Badge (TCS ION)"
                    link="https://example.com/certificate4"
                />
                <Certificatecard 
                    title = "Data Structure & Algorithms with JAVA (Apna College)"
                    link="https://example.com/certificate5"
                />
                <Certificatecard 
                    title = "Software Engineering Job Simulation (Accenture)"
                    link="https://example.com/certificate6"
                />
                <Certificatecard 
                    title = "Ethics in the age of Generative AI (PMI)"
                    link="https://example.com/certificate7"
                />
            </div>
        </div>
    )
}

export default Certificates

