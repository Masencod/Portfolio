import gotti from '../../assets/github-mark-white.svg'

const Contact = () => {
  return (
    <div id="contactMe" className="bg-blue-500 p-5 grid grid-cols-1 sm:grid-cols-2 sm:justify-items-start lg:flex lg:justify-evenly justify-items-center gap-8">
        
            <div className="flex gap-x-3 items-center">
                <span className="material-symbols-rounded lg:text-lg">
                    home_pin
                </span>
                <p className=" lg:text-lg"> Iran, Tehran</p>
            </div>
            <div className="flex gap-x-3 items-center">
                <span className="material-symbols-rounded lg:text-lg">
                    phone_in_talk
                </span>
                <p className=" lg:text-lg"> +98 937 993 68 66</p>
            </div>
        
        
            <div className="flex gap-x-3 items-center">
                <span className="material-symbols-rounded lg:text-lg">
                    mail
                </span>
                <p className=" lg:text-lg"> sajjad.ghorashy@gmail.com</p>
            </div>
            <div className="flex gap-x-2 min-[322px]:gap-x-3 items-center">
                <span className="material-symbols-rounded lg:text-lg">
                    <img className='h-8' src={gotti} alt="" />
                </span>
                <p className=" lg:text-lg"> <a className="no-underline hover:text-fuchsia-200 transition duration-500 ease-in-out" href="https://github.com/Masencod">https://github.com/Masencod</a></p>
            </div>
        
    </div>
  )
}

export default Contact