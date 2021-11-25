import React from "react"
import gymrift from "../images/gymrift-project-screenshot.png"
import triviaNight from "../images/Trivia-night-project-screenshot.png"
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
        <br />
        <b>Deployed site: </b>
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
  const openPopupboxTriviaNight = () => {
    const content = (
      <div>
        <img className="portfolio-image-popupbox" src={triviaNight} alt="portfolio image #???" />
        <p>This JavaScript-based, 2-player, turn-taking trivia game allows players to compete in the Science trivia category with randomized questions and shows players scores as they play throughout the game. It uses Contentful as a headless CMS for storing trivia questions and uses a mobile-first design.</p>
        <b>GitHub: </b>
        <a className="hyper-link"
          onClick={() => window.open("https://github.com/underdoggum/seir_penguin_project_1")}>
          https://github.com/underdoggum/seir_penguin_project_1
        </a>
        <br />
        <b>Deployed site: </b>
        <a className="hyper-link"
          onClick={() => window.open("https://seir-penguin-project-1-roan.vercel.app/")}>
          https://seir-penguin-project-1-roan.vercel.app/
        </a>
      </div>
    )
    PopupboxManager.open({content})
  }
  const popupboxConfigTriviaNight = {
    titleBar: {
      enable: true,
      text: "Trivia Night: Science",
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
          <div className="portfolio-image-box col-4" onClick={openPopupboxTriviaNight}>
            <img className="portfolio-image" src={triviaNight} alt="portfolio image #2" />
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
      <PopupboxContainer {...popupboxConfigTriviaNight} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
  )
}

export default Portfolio
