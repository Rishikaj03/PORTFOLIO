import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./ProjectsPage.css";
import AmbientBackground from "../AmbientBackground";

import { fadeUp, staggerContainer } from "../animations/variants";
import { projects } from "../data/projects";

function ProjectsPage() {
  const filters = useMemo(() => {
    const all = new Set();
    projects.forEach((p) => p.tech.forEach((t) => all.add(t)));
    return ["All", ...Array.from(all)];
  }, []);

  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(active));

  return (
    <>
      <AmbientBackground />
      <Navbar />

      <section className="projects-page">

        <motion.div
          className="page-head"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp}>
            <Link to="/" className="back-btn">
              <span className="back-arrow">←</span> Back to Home
            </Link>
          </motion.div>

          <motion.span className="eyebrow" variants={fadeUp}>
            Selected Work
          </motion.span>

          <motion.h1 variants={fadeUp}>
            All <span className="gradient-text">Projects</span>
          </motion.h1>

          <motion.span className="rule" variants={fadeUp} />

          <motion.p className="sec-sub" variants={fadeUp}>
            A collection of projects showcasing my work in Artificial
            Intelligence, Machine Learning, Data Science, NLP and Web
            Development.
          </motion.p>

          <motion.div className="page-stats" variants={fadeUp}>
            <div className="stat">
              <strong>{projects.length}</strong>
              <span>Projects</span>
            </div>
            <div className="stat">
              <strong>{filters.length - 1}</strong>
              <span>Technologies</span>
            </div>
            <div className="stat">
              <strong>∞</strong>
              <span>Curiosity</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="filter-bar"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              variants={fadeUp}
              className={`filter-chip ${active === f ? "is-active" : ""}`}
              onClick={() => setActive(f)}
            >
              {active === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="filter-pill"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span>{f}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.article
                className="project-card"
                key={project.id}
                layout
                initial={{ opacity: 0, y: 34, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -10 }}
              >
                <span className="card-index">
                  {String(i + 1).padStart(2, "0")}
                </span>

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
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </section>

      <Footer />
    </>
  );
}

export default ProjectsPage;
