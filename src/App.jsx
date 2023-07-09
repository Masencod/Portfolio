import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import AboutMe from './Components/AboutMe/AboutMe'
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects'
import logo from "../src/assets/logo.png";



function App() {
//i know this situation is bad and i wanna make a comopnent out of the nav here but it was for a assignment, also we learned tailwind halfway through the project thats why its janky rn.
  return (
    <>
        <div className="header_container sticky top-0 left-0 w-full">
          <a href="https://portfolio-masencod.vercel.app/"><img className="logo h-10 sm:h-16" src={logo} alt="" /></a>
          <div className="header__links">
              <a href="#aboutMe" className='hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:to-emerald-300 hover:from-sky-300 transition-all duration-200 ease-in-out'>About me</a>
              <a href="#projects" className='hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:to-emerald-300 hover:from-sky-300 transition-all duration-200 ease-in-out'>Projects</a>
              <a href="#contactMe" className='hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:to-emerald-300 hover:from-sky-300 transition-all duration-200 ease-in-out'>Contact me</a>
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
