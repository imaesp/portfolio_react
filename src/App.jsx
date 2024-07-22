import { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <section id='HomePage'>
        <Navbar></Navbar>
        <Hero></Hero>
      </section>
      <section id='About'>About</section>
      <section id='Resume'>Resume</section>
      <section id='Projects'>Projects</section>
      <section id='Contact'>Contact</section>
    </div> 
  )
}

export default App
