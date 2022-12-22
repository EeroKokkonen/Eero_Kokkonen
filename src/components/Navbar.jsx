import "./css/Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Backdrop from "./Backdrop";
import getPageHeader from "../hooks/getPageHeader"

const Navbar = () => {
    const hampurger = useRef(null);
    const navMenu = useRef(null);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [pageHeader, setPageHeader] = useState(getPageHeader());

    const showMenu = (e) => {
      setIsMenuActive(prev => !prev);
    }
    const hideMenu = () => {
      setIsMenuActive(false);
      setPageHeader(getPageHeader());
    }
    
    return(
      <header className="header">
        <nav>
          <ul className={`nav-menu ${isMenuActive ? " showMenu" : ""}`} ref={navMenu}>
              <li className="nav-item" onClick={hideMenu}>
                <Link to="/">About me</Link>
              </li>
              <li className="nav-item" onClick={hideMenu}>
                <Link to="/skills">Skills</Link>
              </li>
              <li className="nav-item" onClick={hideMenu}>
                <Link to="/interests">Interests</Link>
              </li>
              <li className="nav-item" onClick={hideMenu}>
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