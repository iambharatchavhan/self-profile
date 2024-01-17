import React from "react";
import "./about.css";
import profile from "../assets/profile.png";
import Skills from "./Skills";

export default function About() {
  return (
    <section id="about">
      <div className="aboutMe-container">
        <div className="my-profile">
          <img src={profile} alt="profile" />
        </div>
        <div className="my-info">
          <h1 className="title">
            Hi, I am <span>Bharat Chavhan</span>
          </h1>
          <p className="tagline">
            Full Stack Developer | MERN Stack Enthusiast | Crafting Seamless Web
            Experiences
          </p>
          <p>
            A passionate MERN (MongoDB, Express.js, React.js, Node.js) stack
            developer on a thrilling journey to become a full-stack maestro.
            With an insatiable curiosity for all things tech, I've immersed
            myself in the world of web development to create seamless,
            user-centric experiences.
          </p>
          <p>
            <b>Aspiring Full Stack Explorer:</b> The journey doesn't end with
            MERN. I'm on a quest to conquer the entire stack, exploring new
            technologies and frameworks to broaden my horizon and elevate my
            capabilities.
          </p>

          <div className="btn-container">
            <button className="btn-contact">Contact Me</button>
            <button className="btn-download">Download Resume</button>
          </div>
        </div>
      </div>
      <p className="skills-title">#Dependencies</p>
      <div className="skills">
        <Skills />
      </div>
    </section>
  );
}
