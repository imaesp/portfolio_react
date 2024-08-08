import React from 'react'
import "./About.scss"
import {motion} from 'framer-motion'

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
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants} 
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>IMANOL ESPINAL</motion.h2>
          <motion.h1 variants={textVariants}>
          I am a Computer Science student at Brooklyn College with a passion for technology 
          and coding. Aspiring to become a Full Stack Web Developer, I am dedicated to honing 
          my skills in both front-end and back-end development. Through my academic journey 
          and personal projects, I strive to create seamless and efficient web applications.
          </motion.h1>
        </motion.div>
      </div>
      <div className="imageContainer">
        <img src="src\assets\headshot.jpg" alt="" />
      </div>
    </div>
  );
}

export default About