import "./Contact.css";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations/variants";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaFileAlt,
  FaDownload
} from "react-icons/fa";

import {
  SiLeetcode,
  SiHackerrank
} from "react-icons/si";

function Contact() {
  return (
    <section className="contact" id="contact">

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        Let's Connect
      </motion.h2>

      <motion.p
        className="contact-subtitle"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        I'm always open to internships, collaborations and exciting opportunities.
      </motion.p>

      {/* Contact Cards */}

      <motion.div
        className="contact-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >

        <motion.div className="contact-card" variants={fadeUp} whileHover={{ y: -8 }}>
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>

          <a href="mailto:rishika@example.com">
            rishika@example.com
          </a>
        </motion.div>

        <motion.div className="contact-card" variants={fadeUp} whileHover={{ y: -8 }}>
          <FaLinkedin className="contact-icon" />

          <h3>LinkedIn</h3>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Visit Profile
          </a>
        </motion.div>

        <motion.div className="contact-card" variants={fadeUp} whileHover={{ y: -8 }}>

          <FaGithub className="contact-icon" />

          <h3>GitHub</h3>

          <a
            href="https://github.com/Rishikaj03"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Rishikaj03
          </a>

        </motion.div>

        <motion.div className="contact-card" variants={fadeUp} whileHover={{ y: -8 }}>

          <FaMapMarkerAlt className="contact-icon" />

          <h3>Location</h3>

          <p>Nagpur, India</p>

        </motion.div>

      </motion.div>


      {/* Resume */}

      <div className="resume-buttons">

        <a href="/resume.pdf" target="_blank">
          <FaFileAlt />
          View Resume
        </a>

        <a href="/resume.pdf" download>
          <FaDownload />
          Download Resume
        </a>

      </div>


      {/* Coding Profiles */}

      <div className="coding-section">

        <h3>Coding Profiles</h3>

        <div className="coding-container">

          <a href="https://leetcode.com/u/rishika1387/" className="coding-card" target="_blank" rel="noreferrer">
            <SiLeetcode />
            <span>LeetCode</span>
          </a>

          <a href="https://www.hackerrank.com/profile/rishika1387" className="coding-card">
            <SiHackerrank />
            <span>HackerRank</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;