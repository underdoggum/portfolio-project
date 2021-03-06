import React from "react"
import author from "../about-me.jpg"

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="Nathan's portrait" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">
            About Me
          </h1>
          <p>
            Hey there! I'm Nathan. I'm a Software Engineer/Full-Stack Web Developer with an array of modern technical skills, including:
            <br /><br />

            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li>HTML</li>
                    <li>CSS (Bootstrap 5/Bulma)</li>
                    <li>JavaScript (ES6)</li>
                    <li>jQuery</li>
                    <li>LiquidJS</li>
                    <li>SASS</li>
                    <li>Git (<a href="https://github.com/underdoggum" target="_blank" rel="noopener noreferrer">My GitHub</a>)</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>Node.js</li>
                    <li>ExpressJS</li>
                    <li>MongoDB</li>
                    <li>React</li>
                    <li>NextJS</li>
                    <li>RESTful APIs</li>
                  </ul>
                </div>
              </div>
            </div>

            
            <br />
            My primary focus hinges on being a detail-oriented team player. Throughout the years, I've demonstrated a proven track record of developing effective results with continuous improvement and innovation. This, coupled with experience in trending web technologies has really ignited my passion for web development. There is <em>always</em> more to create, more to teach, more to learn, and within that addicting maxim lies at the heart of this field. <br /><br />
            Overall, my goal is to blend a transparent, methodical approach to full-stack web development with a splash of creativity and a lifelong passion for learning.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
