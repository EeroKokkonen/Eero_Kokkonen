import "./css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
      <header className="header">
        <nav>
          <ul> 
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/experience">Experience</Link>
              </li>
              <li>
                <Link to="/other">Other</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
          </ul>
        </nav>
      </header>
    );
}

export default Navbar;