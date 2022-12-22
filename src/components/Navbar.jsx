import "./css/Navbar.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Backdrop from "./Backdrop";

const Navbar = () => {
    const hampurger = useRef(null);
    const navMenu = useRef(null);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [pageHeader, setPageHeader] = useState("About me");

    const showMenu = (e) => {
      setIsMenuActive(prev => !prev);
    }
    const hideMenu = () => {
      setIsMenuActive(false);
    }


    return(
      <header className="header">
        <nav>
          
          <ul className={`nav-menu ${isMenuActive ? " showMenu" : ""}`} ref={navMenu}>
              <li className="nav-item" onClick={() => {hideMenu(); setPageHeader("About me")}}>
                <Link to="/">About me</Link>
              </li>
              <li className="nav-item" onClick={() => {hideMenu(); setPageHeader("About me")}}>
                <Link to="/experience">Skills</Link>
              </li>
              <li className="nav-item" onClick={() => {hideMenu(); setPageHeader("About me")}}>
                <Link to="/other">Interests</Link>
              </li>
              <li className="nav-item" onClick={() => {hideMenu(); setPageHeader("About me")}}>
                <Link to="/contact">Contact</Link>
              </li>
          </ul>
        </nav>
        <img src="/images/favicon.png"></img>
        <h2 className="pageHeader">{pageHeader}</h2>
        <div className={`hampurger ${isMenuActive ? " active" : ""}`} onClick={showMenu} ref={hampurger}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        {isMenuActive && <Backdrop onClick={hideMenu} dim={false}/>}
      </header>
    );
}






export default Navbar;