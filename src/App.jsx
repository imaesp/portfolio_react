import { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <section id='HomePage'>
        <Navbar></Navbar>
      </section>
      <section id='About'>About</section>
      <section id='Resume'>Resume</section>
      <section id='Projects'>Projects</section>
      <section id='Contact'>Contact</section>
    </div> 
  )
}

export default App
