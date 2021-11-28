import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faDesktop, faChalkboardTeacher, faCalculator } from "@fortawesome/free-solid-svg-icons"

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">
        Other skills I bring
      </h1>
      <div className="container">
        <div className="row">
          
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <h3>Teamwork / Communication</h3>
              <p>At every opportunity on a new project, I don't hesitate to assume responsibility, to communicate as a team-player and move as one unit toward the end goal. I’ve coordinated my university capstone team, overseen the technical software/IT support for my engineering colleagues for Doka’s southeast branches; and most recently, I’ve taken charge as the Scrum master/Project manager for my team during my time at General Assembly.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faCode} size="2x" /></div>
              <h3>Resourcefulness</h3>
              <p>Whether it was brainstorming a new, safe, economical way to piece together formwork parts to form a concrete bridge or even just design a more effective dynamic block in AutoCAD for my engineering team—my ability to think outside the box, question conventional norms, and draw inspiration from several sources has provided me with the fluid knowledge to solve problems in a unique way.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faCalculator} size="2x" /></div>
              <h3>Critical-Thinking</h3>
              <p>As a dean’s list student of the <a href="https://coe.gatech.edu/news/2015/09/undergraduate-engineering-programs-rank-high-latest-us-news-world-report-best-college" target="_blank" rel="noopener noreferrer">#2 college in the US</a> for my major, I've had no choice but to develop a strong aptitude for a systematic approach in problem-solving. Continuing to hone my skills in the professional engineering world, I’ve taken on several clients’ large-scale formwork projects (one of which totalled $5M in revenue), all the while ensuring that projects were completed to or above satisfaction in a timely manner.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faChalkboardTeacher} size="2x" /></div>
              <h3>Drive / Detail</h3>
              <p>I’ve held personal grudges against getting “stuck” on a problem. Many of my colleagues have described me as an over-achiever or perfectionist, but I’d just call it “getting the project done” (apologies for the cliché). If I don’t know the answer, I research it. Obsessively. I read the docs. I ask around. I draw diagrams, program scratch code, pull from every resource until I can find the answer in a timely manner. The most important resource you’ll ever have is the ability to <em>learn well</em>.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Services
