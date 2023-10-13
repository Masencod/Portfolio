import vercel from '../../assets/vercel.svg'
import azki from "../../assets/azki.png"
import portfolio from "../../assets/portfolio.png"
import rose from "../../assets/rose.png"
import stopwatch from "../../assets/stopwatch.png"
import wow from "../../assets/wow-character-optimizer.png"
import work_hour from "../../assets/work-hour.png"
import work_hour_sum from "../../assets/work-hour-sum.png"
import { motion } from "framer-motion"

const cardImages = {
    "Azki": azki,
    "Portfolio": portfolio,
    "Rose": rose,
    "stopwatch": stopwatch,
    "Wow-Character-optimizer": wow,
    "work-hour": work_hour,
}

const Card = ({ name,url,verc , gname , guser}) => {
    return (
        <motion.div>
            <div className="flex gap-2 flex-col">
                <img className='w-80 aspect-[16/9]' src={cardImages[name]}  alt={`A screenshot of ${name}`}/>
                <img className="w-80" src={name === "work-hour" ? work_hour_sum : `https://opengraph.githubassets.com/12345/${guser ? guser : "masencod"}/${gname ? gname : name}`} alt="github" />
                <div className="flex justify-between items-center mt-5">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="transition-all font-semibold ease-in-out hover:text-fuchsia-600 hover:font-semibold duration-300">{name}</a>
                    {verc !== null ? (<a href={verc} target="_blank" rel="noopener noreferrer" className='group flex text-[0.8rem] text-gray-500 hover:text-sky-400 transition-all duration-500 ease-in-out'>Deployed at  <img className="group ml-1 w-5 transition-all duration-500 ease-in-out transform hover:scale-150" src={vercel} alt="vercel" /></a>) : null}
                </div>
            </div>
        </motion.div>
    )
}

export default Card