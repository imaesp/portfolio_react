import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import {motion} from "framer-motion"
import "./Projects.scss"

function Projects() {
  
  const sliderVariants = {
    initial: {
        x:0, 
    },
    animate: {
        x:"-1000%", 
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration:100,
        },
    },
  };

  const PMTech = ['React.svg', 'Javascript.svg', 'nodejs.svg', 'Bootstrap.svg','Tailwind.svg','Supabase.svg', 'Sass.svg', 'Postgress.svg', 'Figma.svg']
  const BLTech = ['Javascript.svg', 'HTML.svg', 'CSS.svg', 'Bootstrap.svg', 'Tailwind.svg']
  const RFTech = ['Javascript.svg', 'HTML.svg', 'CSS.svg', 'Bootstrap.svg', 'Tailwind.svg', 'openai.svg', 'Figma.svg']

  return (
    <div className='projects'>
        <div class="container">
          <h1>PROJECTS</h1>
          <div class="row row-cols-3">
            <div class="col">
            <ProjectCard 
              Image="pawfect.jpeg"
              Title="PAWfect Match"
              SubTitle={
                  <>
                      <strong>PAWfect Match</strong> is a personalized pet matchmaking service designed to connect potential pet owners with pets that best suit their lifestyle, living conditions, and available resources. 
                      PAWfect Match makes the connection easy and efficient.
                  </>
              }
              Technologies={PMTech}
              Links={{
                website: "https://pawfect-match-oavjxlo61-imaesps-projects.vercel.app/",
                websiteImage: "browser.svg",
                github: "https://github.com/imaesp/PAWfect-Match",
                githubImage: "github.svg" 
              }}
            />
            </div>
            <div class="col">
              <ProjectCard 
                Image='borough.jpeg'
                Title='BoroughLife'
                SubTitle={
                  <>
                    <strong>BoroughLife</strong> is an interactive web platform designed to foster community engagement and provide a space for discussions on topics related to the five boroughs of New York City.
                  </>
                }
                Technologies={BLTech}
                Links={{
                  website: "https://karechob.github.io/BoroughLife-Project/",
                  websiteImage: "browser.svg",
                  github: "https://github.com/imaesp/BoroughLife",
                  githubImage: "github.svg" 
                }}
                />
                
            </div>
            <div class="col">
              <ProjectCard
                Image='resource.png'
                Title='ResourceFirst'
                SubTitle={
                  <>
                  <strong>RESOURCESfirst</strong> is a web-based platform designed to centralize and streamline access to essential resources for students across all CUNY colleges.
                  </>
                }
                Technologies={RFTech}
                Links={{
                  website: "https://imaesp.github.io/ctp-hackathon/",
                  websiteImage: "browser.svg",
                  github: "https://github.com/imaesp/ctp-hackathon",
                  githubImage: "github.svg" 
                }}
                />
            </div>
            
          </div>
        </div>
        <motion.div className='slidingTextContainer' variants={sliderVariants} initial="initial" animate="animate">
            React CSS JavaScript HTML Postgressql Node.js Bootstrap
        </motion.div>
    </div>
  )
}

export default Projects