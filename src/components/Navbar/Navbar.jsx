import React from 'react'
import "./Navbar.scss"
import Sidebar from '../SideBar/Sidebar'
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar></Sidebar>
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>ima.esp</motion.span> 
        <div className='social'>
          <a href="#"><img src="assets\facebook.png" alt="" /></a>
          <a href="#"><img src="assets\instagram.png" alt="" /></a>
          <a href="#"><img src="assets\github.svg" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
