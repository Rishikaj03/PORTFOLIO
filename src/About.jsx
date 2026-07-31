import "./About.css";

import {
  FaBullseye,
  FaBrain,
  FaSeedling,
  FaLocationDot,
} from "react-icons/fa6";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-heading">
        <span className="about-tag">ABOUT ME</span>
        <h2>Passionate About Building Intelligent Solutions</h2>
      </div>

      <p className="about-text">
        I enjoy learning new technologies and building practical solutions that
        solve real-world problems. My interests lie in Data Science,
        Artificial Intelligence, Machine Learning, and Web Development.
        I believe in continuous learning, experimenting with ideas, and
        improving through hands-on projects.
      </p>

      <div className="about-grid">

        <div className="about-card">

          <h3>
            <FaBullseye className="about-icon" />
            Focus
          </h3>

          <p>Aspiring Data Science Professional</p>

        </div>

        <div className="about-card">

          <h3>
            <FaBrain className="about-icon" />
            Interests
          </h3>

          <p>Artificial Intelligence</p>
          <p>Machine Learning</p>
          <p>Data Science</p>
          <p>Web Development</p>

        </div>

        <div className="about-card">

          <h3>
            <FaSeedling className="about-icon" />
            Currently Exploring
          </h3>

          <p>Generative AI</p>
          <p>Computer Vision</p>
          <p>React</p>

        </div>

        <div className="about-card">

          <h3>
            <FaLocationDot className="about-icon" />
            Location
          </h3>

          <p>Nagpur, India</p>

        </div>

      </div>

    </section>
  );
}

export default About;