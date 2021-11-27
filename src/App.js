import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
// import Particles from "react-particles-js"
import Particles from "react-tsparticles";

import Navbar from "./components/Navbar"
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Services from "./components/Services"
import Experience from "./components/Experience"
import Portfolio from "./components/Portfolio"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      {/* react-particles-js "Particles" component here if needed */}
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
