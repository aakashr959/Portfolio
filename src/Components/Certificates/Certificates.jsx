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
            <h1 id = "certificate-heading"> MY TOP CERTIFICATES and CREDENTIALS</h1>
            <div className="slider">
                <Certificatecard title = "Prompt Engineering using Open AI (Columbia University)" image = {ColumbiaUniversityLogo}/>
                <Certificatecard title = "Github Copilot Trophy (Microsoft)" image />
                <Certificatecard title = "MongoDB for Students (MongoDB University)"/>
                <Certificatecard title = "TCS Young Professional Badge (TCS ION)"/>
                <Certificatecard title = "Data Structure & Algorithms with JAVA (Apna College)"/>
                <Certificatecard title = "Software Engineering Job Simulation (Accenture)"/>
                <Certificatecard title = "Ethics in the age of Generative AI (PMI)"/>
            </div>
        </div>
    )
}

export default Certificates

