import gotti from '../../assets/github-mark-white.svg'
const Contact = () => {
  return (
    <div id="contactMe" className="w-full bg-blue-500 p-5 flex flex-col gap-8 md:flex-row md:justify-between xl:justify-evenly">
        <div className="gap-8 flex flex-col xl:flex-row xl:justify-between">
            <div className="flex gap-x-3 items-center">
                <span className="material-symbols-rounded lg:text-lg">
                    home_pin
                </span>
                <p className=" lg:text-lg">My Location: Iran, Tehran</p>
            </div>
            <div className="flex gap-x-3 items-center">
                <span className="material-symbols-rounded lg:text-lg">
                    phone_in_talk
                </span>
                <p className=" lg:text-lg">My Number: +98 937 993 68 66</p>
            </div>
        </div>
        <div className="gap-8 flex flex-col xl:flex-row xl:justify-between">
            <div className="flex gap-x-3 items-center">
                <span className="material-symbols-rounded lg:text-lg">
                    mail
                </span>
                <p className=" lg:text-lg">My Email: sajjad.ghorashy@gmail.com</p>
            </div>
            <div className="flex gap-x-3 items-center">
                <span className="material-symbols-rounded lg:text-lg">
                    <img className='h-8' src={gotti} alt="" />
                </span>
                <p className=" lg:text-lg">My Github: <a className="no-underline hover:text-fuchsia-200 transition duration-500 ease-in-out" href="https://github.com/Masencod">https://github.com/Masencod</a></p>
            </div>
        </div>
    </div>
  )
}

export default Contact