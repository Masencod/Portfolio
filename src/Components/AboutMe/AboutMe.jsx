import './AboutMe.css'
import { motion,useScroll } from 'framer-motion'
import Skills from './Skills'

const AboutMe = () => {
  const skills = [
    {id: 0,name: "HTML",value: 80},
    {id: 1,name: "CSS",value: 80},
    {id: 2,name: "Javascript",value: 65},
    {id: 3,name: "React",value: 50},
    {id: 4,name: "Google",value: 90},
    {id: 5,name: "Learning : )",value: 102}
    ]
  return (
    <div id='aboutMe' className='aboutme__container bg-gray-200 flex flex-col sm:flex-row sm:justify-evenly sm:items-start px-6 sm:px1 py-8 gap-y-5 sm:gap-y-0 scroll-m-14 sm:scroll-m-20'>
      <div className='sm:w-2/5 bg-slate-50 text-black rounded-md shadow-md p-3 flex flex-col items-center justify-center'>
        <h3 className='font-semibold'>Skills</h3>
        <Skills skills={skills}/>
        <p className='w-11/12 mb-2 text-center'>take in mind that im still in the learning phase and these numbers are growing daily 😊</p>
      </div>
      <div className='sm:w-2/5 bg-slate-50 text-black rounded-md shadow-md px-5 py-3 flex flex-col items-center justify-center'>
        <h3 className='font-semibold mb-3'>About me</h3>
        <p align="justify">My name is Seyed Sajjad Ghorashi, I am a material engineering graduate from IUST but i decided that im gonna change ways and start learning coding/front-end. I had some background in graphical things such as photoshop and after effect so i knew i like to see what i work with. I made this website at the end part of my course for react but im still very new to react and learning daily</p>
      </div>
    </div>
  )
}

export default AboutMe