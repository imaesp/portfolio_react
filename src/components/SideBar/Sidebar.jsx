import React, { useState } from 'react'
import "./Sidebar.scss"
import ToggleButton from './ToggleButton/ToggleButton'
import Links from './Links/Links'
import {delay, motion, transform} from "framer-motion"


const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transtion:{
      type:"spring",
      stiffness:20,
    }
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transiton:{
      delay:0.5,
      type:"spring",
      stiffness:400,
      damping:40,
    },
  },
};

function Sidebar() {

  const [open, setOpen] = useState(false)

  
  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
        <motion.div className='bg' variants={variants}>
            <Links></Links>
        </motion.div>
        <ToggleButton setOpen={setOpen}></ToggleButton>
    </motion.div>
  )
}

export default Sidebar