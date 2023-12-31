
import './Header.css'

const Header = () => {
  return (
    <div className="header w-full">
        <div className="header_body w-full flex flex-col justify-start items-center">
            <div className="header__text">
                <p className="text__top text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-500">Hey, I’m Sajjad</p>
                <p className="text__bot text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-500">and I’m a front-end Developer.</p>
            </div>
        </div>
    </div>
    )
    
}

export default Header