
import Navbar from "./components/layout/Navbar";
import { BackgroundBeamsDemo } from "./components/backgrounds/Background";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import { Skills } from "./components/pages/Skills";
import { Projects } from "./components/pages/Projects";
import { Footer } from "./components/layout/Footer";
import WorkExperience from "./components/pages/WorkExperience";

function App() {

  return (
    <>
    <BackgroundBeamsDemo/>
    <Navbar/>
    <main>
      <Hero/>
      <About/>
      <WorkExperience/> 
      
      <Skills/>
      <Projects/>
      <Footer />
    </main>

    </>
  )
}

export default App
