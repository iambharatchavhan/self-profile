import React, { useState, useMemo } from "react";
import "./project.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../../constent";

export default function Projects() {
  const [filter, setFilter] = useState(null);

  const filteredData = useMemo(() => {
    if (!filter) return projects;
    return projects.filter((project) => project.type === filter);
  }, [filter]);

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <section id="projects">
      <div className="filters">
        <button onClick={() => setFilter(null)}>All</button>
        <button onClick={() => handleFilter("react")}>React</button>
        <button onClick={() => handleFilter("javascript")}>Javascript</button>
        <button onClick={() => handleFilter("mern")}>MERN</button>
        <button onClick={() => handleFilter("html/css")}>HTML/CSS</button>
      </div>
      <div className="card-container">
        <ProjectCard projects={filteredData} />
      </div>
    </section>
  );
}