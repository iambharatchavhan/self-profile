import React from 'react'
import bg from "../assets/contactme.svg"
import "./contact.css"

export default function Contact() {
  return (
  <section id='contact'>
    <div className='contact-container'>
        <div className='left'>
            <h2 className='contact-me-title'>Contact Me</h2>
         <img src={bg} alt='contactImg'/>
        </div>
        <div className='right'>
          Hello
        </div>
    </div>
  </section>
  )
}
