import React from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share"


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 footer-links">
            <div className="d-flex">
              <p>Atlanta, GA</p>
            </div>
            <div className="d-flex">
              <a href="tel: (706) 341-5295">(706) 341-5295</a>
            </div>
            <div className="d-flex">
              <p><a href="mailto:natenoack@gmail.com">natenoack@gmail.com</a></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6 footer-links">
            <div className="row">
              <div className="col">
                <a href="#header" className="footer-nav">Home</a>
                <br />
                <a href="#about" className="footer-nav">About Me</a>
                <br />
                <a href="#services" className="footer-nav">Services</a>
              </div>
              <div className="col">
                <a href="#experience" className="footer-nav">Experience</a>
                <br />
                <a href="#portfolio" className="footer-nav">Portfolio</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              
              <FacebookShareButton
                url={"https://github.com/underdoggum"}
                quote={"Full-Stack Developer"}
                hashtag="#fullstack"
              >
                <FacebookIcon className="mx-3" size={50} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://github.com/underdoggum"}
                quote={"Full-Stack Developer"}
                hashtag="#fullstack"
              >
                <TwitterIcon className="mx-3" size={50} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://github.com/underdoggum"}
                quote={"Full-Stack Developer"}
                hashtag="#fullstack"
              >
                <RedditIcon className="mx-3" size={50} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://github.com/underdoggum"}
                quote={"Full-Stack Developer"}
                hashtag="#fullstack"
              >
                <LinkedinIcon className="mx-3" size={50} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright &copy;
              {new Date().getFullYear()}&nbsp; Nathan's Portfolio | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
