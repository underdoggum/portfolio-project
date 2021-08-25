import React from "react"
import Typed from "react-typed"

const Header = () => {
  return (
    <div id="header" className="header-wrapper">
      <div className="main-info">
        <h1>
          Front-End Web Development
        </h1>
        <Typed
          className="typed-text"
          strings={["y=mx+b", "Mitosis", "Flashpoints", "AP Calculus"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">Contact Me</a>
      </div>
    </div>
  )
}

export default Header
