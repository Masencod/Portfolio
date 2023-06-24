import { motion,animate } from "framer-motion"


const Skills = ({ skills }) => {
  return (
    <motion.div className="flex flex-col items-center justify-center w-full p-5 gap-y-5">
      {skills.map((e) => {
        return (
                <div key={e.id} className="w-full">
                    {e.name}
                    <div className="prog__container w-full h-4 bg-gray-200 rounded-full">
                        <motion.div initial={{width: 0,opacity: 0}} whileInView={{ width: `${e.value}%`,opacity: 1}} transition={{ duration: 1, delay: 0.3,ease: "easeInOut"}} className="prog__filler h-full bg-fuchsia-300 rounded-full text-right flex items-center justify-end">
                            <span className="prog__text text-sm mr-2 mb-1/2">{e.value}%</span>
                        </motion.div>
                    </div>
                </div>
                )
      })}
    </motion.div>
  )
}

export default Skills