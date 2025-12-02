import React from 'react'
import "./About.css"
import Card from "../Card/Card.jsx"
import MERN_Image from "../../pictures/MERN_Image.png"
import JAVA_Image from "../../pictures/java_Image.png"
import dsa from "../../pictures/dsa.png"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


function About() {
    useGSAP(() => {
        gsap.from(".circle", {
            x: -100,
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger:{
                trigger: ".circle",
                scroll:"body",
                scrub: 2,
                start: "top 60%",
                end: "top 30%"
            }

        })

        gsap.from(".line", {
            x: -100,
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger:{
                trigger: ".line",
                scroll:"body",
                scrub: 2,
                start: "top 60%",
                end: "top 30%"
            }

        })

        gsap.from(".aboutInfo h1", {
            x: -100,
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger:{
                trigger: ".aboutInfo h1",
                scroll:"body",
                scrub: 2,
                start: "top 60%",
                end: "top 30%"
            }

        })

         gsap.from(".aboutInfo ul", {
            y: 100,
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger:{
                trigger: ".aboutInfo ul",
                scroll:"body",
                scrub: 2,
                start: "top 60%",
                end: "top 30%"
            }

        })

         gsap.from(".rightabout", {
            x: 100,
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger:{
                trigger: ".rightabout",
                scroll:"body",
                scrub: 2,
                start: "top 60%",
                end: "top 30%"
            }
        })

    })
    return (
        <div id="about">
            <div className="leftabout">
                <div className="circle-line">
                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="circle"></div>
                </div>

                <div className="aboutInfo">
                    <div className="personalinfo">
                        <h1>Personal Info</h1>
                        <ul>
                            <li><span>Name : </span>AAKASH RAJPUT</li>
                            <li><span>AGE : </span>21 YEARS</li>
                            <li><span>GENDER : </span>MALE</li>
                            <li><span>LANGUAGE KNOWN : </span>HINDI, ENGLISH</li>
                        </ul>
                    </div>
                
                    <div className="education">
                        <h1>Education</h1>
                        <ul>
                            <li><span>Undergraduation : </span>B-TECH</li>
                            <li><span>Branch : </span>Computer Science and Engineering</li>
                            <li><span>University : </span>AKTU - Lucknow</li>
                        </ul>
                    </div>

                
                    <div className="skills">
                        <h1>Skills</h1>
                        <ul>
                            <li>JAVA</li>
                            <li>MERN Stack, Tailwind, Next.js</li>
                            <li>SQL</li>
                            <li>Project Management</li>
                            <li>Prompt Engineering</li>
                        </ul>
                    </div>
                </div>   
            </div>  

            <div className = "rightabout">
                <Card title = "MERN STACK Web Development" image = {MERN_Image}/>
                <Card title = "JAVA" image = {JAVA_Image} />
                <Card title ="DSA" image = {dsa} />
                
            </div>   
        </div>    
    )
}

export default About;