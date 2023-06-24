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
                <img className="w-80" src={gitti} alt="github" />
                <div className="flex justify-between items-center">
                    <a href={url} className="transition-all ease-in-out hover:text-fuchsia-600 hover:font-semibold duration-300">{name}</a>
                    {verc !== null ? (<a href={verc}><img className="w-5 transition duration-500 ease-in-out transform hover:scale-150" src={vercel} alt="vercel" /></a>) : null}
                </div>
            </div>
        </motion.div>
  )
}

export default Card