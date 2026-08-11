import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./CertificatesPage.css";

import Navbar from "../Navbar";
import Footer from "../Footer";
import AmbientBackground from "../AmbientBackground";

import { fadeUp, staggerContainer } from "../animations/variants";
import { certificates } from "../data/certificates";

function CertificatesPage() {
  const issuers = useMemo(
    () => ["All", ...Array.from(new Set(certificates.map((c) => c.issuer)))],
    []
  );

  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? certificates
      : certificates.filter((c) => c.issuer === active);

  return (
    <>
      <AmbientBackground />
      <Navbar />

      <section className="cert-page">

        {/* Header */}
        <motion.div
          className="cert-page-header"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp}>
            <Link to="/" className="back-btn">
              <span className="back-arrow">←</span> Back to Home
            </Link>
          </motion.div>

          <motion.span className="page-tag" variants={fadeUp}>
            Continuous Learning
          </motion.span>

          <motion.h1 variants={fadeUp}>
            All <span className="gradient-text">Certifications</span>
          </motion.h1>

          <motion.span className="rule" variants={fadeUp} />

          <motion.p variants={fadeUp}>
            A collection of certifications that showcase my continuous learning,
            technical growth, and passion for exploring new technologies.
          </motion.p>

          <motion.div className="page-stats" variants={fadeUp}>
            <div className="stat">
              <strong>{certificates.length}</strong>
              <span>Certificates</span>
            </div>
            <div className="stat">
              <strong>{issuers.length - 1}</strong>
              <span>Issuers</span>
            </div>
            <div className="stat">
              <strong>2025</strong>
              <span>Most Recent</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="filter-bar"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {issuers.map((f) => (
            <motion.button
              key={f}
              variants={fadeUp}
              className={`filter-chip ${active === f ? "is-active" : ""}`}
              onClick={() => setActive(f)}
            >
              {active === f && (
                <motion.span
                  layoutId="cert-filter-pill"
                  className="filter-pill"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span>{f}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Cards */}
        <motion.div className="all-certificates" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((cert, i) => (
              <motion.div
                className="cert-card"
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 34, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                whileHover={{ y: -10 }}
              >
                <div className="cert-icon">{cert.icon}</div>

                <div className="cert-content">
                  <h3>{cert.title}</h3>

                  <span>
                    {cert.issuer} • {cert.year}
                  </span>

                  <p>{cert.description}</p>

                  <div className="cert-buttons">
                    {(cert.pdf || cert.image || cert.link) && (
                      <a
                        href={cert.pdf || cert.image || cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="cert-view-btn"
                      >
                        View →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </section>

      <Footer />
    </>
  );
}

export default CertificatesPage;
