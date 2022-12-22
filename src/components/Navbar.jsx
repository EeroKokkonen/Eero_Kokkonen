import "./css/Navbar.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const Navbar = () => {
    const hampurger = useRef(null);
    const navMenu = useRef(null);
    const [isMenuActive, setisMenuActive] = useState(false);
    const showMenu = (e) => {
      console.log(hampurger.current.focus = true);
      setisMenuActive(prev => !prev);
    }
    const hideMenu = () => {
      setisMenuActive(false);
    }

    return(
      <header className="header">
        <nav>
          
          <ul className={`nav-menu ${isMenuActive ? " showMenu" : ""}`} ref={navMenu}>
              
              <li className="nav-item" onClick={hideMenu}>
                <Link to="/">About</Link>
              </li>
              <li className="nav-item" onClick={hideMenu}>
                <Link to="/experience">Skills</Link>
              </li>
              <li className="nav-item" onClick={hideMenu}>
                <Link to="/other">Interests</Link>
              </li>
              <li className="nav-item" onClick={hideMenu}>
                <Link to="/contact">Contact</Link>
              </li>
          </ul>
        </nav>
        <img src="/images/favicon.png"></img>
        <div className={`hampurger ${isMenuActive ? " active" : ""}`} onClick={showMenu} ref={hampurger}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>
    );
}






export default Navbar;