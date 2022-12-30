import "./css/Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Backdrop from "./Backdrop";

const Navbar = ({header}) => {
    const hampurger = useRef(null);
    const navMenu = useRef(null);
    const navAbout = useRef(null);
    const navSkills = useRef(null);
    const navInterests = useRef(null);
    const navContacts = useRef(null);
    const [isMenuActive, setIsMenuActive] = useState(false);

    const showMenu = (e) => {
      setIsMenuActive(prev => !prev);
    }
    const hideMenu = () => {
      setIsMenuActive(false);
    }

    useEffect(() => {
        if (header == "About me")
          navAbout.current.style.color = "orange";
        else
          navAbout.current.style.color = "white";
        if (header == "Skills")
          navSkills.current.style.color = "orange";
        else
          navSkills.current.style.color = "white";
        if (header == "Interests")
          navInterests.current.style.color = "orange";
        else
          navInterests.current.style.color = "white";
        if (header == "Contacts")
          navContacts.current.style.color = "orange";
        else
          navContacts.current.style.color = "white";
    }, [header]);
    return(
      <header className="header">
        <nav>
          <ul className={`nav-menu ${isMenuActive ? " showMenu" : ""}`} ref={navMenu}>
              <li className="nav-item" onClick={hideMenu}>
                <Link ref={navAbout} to="/">About me</Link>
              </li>
              <li className="nav-item" onClick={hideMenu}>
                <Link to="/skills" ref={navSkills}>Skills</Link>
              </li>
              <li className="nav-item" onClick={hideMenu}>
                <Link ref={navInterests} to="/interests">Interests</Link>
              </li>
              <li className="nav-item" onClick={hideMenu}>
                <Link ref={navContacts} to="/contacts">Contacts</Link>
              </li>
          </ul>
        </nav>
        <img src="/images/favicon.png"></img>
        <h2 className="pageHeader">{header}</h2>
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