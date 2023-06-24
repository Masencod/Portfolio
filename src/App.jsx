import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import AboutMe from './Components/AboutMe/AboutMe'
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects'
import logo from "../src/assets/logo.png";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="header_container sticky top-0 left-0 w-full">
          <a href="https://portfolio-masencod.vercel.app/"><img className="logo h-10 sm:h-16" src={logo} alt="" /></a>
          <div className="header__links">
              <a href="#aboutMe">About me</a>
              <a href="#projects">Projects</a>
              <a href="#contactMe">Contact me</a>
          </div>
      </div>
      <Header/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
