import EachProject from "./EachProject";


const Projects = () => {
  return (
    <div id="projects" className="bg-gray-200 text-black text-center pt-10 scroll-m-10 py-10">
        <h2 className="font-bold text-3xl bg-slate-50 inline-block text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-500">Projects</h2>
        <div className="flex flex-wrap gap-5 justify-center items-center mt-5 p-3">
            <EachProject/>
        </div>
    </div>
  )
}

export default Projects