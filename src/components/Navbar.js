import React from "react"
import logo from "../arrowScaled.png"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-scroll"


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">    
          <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/*for bootstrap 5, need to use "ms-auto" for right justification instead of "mr-auto"*/}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link to="header" offset={-100} className="nav-link" href="#">Home <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item">
              <Link to="about" offset={-100} className="nav-link" href="#">About Me</Link>
            </li>
            <li className="nav-item">
              <Link to="services" offset={-100} className="nav-link" href="#">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="experience" offset={-100} className="nav-link" href="#">Experience</Link>
            </li>
            <li className="nav-item">
              <Link to="portfolio" offset={-100} className="nav-link" href="#">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="contacts" offset={-100} className="nav-link" href="#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
