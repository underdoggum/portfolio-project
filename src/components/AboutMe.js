import React from "react"
import author from "../about-me.jpg"

const AboutMe = () => {
  return (
    <div className="container py-5">
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
              <li>ReactJS (with NPM modules!)</li>
              <li>NextJS</li>
              <li>RESTful APIs</li>
            </ul>
            <br />
            I was previously employed as a Mechanical Engineer for 3+ years, who graduated from the Georgia Institute of Technology and soon became an Engineer-In-Training turned rogue...
            While I do not yet possess years of professional Web Development experience, you'll come to find that many of the problem-solving and critical thinking skills I've developed over the years of engineering will translate to the core problems inherent in developing unique Front-End Web Development solutions.
            Much of the syntax for specific programming languages can easily be searched, but what cannot is understanding, down to the core, what is causing the issue at hand. I firmly believe that, after the initial design and conceptualization, this is the key skill required to fully actualize any client's project.
            <br /><br />
            I mean, just look at that face. That's the face of a man who's solved hundreds of hours of problems. I'd give that guy a shot with my clients' websites (after a cup of coffee or two).
            <br /><br />
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
