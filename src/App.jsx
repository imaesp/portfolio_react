import { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Sidebar from './components/SideBar/Sidebar'
import Resume from './components/Resume/Resume'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Sidebar></Sidebar>
      <section id='Home'>
        <Navbar></Navbar>
        <Hero></Hero>
      </section>
      <section id='About'>
          <About></About>
      </section>
      <section id='Resume'>
          <Resume></Resume>
      </section>
      <section id='Projects'>
        <Projects></Projects>
      </section>
      <section id='Contact'>
        <Contact></Contact>
      </section>
    </div> 
  )
}

export default App
