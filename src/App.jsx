import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Footer from "./Footer";

import CertificatesPage from "./pages/CertificatesPage";
import ProjectsPage from "./pages/ProjectsPage";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/certifications"
        element={<CertificatesPage />}
      />

      <Route
        path="/projects"
        element={<ProjectsPage />}
      />
    </Routes>
  );
}

export default App;