import React from "react";
import "./project.css";
import project1 from "../assets/project01.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";
import project10 from "../assets/project10.png";
import project11 from "../assets/project11.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      img: project1,
      title: "Landing Page",
      type: "html/css",
      link: "https://bharats-tornado-gamming.netlify.app",
    },
    {
      id: 2,
      img: project2,
      title: "Landing Page",
      type: "html/css",
      link: "https://hoatyourwebsiteproject.netlify.app",
    },

    {
      id: 3,
      img: project3,

      title: "Sticky Notes",
      type: "javascript",
      link: "https://bharatstickynote.netlify.app/",
    },
    {
      id: 4,
      img: project4,

      title: "RPS Game",
      type: "javascript",
      link: "https://rock-paper-scissors-by-bharat.netlify.app/",
    },
    {
      id: 5,
      img: project5,

      title: "Random Jokes",
      type: "javascript",
      link: "https://rock-paper-scissors-by-bharat.netlify.app/",
    },

    {
      id: 6,
      img: project6,

      title: "TODO App",
      type: "javascript",
      link: "https://domtodoappbybharat.netlify.app/",
    },

    {
      id: 7,
      img: project7,

      title: "Random Colors",
      type: "javascript",
      link: "https://randomcolorsbybharat.netlify.app/",
    },
    {
      id: 8,
      img: project8,

      title: "NetflixGPT",
      type: "react",
      link: "https://gptainetflix.netlify.app/",
    },

    {
      id: 9,
      img: project9,
      title: "Portfolio V01",
      type: "react",
      link: "https://portfolioofbharatchavhan.netlify.app/",
    },
    {
      id: 10,
      img: project10,

      title: "Landing page",
      type: "html/css",
      link: "https://bharatvscodeprojects.netlify.app/",
    },
    {
      id: 11,
      img: project11,
      title: "Todo App(MERN)",
      type: "mern",
      link: "https://todo-app-mern-front-end-by-bharat.vercel.app/",
    },

    ,
  ];

  return (
    <section id="projects">
      <h2>#Projects</h2>
      <div className="filters">
        <button>All</button>
        <button>React</button>
        <button>Javascript</button>
        <button>MERN</button>
        <button>HTML/CSS</button>
      </div>
      <div className="card-container">
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
      </div>
    </section>
  );
}
