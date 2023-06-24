import logo from "../../assets/logo.png";
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="header_body">
            <div className="header_container">
                <img className="logo" src={logo} alt="" />
                <div className="header__links">
                    <a href="">About me</a>
                    <a href="">Projects</a>
                    <a href="">Contact me</a>
                </div>
            </div>
            <div className="header__text">
                <p className="text__top">Hey, Im Sajjad</p>
                <p className="text__bot">and im a front-end student</p>
            </div>
        </div>
    </div>
    )
    
}

export default Header