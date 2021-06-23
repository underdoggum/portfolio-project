import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faCode, faDesktop, faChalkboardTeacher, faCalculator } from "@fortawesome/free-solid-svg-icons"

const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5">
        My Services
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <h3>Web Design</h3>
              <p>Focusing on learning unique solutions to implement on a per-project basis, with specific attention to modern UX/UI design, readability, and the overall end user experience.</p>
            </div>
          </div>
          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faCode} size="2x" /></div>
              <h3>Web Development</h3>
              <p>Working with Back-End and Full-Stack engineers to smoothly transition data from conceptual design to final product</p>
            </div>
          </div>
          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faChalkboardTeacher} size="2x" /></div>
              <h3>Teamwork / Communication</h3>
              <p>At my previous jobs and projects, I've always kept a team-first attitude, ensuring that whatever can.......... </p>
            </div>
          </div>
          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faCalculator} size="2x" /></div>
              <h3>Critical-Thinking Skills</h3>
              <p>From trouble-shooting car repairs to designing unique formwork solutions for large scale contractors, I've had to develop a strong aptitude for a consistent, systematic approach in solving unique problems--the solutions of which can be narrowed down greatly if one simply <strong>READS THE DOCS.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
