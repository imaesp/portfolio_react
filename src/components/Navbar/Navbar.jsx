import React from 'react'
import "./Navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>ima.esp</motion.span> 
        <div className='social'>
          <a href="https://www.linkedin.com/in/imanol-espinal-8b366326b/"><img src="public\linkedIn.webp" alt="" /></a>
          <a href="https://github.com/imaesp"><img src="public\github.svg" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
