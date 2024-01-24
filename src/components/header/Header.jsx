import React, { useState } from "react";
import LogoWhite from "../assets/logowhite.png";
import "./header.css";
import { FaHamburger } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { HashLink as Link } from "react-router-hash-link";
import thePdf from "../../../public/Bharat_Chavhan_Resume.pdf"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
  
    const pdfUrl = "http://localhost:5173/"+thePdf;

    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = 'Bharat_Chavhan_Resume.pdf'; 
    document.body.appendChild(anchor);
    anchor.click();

    if (document.body.contains(anchor)) {
      document.body.removeChild(anchor);
    }

  };





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
            <Link to="#header" smooth className="hash-link">Home</Link>  
            <Link to="#projects" smooth className="hash-link"><li>Projects</li></Link>  
            <Link to="#contact" smooth className="hash-link"><li>Contact</li></Link>  
            </ul>
          </nav>
          <div className="btn-resume btn-mobile">
          <button onClick={()=>handleDownload()}>Resume</button>
          </div>
        </div>)}
      </div>
      <div className="links-container">
        <nav>
          <ul>
            <Link to="" smooth className="hash-link"><li>Home</li></Link>  
            <Link to="#projects" smooth className="hash-link"> <li>Projects</li></Link>  
            <Link to="#contact" smooth className="hash-link"> <li>Contact</li></Link>  
          </ul>
        </nav>
        <div className="btn-resume">
          <button onClick={()=>handleDownload()}>Resume</button>
        </div>
      </div>
    </section>
  );
}
