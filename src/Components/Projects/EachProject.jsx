import { useState } from "react"
import { useEffect } from "react"
import Card from "./Card"

const goodRepos = [
  "Azki",
  "Portfolio",
  "Rose",
  "stopwatch",
  "Wow-Character-optimizer",
  "work-hour",
]

const EachProject = () => {
    const [repo, setRepo] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/masencod/repos')
            .then(response => response.json())
            .then(data => setRepo(data))
            .catch(error => console.warn(error))

        
    }, [])

  return (
    <div className="flex flex-wrap justify-center items-center gap-3">
        <div className="bg-white p-10 shadow-md rounded-md">
          <Card url={"https://github.com/Masencod/Work-hour"} name={"work-hour"} verc={"https://work-hour.netlify.app/"} />
        </div>
        <div className="bg-white p-10 shadow-md rounded-md">
          <Card url={"https://github.com/sahmir95/muffin-bootcamp-project"} guser={"sahmir95"} gname={"muffin-bootcamp-project"} name={"muffin"} verc={undefined} />
        </div>
        <div className="bg-white p-10 shadow-md rounded-md">
          <Card url={"https://github.com/sahmir95/JaBaMa"} gname={"JaBaMa"} guser={"sahmir95"} name={"Jabama-clone"} verc={"https://jabama-sahmir95.vercel.app/"} />
        </div>
        {repo.length > 0 && repo.filter((item) => goodRepos.includes(item.name)).map((e) => {
            return (
                <div key={e.id}  className="bg-white p-10 shadow-md rounded-md">
                    <Card url={e.html_url} name={e.name} verc={e.homepage}/>
                </div>
            )
        })}
    </div>
  )

}

export default EachProject