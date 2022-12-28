import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Skill from "./components/skills/Skill";
import Project from "./components/projects/Project";
import About from "./components/aboutMe/About";
import Contact from "./components/contactMe/Contact";
import Education from "./components/education/Education";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Education/>
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
