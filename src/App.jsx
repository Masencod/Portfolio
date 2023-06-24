import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import AboutMe from './Components/AboutMe/AboutMe'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <AboutMe/>
    </>
  )
}

export default App
