import React from 'react'
import "./Card.css"


function Card({title, image, projectLink, githubLink}){
    return (
        <div className = "card">
            <h1>{title}</h1>
            <div className="hovercard">
                <img src={image} alt={title} />
                <div className="card-links">
                    {projectLink && (
                        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
                            <span>View Project</span>
                        </a>
                    )}
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                            <span>View Code</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card