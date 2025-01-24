import React from 'react'
import "./Hero.scss"
import {animate, motion} from "framer-motion"

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
        x:-500, 
        opacity: 0,
    },
    animate: {
        x:0, 
        opacity: 1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition:{
            duration:2,
            repeat: Infinity,
        },
    },
};

function Hero() {

    const scrollToProjects = () => {
        document.getElementById('Projects')?.scrollIntoView({
            behavior: 'smooth', 
            block: 'start',
        });
    };
    const scrollToContact = () => {
        document.getElementById('Contact')?.scrollIntoView({
            behavior: 'smooth', 
            block: 'start',
        });
    };

    return (
        <div className='hero'>
            <div className='wrapper'>
                <motion.div className='textContainer' variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>IMANOL ESPINAL</motion.h2>
                    <motion.h1 variants={textVariants}>Full Stack Web Developer</motion.h1>
                    <motion.div className='buttons' variants={textVariants}>
                        <motion.button variants={textVariants} onClick={scrollToProjects}>See My Work</motion.button>
                        <motion.button variants={textVariants} onClick={scrollToContact}>Contact Me</motion.button>
                        <motion.a href='https://drive.google.com/file/d/1ERMMSxIBTvqrIP32YgjJhCyTSNNPuFLI/view' download class='btn btn--download' className='resume-btn'>My resume</motion.a>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="./scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className='slidingTextContainer' variants={sliderVariants} initial="initial" animate="animate">
                Java Python CSS JavaScript HTML SQL TypeScript
            </motion.div>
        </div>
    )
}

export default Hero
