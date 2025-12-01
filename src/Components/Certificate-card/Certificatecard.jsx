import React from 'react'
import "./Certificatecard.css"


function Certificatecard({title, image, link}){
    return (
        <div className = "Certificatecard">
            <h1>{title}</h1>
            <div className="hoverCertificatecard">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt={title} />
                    <div className="view-certificate">
                        <span>View Certificate</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Certificatecard