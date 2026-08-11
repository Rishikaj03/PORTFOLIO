import "./About.css";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations/variants";

import {
  FaBullseye,
  FaBrain,
  FaLaptopCode,
  FaLocationDot,
} from "react-icons/fa6";

function About() {
  return (
    <section className="about ambient-bg" id="about">

      {/* Heading */}

      <motion.div
        className="about-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >

        <h2>About Me</h2>
        <span className="about-tag">
        Designing, Developing, and Continuously Learning  
        </span>

      </motion.div>

      {/* Description */}

      <motion.p
        className="about-text"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        I enjoy learning new technologies and building practical solutions that
        solve real-world problems. My interests lie in Data Science,
        Artificial Intelligence, Machine Learning, and Web Development.
        I believe in continuous learning, experimenting with ideas, and
        improving through hands-on projects.
      </motion.p>

      {/* Cards */}

      <motion.div
        className="about-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >

        <motion.div
          className="about-card"
          variants={fadeUp}
          whileHover={{ y: -8 }}
        >

          <div className="icon-box">
            <FaBullseye />
          </div>

          <h3>Focus</h3>

          <p>
            Aspiring Data Science Professional
          </p>

        </motion.div>


        <motion.div
          className="about-card"
          variants={fadeUp}
          whileHover={{ y: -8 }}
        >

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

        </motion.div>


        <motion.div
          className="about-card"
          variants={fadeUp}
          whileHover={{ y: -8 }}
        >

          <div className="icon-box">
            <FaLaptopCode />
          </div>

          <h3>Currently Exploring</h3>

          <ul>

            <li>Generative AI</li>

            <li>Computer Vision</li>

            <li>React</li>

          </ul>

        </motion.div>


        <motion.div
          className="about-card"
          variants={fadeUp}
          whileHover={{ y: -8 }}
        >

          <div className="icon-box">
            <FaLocationDot />
          </div>

          <h3>Location</h3>

          <p>
            Nagpur, India
          </p>

        </motion.div>

      </motion.div>

    </section>
  );
}

export default About;