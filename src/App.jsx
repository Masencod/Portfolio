import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import AboutMe from './Components/AboutMe/AboutMe'
import Projects from './Components/Projects/Projects'
import logo from "../src/assets/logo.png";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="header_container sticky top-0 left-0 w-full">
          <img className="logo h-10 sm:h-16" src={logo} alt="" />
          <div className="header__links">
              <a href="#aboutMe">About me</a>
              <a href="#projects">Projects</a>
              <a href="">Contact me</a>
          </div>
      </div>
      <Header/>
      <AboutMe/>
      <Projects/>
    </>
  )
}

export default App
