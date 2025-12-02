import React from 'react'
import "./Home.css"
import Aakash_image from "../../pictures/Aakash_image.png"
import Typewriter from 'typewriter-effect';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function Home() {

    const my_resume = () => {
        window.open("https://drive.google.com/file/d/1YNhpg-j9dn5E-ZI0NS0TDbcKac7CWQs0/view?usp=sharing");
    }

    useGSAP(() =>{
        let timeLine1 = gsap.timeline();
        timeLine1.from(".line1",{
            y: 70,
            duration: 1,
            opacity: 0
        })
        timeLine1.from(".line2",{
            y: 70,
            duration: 1,
            opacity: 0
        })
        timeLine1.from(".line3",{
            y: 70,
            duration: 1,
            opacity: 0
        })
        gsap.from(".righthome img", {
            x: 120,
            duration: 1,
            opacity: 0
        })
    })
    return (
        <div id="home">
            <div className="lefthome">
                <div className="homedetails">
                    <div className="line1">
                        I'M
                    </div>
                    <div className="line2">
                        AAKASH RAJPUT
                    </div>
                    <div className="line3">
                        <Typewriter
                            options={{
                            strings: [
                                "Software Developer",
                                "MERN Stack Developer",
                                "Prompt Engineer",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            deleteSpeed: 40,
                            }}
                        />
                    </div>
                    <button onClick={() => window.open(
                        "https://mail.google.com/mail/?view=cm&fs=1&to=aakashrajput0901@gmail.com&su=Hiring%20Inquiry&body=Hi%20Aakash,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.",
                        "_blank"
                    )} className="hireme-btn"> Hire Me
                    </button>
                    
                    <button className = "resume-btn" onClick = {my_resume}> See my Resume </button>

                </div>


            </div>
            <div className="righthome">
                <img src = {Aakash_image} alt = "my_photo"></img>

            </div>

        </div>
    )
}

export default Home;