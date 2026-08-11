import "./Skills.css";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations/variants";

import {
  FaCode,
  FaRobot,
  FaChartLine,
  FaGlobe,
  FaTools,
} from "react-icons/fa";

function Skills() {

  const skills = [

    {
      title: "Programming",
      icon: <FaCode />,
      items: ["Python", "Java", "SQL"],
    },

    {
      title: "AI & Machine Learning",
      icon: <FaRobot />,
      items: [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
      ],
    },

    {
      title: "Data Science",
      icon: <FaChartLine />,
      items: [
        "Pandas",
        "NumPy",
        "Power BI",
        "Data Visualization",
      ],
    },

    {
      title: "Web Development",
      icon: <FaGlobe />,
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Django",
      ],
    },

    {
      title: "Tools",
      icon: <FaTools />,
      items: [
        "GitHub",
        "VS Code",
        "Streamlit",
        "Google Cloud",
      ],
    },

  ];

  return (

    <section className="skills ambient-bg" id="skills">

      {/* Heading */}

      <motion.div
        className="skills-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >

        <h2>Skills & Technologies</h2>
        <span className="skills-tag">
          TECHNOLOGIES & TOOLS I WORK WITH
        </span>
      </motion.div>

      <motion.p
        className="skill-subtitle"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        A collection of programming languages, frameworks, tools, and technologies
        I use to build intelligent and impactful applications.
      </motion.p>

      {/* Cards */}

      <motion.div
        className="skill-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >

        {skills.map((skill, index) => (

          <motion.div
            className="skill-card"
            key={index}
            variants={fadeUp}
            whileHover={{ y: -10 }}
          >

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.title}</h3>

            <div className="skill-tags">

              {skill.items.map((item, i) => (

                <span key={i}>
                  {item}
                </span>

              ))}

            </div>

          </motion.div>

        ))}

      </motion.div>

    </section>

  );

}

export default Skills;