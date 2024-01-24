import React from "react";
import "./about.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import {SiNextdotjs,SiGithub,SiGit,SiTypescript, SiMongodb, SiExpress,SiJavascript ,SiHtml5,SiCss3,SiTailwindcss, SiBootstrap, SiRedux, SiLinux , SiVisualstudiocode } from "react-icons/si";

const skills = [
  { icons: <FaReact/>, name: "React" },
  { icons: <FaNodeJs/>, name: "Node" },
  { icons: <SiMongodb/>, name: "MongoDB" },
  { icons: <SiExpress/>, name: "Express" },
  { icons: <SiJavascript/>, name: "javascript" },
  { icons: <  SiTypescript />, name: "Typescript" }, 
  { icons: <SiNextdotjs />, name: "Next" },   
  { icons: <SiHtml5/>, name: "HTML5" },   
  { icons: <SiCss3/>, name: "CSS3" },   
  { icons: <SiTailwindcss />, name: "Tailwind" },   
  { icons: < SiBootstrap />, name: "Bootstrap" },   
  { icons: < SiRedux />, name: "Redux" },   
  { icons: <  SiLinux  />, name: "Linux" },   
  { icons: <  SiVisualstudiocode  />, name: "VsCode" },   
  { icons: < SiGit />, name: "git" },   
  { icons: < SiGithub/>, name: "Github" }, 
  { icons: < TbBrandFramerMotion />, name: "FramerMotion" },   

];

export default function Skills() {
  return (
    <div className="icons-container">
      {skills.map((item,i) => (
        <div key={i}>
          <div className="skill-box">
         {item.icons}
          </div>
          {item.name}
        </div>
      ))}
    </div>
  );
}
