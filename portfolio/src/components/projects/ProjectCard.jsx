import React from 'react'

export default function ProjectCard({projects}) {
  return (
     <>
      {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-picture">
            
                <img src={project.img} alt="projectImg" />
              <a href={project.link} target="_blank" >
              <h3 className="project-title">{project.title}</h3>
              </a>
            </div>
          </div>
        ))}
     </>
  )
}
