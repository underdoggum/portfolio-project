import React from "react"
import Typed from "react-typed"
import { Link } from "react-scroll"

const Header = () => {
  return (
    <div id="header" className="header-wrapper">
      <div className="main-info">
        <h1>
          Full-Stack Web Developer
        </h1>
        <Typed
          className="typed-text"
          strings={["React", "Node.js", "MongoDB", "ExpressJS", "jQuery", "SASS", "Bootstrap", "Git/Github", "RESTful APIs", "MVC Architecture", "Scrum/Agile Development", "Terminal/Bash", "Wireframing"]}
          typeSpeed={50}
          backSpeed={60}
          loop
        />
        <Link to="contacts" offset={-100} className="nav-link" href="#" className="btn-main-offer">Contact Me</Link>
      </div>
    </div>
  )
}

export default Header
