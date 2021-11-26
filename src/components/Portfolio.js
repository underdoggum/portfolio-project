import React from "react"
import gymrift from "../images/gymrift-project-screenshot.png"
import triviaNight from "../images/Trivia-night-project-screenshot.png"
import portfolio from "../images/portfolio.png"
import unwasted from "../images/Unwasted-combined-screenshot.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons"

import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css"


const Portfolio = () => {

  // Gymrift
  const openPopupboxGymrift = () => {
    const content = (
      <div>
        <img className="portfolio-image-popupbox" src={gymrift} alt="Gymrift 3-day split project" />
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


  // City Guide App
  const openPopupboxTriviaNight = () => {
    const content = (
      <div>
        <img className="portfolio-image-popupbox" src={triviaNight} alt="Trivia Night project" />
        <p>This JavaScript-based, 2-player, turn-taking trivia game allows players to compete in the Science trivia category with randomized questions and shows players scores as they play throughout the game. It uses Contentful as a headless CMS for the trivia questions database and is styled with a mobile-first approach.</p>
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


  // Portfolio
  const openPopupboxPortfolio = () => {
    const content = (
      <div>
        <img className="portfolio-image-popupbox" src={portfolio} alt="portfolio image #???" />
        <p>This is what you're currently viewing--a showcase of my personal projects, some info about my journey into Web Development, and a way to contact me about anything from jobs to chatting about chess or anything you want! Drop me a line anytime, and I'll be happy to chat.</p>
        <b>GitHub: </b>
        <a className="hyper-link"
          onClick={() => window.open("https://github.com/underdoggum/portfolio-project")}>
          https://github.com/underdoggum/portfolio-project
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

  // Unwasted
  const openPopupboxUnwasted = () => {
    const content = (
      <div>
        <img className="portfolio-image-popupbox" src={unwasted} alt="Un-wasted project" />
        <p>This is a full-stack (MERN) customized e-commerce app where I led a team of three Software Developers as Scrum master/project manager. Utilizing our backgrounds in the foodservice and retail industries, we attempt to solve the problem of waste within those industries that we could not solve until we had the powerful tools of web development. This app lets users sign up as a seller or buyer, and depending on that choice, allows them to either list items for sale at discounted prices with CRUD functionality (seller), or view all items from all sellers and add to their shopping carts (buyer)--somewhat similar to a Craigslist for restaurants, but with a better user experience, we believe. Please note that this is an ongoing project.</p>
        <b>GitHub: </b>
        <a className="hyper-link"
          onClick={() => window.open("https://github.com/underdoggum/seir_penguin_project_3_frontend")}>
          https://github.com/underdoggum/seir_penguin_project_3_frontend
        </a>
        <br />
        <b>Deployed site: </b>
        <a className="hyper-link"
          onClick={() => window.open("https://unwasted.netlify.app/")}>
          https://unwasted.netlify.app/
        </a>
      </div>
    )
    PopupboxManager.open({content})
  }
  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "Un-wasted Project",
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
            <img className="portfolio-image" src={gymrift} alt="Gymrift project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}
          <div className="portfolio-image-box col-4" onClick={openPopupboxTriviaNight}>
            <img className="portfolio-image" src={triviaNight} alt="Trivia Night project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}
          <div className="portfolio-image-box col-4" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={portfolio} alt="Portfolio project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}
          <div className="portfolio-image-box col-4" onClick={openPopupboxUnwasted}>
            <img className="portfolio-image" src={unwasted} alt="Un-wasted project" />
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
