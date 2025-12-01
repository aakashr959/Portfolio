import React from 'react'
import "./SkillCard.css"
import MERN_Image from "../../pictures/MERN_Image.png"

function SkillCard() {

    return (
        <div className = "skillcard">
            <div className = "headingSection"> 
                <h1 className = "headingSection"> MERN STACK DEVELOPMENT</h1> 
            </div>

            <div className = "skilldetails">
                <div classNName = " ">
                    <p className = "skillPara"> The MERN stack is a widely adopted full-stack development framework that simplifies the creation of modern web applications. Using JavaScript for both the frontend and backend enables developers to efficiently build robust, scalable, and dynamic applications.

            MongoDB: Non-Relational Database
            Express: NodeJS web server
            React: JavaScript Frontend Library
            Node: JavaScript Web Server
            How MERN Stack Works?
            The MERN stack is a popular JavaScript-based web development framework for building modern web applications. It consists of four key technologies working together:

            MongoDB (Database): MongoDB is a NoSQL document database used to store the application's data. It's flexible and scalable, ideal for handling large amounts of information.
            ExpressJS (Backend Framework): ExpressJS is a NodeJS web application framework that provides tools for creating APIs and handling HTTP requests. It acts as the server-side logic of the application.
            React (Frontend Library): React is a JavaScript library for building user interfaces (UIs). It's used to create dynamic and interactive front-end components of the website that users interact with.
            NodeJS (Runtime Environment): NodeJS is a JavaScript runtime environment that allows you to run JavaScript code on the server. It's what powers the backend (ExpressJS) of the application.</p>
            </div>
                
            </div>
            
            
        </div>

    )
}

export default SkillCard