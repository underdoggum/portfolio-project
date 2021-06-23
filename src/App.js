import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Services from "./components/Services"
import Particles from "react-particles-js";

//from the portfolio project via
//https://www.youtube.com/watch?v=vD72tRK8mC4

function App() {
  return (
    <div>
      <Particles
      className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 900,
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
    </div>
  );
}

export default App;
