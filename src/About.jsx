import "./About.css";

import {
  FaBullseye,
  FaBrain,
  FaLaptopCode,
  FaLocationDot,
} from "react-icons/fa6";

function About() {
  return (
    <section className="about" id="about">

      {/* Heading */}

      <div className="about-heading">

        <span className="about-tag">
          BUILDING INTELLIGENT SOLUTIONS THROUGH TECHNOLOGY
        </span>

        <h2>About Me</h2>

      </div>

      {/* Description */}

      <p className="about-text">
        I enjoy learning new technologies and building practical solutions that
        solve real-world problems. My interests lie in Data Science,
        Artificial Intelligence, Machine Learning, and Web Development.
        I believe in continuous learning, experimenting with ideas, and
        improving through hands-on projects.
      </p>

      {/* Cards */}

      <div className="about-grid">

        <div className="about-card">

          <div className="icon-box">
            <FaBullseye />
          </div>

          <h3>Focus</h3>

          <p>
            Aspiring Data Science Professional
          </p>

        </div>


        <div className="about-card">

          <div className="icon-box">
            <FaBrain />
          </div>

          <h3>Interests</h3>

          <ul>

            <li>Artificial Intelligence</li>

            <li>Machine Learning</li>

            <li>Data Science</li>

            <li>Web Development</li>

          </ul>

        </div>


        <div className="about-card">

          <div className="icon-box">
            <FaLaptopCode />
          </div>

          <h3>Currently Exploring</h3>

          <ul>

            <li>Generative AI</li>

            <li>Computer Vision</li>

            <li>React</li>

          </ul>

        </div>


        <div className="about-card">

          <div className="icon-box">
            <FaLocationDot />
          </div>

          <h3>Location</h3>

          <p>
            Nagpur, India
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;