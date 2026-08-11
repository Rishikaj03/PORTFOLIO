import "./Projects.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations/variants";
import { projects } from "./data/projects";

function Projects() {
  return (
    <section className="projects" id="projects">

      <motion.div
        className="project-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >

        <h2>Projects</h2>

        <span className="project-tag">
          FEATURED WORK
        </span>

      </motion.div>

      <motion.p
        className="project-subtitle"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        A selection of projects that showcase my skills in Artificial Intelligence,
        Machine Learning, Data Science, NLP and Web Development.
      </motion.p>

      <motion.div
        className="project-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >

        {projects
          .filter((project) => project.featured)
          .map((project) => (

            <motion.div
              className="project-card"
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
            >

              <div className="project-image">

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                ) : (
                  <div className="image-placeholder">
                    Project Preview
                  </div>
                )}

              </div>

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
                    GitHub
                  </a>

                  <button
                    onClick={() => {
                      if (project.deployed) {
                        window.open(project.live, "_blank");
                      } else {
                        alert("🚀 Live demo coming soon!");
                      }
                    }}
                  >
                    Live Demo
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

      </motion.div>

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