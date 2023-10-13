import { useState } from "react"
import { useEffect } from "react"
import Card from "./Card"


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
        {repo.length > 0 && repo.map((e) => {
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