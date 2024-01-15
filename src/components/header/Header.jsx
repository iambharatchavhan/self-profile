import React, { useState } from "react";
import LogoWhite from "../assets/logowhite.png";
import "./header.css";
import { FaHamburger } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="header">
      <div className="logo">
        <img src={LogoWhite} alt="Logo" />
      </div>
      <div className="burger-menu">
       {!isOpen ? <FaHamburger  onClick={()=>setIsOpen(!isOpen)} className="burger"/> :
        <IoIosCloseCircle onClick={()=>setIsOpen(!isOpen)} className="burger"/>}
       {isOpen && (<div className="mobile-nav">
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className="btn-resume btn-mobile">
            <button>Resume</button>
          </div>
        </div>)}
      </div>
      <div className="links-container">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="btn-resume">
          <button>Resume</button>
        </div>
      </div>
    </section>
  );
}
