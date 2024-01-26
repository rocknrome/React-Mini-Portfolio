import React from 'react';
import project1Image from './WAC.png';
import project2Image from './PDL.png';


const Projects = () => {

    const projectList = [
        {
            name: "World Alarm Clock",
            repo: "https://github.com/rocknrome/v2-World-Alarm-Clock",
            deployed: "https://v2-world-alarm-clock.vercel.app/",
            image: project1Image
        },
        {
            name: "Properties Development",
            repo: "https://github.com/rocknrome/Project-2-RE-Properties",
            deployed: "https://properties-full-crud-v2.onrender.com/properties",
            image: project2Image
        }
    ];


    return (
        <div className="projects">
            {projectList.map((project, index) => (
                <div key={index} className="project-card">
                    <h3>{project.name}</h3>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                    <a href={project.deployed} target="_blank" rel="noopener noreferrer">Deployed Site</a>
                    <img src={project.image} alt={project.name} />
                </div>
            ))}
        </div>
    );
    }


// export the component
export default Projects