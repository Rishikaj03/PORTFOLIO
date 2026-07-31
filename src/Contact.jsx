import "./Contact.css";

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

      <h2>Let's Connect</h2>

      <p className="contact-subtitle">
        I'm always open to internships, collaborations and exciting opportunities.
      </p>

      {/* Contact Cards */}

      <div className="contact-container">

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>

          <a href="mailto:rishika@example.com">
            rishika@example.com
          </a>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />

          <h3>LinkedIn</h3>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Visit Profile
          </a>
        </div>

        <div className="contact-card">

          <FaGithub className="contact-icon" />

          <h3>GitHub</h3>

          <a
            href="https://github.com/Rishikaj03"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Rishikaj03
          </a>

        </div>

        <div className="contact-card">

          <FaMapMarkerAlt className="contact-icon" />

          <h3>Location</h3>

          <p>Nagpur, India</p>

        </div>

      </div>


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

          <a href="#" className="coding-card">
            <SiLeetcode />
            <span>LeetCode</span>
          </a>

          <a href="#" className="coding-card">
            <SiHackerrank />
            <span>HackerRank</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;