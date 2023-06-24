import { useState } from "react"
import { useEffect } from "react"
import { motion } from "framer-motion"
import vercel from '../../assets/vercel.svg'
import gitti from '../../assets/gitti.png'


const EachProject = () => {
    const [repo, setRepo] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/masencod/repos')
            .then(response => response.json())
            .then(data => setRepo(data))
            .catch(error => console.warn(error))
    }, [])
    
console.log(repo)
  return (
    <>
        {repo.map((e) => {
            return (
                <motion.div key={e.id} className="bg-white p-10 shadow-md rounded-md">
                    <div className="flex gap-2 flex-col">
                        <img className="w-80" src={gitti} alt="github" />
                        <div className="flex justify-between items-center">
                            <a href={e.html_url} className="transition-all ease-in-out hover:text-fuchsia-600 hover:font-semibold duration-300">{e.name}</a>
                            {e.homepage !== null ? (<a href={e.homepage}><img className="w-5 transition duration-500 ease-in-out transform hover:scale-150" src={vercel} alt="vercel" /></a>) : null}
                        </div>
                    </div>
                </motion.div>
            )
        })}
    
    </>
  )

}

export default EachProject                         