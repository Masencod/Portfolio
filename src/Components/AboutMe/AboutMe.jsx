import './AboutMe.css'
import { motion,useScroll } from 'framer-motion'
import Skills from './Skills'

const AboutMe = () => {
  const skills = [
    {id: 0,name: "HTML",value: 80},
    {id: 1,name: "CSS",value: 80},
    {id: 2,name: "Javascript",value: 65},
    {id: 3,name: "React",value: 45},
    {id: 4,name: "Google",value: 90},
    {id: 5,name: "Learning : )",value: 102}
    ]
  return (
    <div id='aboutMe' className='aboutme__container bg-gray-200 flex flex-col sm:flex-row sm:justify-evenly sm:items-start sm:flex-wrap px-6 sm:px-1 py-8 gap-y-5 sm:gap-y-4 scroll-m-14 sm:scroll-m-20'>
      <div className='sm:w-2/5 bg-slate-50 text-black rounded-md shadow-md px-5 py-3 flex flex-col items-center justify-center'>
        <h3 className='font-semibold mb-3'>About me</h3>
        <p align="justify">Hello, my name is Seyed Sajjad Ghorashi and this is my portfolio website. I graduated from IUST with a degree in material engineering, but I decided to change career and pursue coding and front-end development. (I had a knack for computer based things and graphic design and I used to work with tools like Photoshop and After Effect, so I loved creating and manipulating data and visual elements on the web.) This website is a showcase of my skills and projects that I have done as part of my learning journey. I used various technologies and frameworks such as HTML, CSS, JavaScript, React, Tailwind, and other React libraries to build this website. I learned a lot of new things and improved my coding abilities through my journey in Daneshkar's React Bootcamp. My goal is to keep growing as a front-end developer and learn more about the latest concepts and technologies in this field.</p>
      </div>
      <div className='sm:w-2/5 bg-slate-50 text-black rounded-md shadow-md p-3 flex flex-col items-center justify-center'>
        <h3 className='font-semibold'>Skills</h3>
        <Skills skills={skills}/>
        <p className='w-11/12 mb-2 text-center'>Please note that I’m still learning and improving every day 😊.</p>
      </div>
      <div className='sm:w-2/5 p-5 bg-slate-50 text-black rounded-md shadow-md hover:shadow-xl transition-all duration-500 ease-in-out'>
        <h3 className='text-center p-3 font-semibold'>My NEO test ( it's in persian )</h3>
        <a target="_blank" rel="noopener noreferrer" href="neo-test.pdf"><img src="/neo.png" alt="" /></a>
      </div>
      <div className='sm:w-2/5 p-5 bg-slate-50 text-black rounded-md shadow-md hover:shadow-xl transition-all duration-500 ease-in-out'>
        <h3 className='text-center p-3 font-semibold'>My Holland test ( it's in persian )</h3>
        <a target="_blank" rel="noopener noreferrer" href="/holland-test.pdf"><img src="/hol.png" alt="" /></a>
      </div>
    </div>
  )
}

export default AboutMe