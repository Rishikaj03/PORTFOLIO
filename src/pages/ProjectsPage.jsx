import "./ProjectsPage.css";

import Navbar from "../Navbar";
import Footer from "../Footer";

import { projects } from "../data/projects";

function ProjectsPage() {
  return (
    <>
      <Navbar />

      <section className="projects-page">

        <div className="projects-page-heading">

          <h1>Projects</h1>

          <p>
            A collection of projects showcasing my work in Artificial
            Intelligence, Machine Learning, Data Science, NLP and Web
            Development.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project) => (

            <div className="project-card" key={project.id}>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">

                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}

                </div>

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <button
                    onClick={() => {
                      if (project.deployed) {
                        window.open(project.live, "_blank");
                      } else {
                        alert("🚀 This project hasn't been deployed yet.");
                      }
                    }}
                  >
                    Live Demo ↗
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default ProjectsPage;