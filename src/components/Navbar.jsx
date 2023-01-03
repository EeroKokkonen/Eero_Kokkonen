import "./css/Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Backdrop from "./Backdrop";
import { useTranslation } from "react-i18next";



const Navbar = ({page}) => {
    const hampurger = useRef(null);
    const navMenu = useRef(null);
    const navAbout = useRef(null);
    const navSkills = useRef(null);
    const navInterests = useRef(null);
    const navContacts = useRef(null);

    const [isMenuActive, setIsMenuActive] = useState(false);
    const [header, setHeader] = useState("About me");

    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState("en");

    const changeLanguage = () => {
      if(language === "en") {
        setNewLanguage("fi")
      }
      else if (language === "fi"){
        setNewLanguage("en");
      }
      setHeader(t(page));
    };

    const showMenu = (e) => {
      setIsMenuActive(prev => !prev);
    }
    const hideMenu = () => {
      setIsMenuActive(false);
    }

    const setNewLanguage = (lng) => {
      setLanguage(lng)
      i18n.changeLanguage(lng);
      sessionStorage.setItem("lng", lng);
    }

    useEffect(() => {
        if (page === "aboutMe")
          navAbout.current.style.color = "orange";
        else
          navAbout.current.style.color = "white";
        if (page === "skills")
          navSkills.current.style.color = "orange";
        else
          navSkills.current.style.color = "white";
        if (page === "interests")
          navInterests.current.style.color = "orange";
        else
          navInterests.current.style.color = "white";
        if (page === "contacts")
          navContacts.current.style.color = "orange";
        else
          navContacts.current.style.color = "white";
        setHeader(t(page));
        if(sessionStorage.getItem("lng") === null) {
          setNewLanguage("en");
        }
        else
          setLanguage(sessionStorage.getItem("lng"));
    }, [page]);
    return(
      <>
        <header className="header">
          <nav>
            <ul className={`nav-menu ${isMenuActive ? " showMenu" : ""}`} ref={navMenu}>
                <li className="nav-item" onClick={hideMenu}>
                  <Link ref={navAbout} to="/">{t("aboutMe")}</Link>
                </li>
                <li className="nav-item" onClick={hideMenu}>
                  <Link to="/skills" ref={navSkills}>{t("skills")}</Link>
                </li>
                <li className="nav-item" onClick={hideMenu}>
                  <Link ref={navInterests} to="/interests">{t("interests")}</Link>
                </li>
                <li className="nav-item" onClick={hideMenu}>
                  <Link ref={navContacts} to="/contacts">{t("contacts")}</Link>
                </li>
                <img className="languageChange" onClick={changeLanguage}
                  src={language === "en" ? "/images/finnish-flag.jpg" : "/images/britannian-flag.jpg"}>
                </img>
            </ul>
          </nav>
          
          <img className="logo" src="/images/favicon.png"></img>
          <h2 className="pageHeader">{header}</h2>
          <div className={`hampurger ${isMenuActive ? " active" : ""}`} onClick={showMenu} ref={hampurger}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          
        </header>
        {isMenuActive && <Backdrop onClick={hideMenu} dim={false}/>}
      </>
    );
}


export default Navbar;