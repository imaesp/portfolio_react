import React from 'react'
import "./Contact.scss"
function Contact() {
  return (
    <div className='contact'>
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src="email.png"
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:imanolespinalh@gmail.com">imanolespinalh@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src="linkedin.png"
            alt="LinkedIn icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="http://www.linkedin.com/in/imanol-espinal-8b366326b/">LinkedIn</a></p>
        </div>
      </div>
      <footer>
      <nav>
        <div class="nav-links-container">
          <ul class="nav-links">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Experience">Experience</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2025 Imanol Espinal. All Rights Reserved.</p>
    </footer>
    </div>
  )
}

export default Contact