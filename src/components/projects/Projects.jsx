import React, { useState } from "react";
import "./project.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../../constent";

export default function Projects() {
  const [filterData , setFilterData]  = useState(projects)

  
 const handleFilter = (filter) => {
  setFilterData(projects.filter((project)=>(project.type === filter)))  
 }


  return (
    <section id="projects">
      <h2>#Projects</h2>
      <div className="filters">
        <button onClick={()=>setFilterData(projects)}>All</button>
        <button onClick={()=>handleFilter("react")} >React</button>
        <button  onClick={()=>handleFilter("javascript")}>Javascript</button>
        <button onClick={()=>handleFilter("mern")}>MERN</button>
        <button  onClick={()=>handleFilter("html/css")}>HTML/CSS</button>
      </div>
      <div className="card-container">
        <ProjectCard projects={filterData}/>
      </div>
    </section>
  );
}
