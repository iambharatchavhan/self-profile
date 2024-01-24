import React from "react";
import bg from "../assets/contactme.svg";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { IoMdCall, IoIosHome ,IoLogoGithub,IoLogoLinkedin} from "react-icons/io";
import { SiHashnode } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-card">
        <div className="left">
          <h2 className="contact-me-title">Contact Me</h2>
          <img src={bg} alt="contactImg" />
        </div>

        <div className="right">
        <h2 className="contact-me-title mobile-view">Contact Me</h2>
          <div className="contact-details">
            <div className="icon">
              <MdEmail />
            </div>
            <div className="information">bharat.chavhan.1026@gmail.com</div>
          </div>
          <div className="contact-details">
            <div className="icon">
              <IoMdCall />
            </div>
            <div className="information" >+91 902 818 1744</div>
          </div>
          <div className="contact-details">
            <div className="icon">
              <IoIosHome />
            </div>
            <div className="information" >Pune, Maharashtra</div>
          </div>
          <div className="contact-details">
            <div className="icon">
              <IoLogoGithub />
            </div>
            <div className="information" ><a href="https://github.com/iambharatchavhan" target="_blank">iambharatchavhan</a></div>
          </div>
          <div className="contact-details">
            <div className="icon">
              <IoLogoLinkedin />
            </div>
            <div className="information" ><a href="https://www.linkedin.com/in/bharat-chavhan-563a881ba/" target="_blank">bharat-chavhan-563a881ba</a></div>
          </div>
          <div className="contact-details">
            <div className="icon">
              < SiHashnode />
            </div>
            <div className="information" ><a href="https://hashnode.com/@iambharat" target="_blank">hashnode.com/@iambharat</a> </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
