import React from "react"

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5"> {/*bootstrap classes with margin-y = 3rem*/}
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">

        <div className="timeline-block timeline-block-right">
          <span className="marker"></span>
          <div className="timeline-content">
            <h3>2015</h3>
            <p>Graduated from Georgia Institute of Technology's Bachelors of Science in Mechanical Engineering on Dean's List</p>
            <p>Led Capstone design team to success as runner-up in the yearly Design Expo</p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <span className="marker"></span>
          <div className="timeline-content">
            <h3>2010-2018</h3>
            <p>Managed a local college restaurant, overseeing and troubleshooting technical systems, such as the installation of a new POS as well as new computer terminals, utilities, and printers</p>
            <p>Worked 30+ hrs./week while maintaining full-time student status</p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <span className="marker"></span>
          <div className="timeline-content">
            <h3>2018-Sept. 2021</h3>
            <p>Joined the Doka USA formwork civil engineering team and led the southeast branch as the Key User of multiple engineering softwares with continuous improvement efforts to revamp the engineers' user experiences</p>
            <p>Designed custom formwork solutions to meet or exceed clients' expectations</p>
            <p>Began seriously learning Web Development in Feb. 2021 for side projects and became passionate for more</p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <span className="marker"></span>
          <div className="timeline-content">
            <h3>Sept. 2021-Current</h3>
            <p>Attending General Assembly's Software Engineering Immersive program. On a track to complete over 500 hours of implementing trending web technologies and building unique full-stack apps while collaborating with peers</p>
            <p>Exceeded instructors' expectations as one of the top-performers in the class</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience
