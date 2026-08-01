import "./Projects.css";
import { Link } from "react-router-dom";
import { projects } from "./data/projects";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="project-heading">

        <h2>Projects</h2>

        <span className="project-tag">
          FEATURED WORK
        </span>

      </div>

      <p className="project-subtitle">
        A selection of projects that showcase my skills in Artificial Intelligence,
        Machine Learning, Data Science, NLP, and Web Development.
      </p>

      <div className="project-container">

        {projects
          .filter((project) => project.featured)
          .map((project) => (

            <div className="project-card" key={project.id}>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">

                  {project.tech.map((item, i) => (
                    <span key={i}>{item}</span>
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

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}

                </div>

              </div>

            </div>

          ))}

      </div>

      <div className="view-more">

        <Link
          to="/projects"
          className="explore-btn"
        >
          Explore All Projects →
        </Link>

      </div>

    </section>
  );
}

export default Projects;