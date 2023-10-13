import vercel from '../../assets/vercel.svg'
import gitti from '../../assets/gitti.png'
import { useState } from "react"
import { useEffect } from "react"
import { motion } from "framer-motion"

const Card = ({ name,url,verc }) => {
    const [img, setImg] = useState('')
    // useEffect(() => {
    //     fetch('https://api.github.com/graphql', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             query: `
    //                     query { 
    //                         repository(owner: "masencod", name: ${name}) {
    //                         openGraphImageUrl
    //                         }
    //                     }
    //             `
    //         }),
    //         })
    //             .then((res) => res.json())
    //             .then(data => setImg(data))
    //             .catch(error => console.warn(error))
    // }, [])
    return (
        <motion.div>
            <div className="flex gap-2 flex-col">
                <img className='w-80' src={gitti}  alt={`A screenshot of ${name}`}/>
                <img className="w-80" src={`https://opengraph.githubassets.com/12345/masencod/${name}`} alt="github" />
                <div className="flex justify-between items-center mt-5">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="transition-all font-semibold ease-in-out hover:text-fuchsia-600 hover:font-semibold duration-300">{name}</a>
                    {verc !== null ? (<a href={verc} target="_blank" rel="noopener noreferrer" className='group flex text-[0.8rem] text-gray-500 hover:text-sky-400 transition-all duration-500 ease-in-out'>Deployed at  <img className="group ml-1 w-5 transition-all duration-500 ease-in-out transform hover:scale-150" src={vercel} alt="vercel" /></a>) : null}
                </div>
            </div>
        </motion.div>
  )
}

export default Card