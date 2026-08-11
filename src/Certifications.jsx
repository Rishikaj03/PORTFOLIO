import "./Certifications.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations/variants";
import { certificates } from "./data/certificates";

function Certifications() {
  return (
    <section className="certifications" id="certifications">

      {/* Heading */}

      <motion.div
        className="cert-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >

        <h2>Certifications</h2>

        <span className="cert-tag">
          CONTINUOUS LEARNING
        </span>

      </motion.div>

      <motion.p
        className="cert-subtitle"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        Professional certifications and learning milestones that reflect my
        commitment to continuous growth in technology and data science.
      </motion.p>

      {/* Featured Certificates */}

      <motion.div
        className="cert-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >

        {certificates
          .filter((cert) => cert.featured)
          .map((cert) => (

            <motion.div
              className="cert-card"
              key={cert.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
            >

              <div className="cert-icon">
                {cert.icon}
              </div>

              <div className="cert-content">

                <h3>{cert.title}</h3>

                <span>
                  {cert.issuer} • {cert.year}
                </span>

                <p>
                  {cert.description}
                </p>

                  <div className="cert-buttons">
                    {(cert.pdf || cert.image || cert.link) && (
                   <a
                     href={cert.pdf || cert.image || cert.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="cert-view-btn"
                    >
                      View →
                    </a>
                   )}
                   </div>
                   
              </div>

            </motion.div>

          ))}

      </motion.div>

      {/* Explore All */}

      <div className="view-more">

        <Link
          to="/certifications"
          className="explore-btn"
        >
          Explore All Certifications →
        </Link>

      </div>

    </section>
  );
}

export default Certifications;