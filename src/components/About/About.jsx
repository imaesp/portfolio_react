import React from 'react'
import "./About.scss"
import {motion} from 'framer-motion'

const sliderVariants = {
  initial: {
      x:0, 
  },
  animate: {
      x:"-1000%", 
      transition:{
          repeat: Infinity,
          repeatType: "mirror",
          duration:80,
      },
  },
};

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

function About() {

  return (
    <div className="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-container">
          <img
            src="headshot.jpg"
            alt="Profile picture"
            class="about-pic"
          />
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img
                src="experience.png"
                alt="Experience icon"
                class="icon"
              />
              <h3>Experience</h3>
              <p>2+ years <br />Frontend Development</p>
            </div>
            <div class="details-container">
              <img
                src="education.png"
                alt="Education icon"
                class="icon"
              />
              <h3>Education</h3>
              <p>B.Sc. Bachelors Degree<br />Computer Science</p>
            </div>
          </div>
          <div className="text-container">
            <h1>
            From a young age, I was captivated by the process of building my own toys, fascinated by how I could bring something entirely new into existence with just my hands and imagination. 
            This early obsession naturally evolved into a passion for software engineering and web development. 
            </h1>
            <h1>
              Now, as a Computer Science student at Brooklyn College, I'm driven by the same desire to create and innovate—only now, 
              I'm building software instead of toys. My aspiration to become a Full Stack Web Developer is fueled by this lifelong love of building, 
              as I continue to develop my skills in both front-end and back-end development, eager to construct the digital solutions of tomorrow.
            </h1>
          </div>
        </div>
      </div>
  </div>
  );
}

export default About
