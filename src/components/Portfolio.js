import React from "react"
import netflix from "../images/netflix.png"
import cityGuide from "../images/city-guide-app.png"
import portfolio from "../images/portfolio.png"
import taskManager from "../images/task-manager.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons"

import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css" //required to allow pop-up styled as intended


const Portfolio = () => {

  //Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <div>
        <img className="portfolio-image-popupbox" src={netflix} alt="portfolio image #???" />
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
  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix clone project",
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
          <div className="portfolio-image-box col-4" onClick={openPopupboxNetflix}>
            <img className="portfolio-image" src={netflix} alt="portfolio image #1" />
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
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
  )
}

export default Portfolio
