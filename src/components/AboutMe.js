import React from "react"
import author from "../about-me.jpg"

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="A picture of me" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">
            About Me
          </h1>
          <p>
            Hello! I'm Nathan. I am an aspiring Front-End Developer, utilizing:
            <br /><br />
            <ul>
              <li>HTML5</li>
              <li>CSS3 (Bootstrap 4)</li>
              <li>JavaScript (ES6)</li>
              <li>React</li>
              <li>NextJS</li>
              <li>RESTful APIs</li>
            </ul>
            <br />
            I'm a Software Engineer and former Mechanical Engineer, with a focus on being a detail-oriented team player. Throughout the years, I've demonstrated a proven track record of developing effective results with continuous improvement and innovation. This, coupled with experience in trending web technologies has ignited my passion for web development. There is *always* more to create, more to teach, more to learn, and that sensational doctrine lies at the heart of this field. <br /><br />
            Overall, my goal is to blend a transparent, methodical approach to full-stack web development with a splash of creativity and a lifelong passion for learning.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
