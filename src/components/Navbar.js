import React, { useState } from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-scroll"


const Navbar = () => {

  const [expanded, setExpanded] = useState(false);

  const handleNavbarExpand = e => {
    e.preventDefault();
    setExpanded(!expanded);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">    
        <button
          className={`navbar-toggler ${expanded ? "" : "collapsed"}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={expanded ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={handleNavbarExpand}
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
        </button>
        <div className={`${expanded ? "" : "collapse"} navbar-collapse justify-content-center`} id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="header" offset={-59} className="nav-link" href="#" onClick={handleNavbarExpand}>Home <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item">
              <Link to="about" offset={-59} className="nav-link" href="#" onClick={handleNavbarExpand}>About Me</Link>
            </li>
            <li className="nav-item">
              <Link to="services" offset={-59} className="nav-link" href="#" onClick={handleNavbarExpand}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link to="experience" offset={-59} className="nav-link" href="#" onClick={handleNavbarExpand}>Experience</Link>
            </li>
            <li className="nav-item">
              <Link to="portfolio" offset={-59} className="nav-link" href="#" onClick={handleNavbarExpand}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="contacts" offset={-59} className="nav-link" href="#" onClick={handleNavbarExpand}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
