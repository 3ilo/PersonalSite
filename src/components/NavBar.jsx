import { Link } from "react-router-dom";
import './styles/NavBar.css';

export default function NavBar() {
    return (
      <>
        <div className="topnav">
            <Link className="name" to="/">Milo Chase</Link>
            <span className="links">
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link> 
            </span>
        </div>
      </>
    );
  }

