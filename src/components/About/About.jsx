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
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants} 
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>A little about me...</motion.h2>
          <motion.h1 variants={textVariants}>
          From a young age, I was captivated by the process of building my own toys, fascinated by how I could bring something entirely new into existence with just my hands and imagination. 
          This early obsession naturally evolved into a passion for software engineering and web development. 
          </motion.h1>
          <motion.h1>
          Now, as a Computer Science student at Brooklyn College, I'm driven by the same desire to create and innovate—only now, 
          I'm building software instead of toys. My aspiration to become a Full Stack Web Developer is fueled by this lifelong love of building, 
          as I continue to develop my skills in both front-end and back-end development, eager to construct the digital solutions of tomorrow.
          </motion.h1>
        </motion.div>
      </div>
      <motion.div className="imageContainer" variants={textVariants}>
        <img src="./headshot.jpg" alt="" />
      </motion.div>
      <motion.div className='slidingTextContainer' variants={sliderVariants} initial="initial" animate="animate">
            Brooklyn College CS Brooklyn College CS Brooklyn College CS 
      </motion.div>
    </div>
  );
}

export default About
