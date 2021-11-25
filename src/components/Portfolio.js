import React from "react"
import gymrift from "../images/gymrift-project-screenshot.png"
import cityGuide from "../images/city-guide-app.png"
import portfolio from "../images/portfolio.png"
import taskManager from "../images/task-manager.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons"

import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css"


const Portfolio = () => {

  //Gymrift
  const openPopupboxGymrift = () => {
    const content = (
      <div>
        <img className="portfolio-image-popupbox" src={gymrift} alt="portfolio image #???" />
        <p>This app allows users to track their daily workouts based on a 3-day split plan. This is a full-stack (MELN) app implementing Model-View-Controller architecture with RESTful routing and user authentication/authorization. Using MongoDB schemas and multiple one-to-many relationships, users may customize their workouts, including viewing form hints via the YouTube API.
        </p>
        <b>GitHub: </b>
        <a className="hyper-link"
          onClick={() => window.open("https://github.com/underdoggum/seir_penguin_project_2")}>
          https://github.com/underdoggum/seir_penguin_project_2
        </a>
        <br /><b>Deployed site: </b>
        <a className="hyper-link"
          onClick={() => window.open("https://nn-penguin-project2.herokuapp.com/")}>
          https://nn-penguin-project2.herokuapp.com/
        </a>
      </div>
    )
    PopupboxManager.open({content})
  }
  const popupboxConfigGymrift = {
    titleBar: {
      enable: true,
      text: "3-day Workout Planning Full-stack App",
    },
    faseIn: true,
    fadeInSpeed: 500,
  }


  //City Guide App
  const openPopupboxCityGuide = () => {
    const content = (
      <div>
        <img className="portfolio-image-popupbox" src={cityGuide} alt="portfolio image #???" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores accusantium quam fugit consequuntur esse beatae eos natus vero? Aspernatur, eaque?</p>
        <b>GitHub: </b>
        <a className="hyper-link"
          onClick={() => window.open("https://github.com/underdoggum/react-music-playlist-migrator")}>
          https://github.com/underdoggum/react-music-playlist-migrator
        </a>
      </div>
    )
    PopupboxManager.open({content})
  }
  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "City Guide project",
    },
    faseIn: true,
    fadeInSpeed: 500,
  }


  //Portfolio
  const openPopupboxPortfolio = () => {
    const content = (
      <div>
        <img className="portfolio-image-popupbox" src={portfolio} alt="portfolio image #???" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores accusantium quam fugit consequuntur esse beatae eos natus vero? Aspernatur, eaque?</p>
        <b>GitHub: </b>
        <a className="hyper-link"
          onClick={() => window.open("https://github.com/underdoggum/react-music-playlist-migrator")}>
          https://github.com/underdoggum/react-music-playlist-migrator
        </a>
      </div>
    )
    PopupboxManager.open({content})
  }
  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "What you're currently viewing!",
    },
    faseIn: true,
    fadeInSpeed: 500,
  }


  //Task Manager
  const openPopupboxTaskManager = () => {
    const content = (
      <div>
        <img className="portfolio-image-popupbox" src={taskManager} alt="portfolio image #???" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores accusantium quam fugit consequuntur esse beatae eos natus vero? Aspernatur, eaque?</p>
        <b>GitHub: </b>
        <a className="hyper-link"
          onClick={() => window.open("https://github.com/underdoggum/react-music-playlist-migrator")}>
          https://github.com/underdoggum/react-music-playlist-migrator
        </a>
      </div>
    )
    PopupboxManager.open({content})
  }
  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "Task Manager project",
    },
    faseIn: true,
    fadeInSpeed: 500,
  }

  
  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box col-4" onClick={openPopupboxGymrift}>
            <img className="portfolio-image" src={gymrift} alt="portfolio image #1" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}
          <div className="portfolio-image-box col-4" onClick={openPopupboxCityGuide}>
            <img className="portfolio-image" src={cityGuide} alt="portfolio image #2" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}
          <div className="portfolio-image-box col-4" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={portfolio} alt="portfolio image #3" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}
          <div className="portfolio-image-box col-4" onClick={openPopupboxTaskManager}>
            <img className="portfolio-image" src={taskManager} alt="portfolio image #4" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigGymrift} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
  )
}

export default Portfolio
