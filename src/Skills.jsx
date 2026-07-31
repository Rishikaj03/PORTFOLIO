import "./Skills.css";

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

    <section className="skills" id="skills">

      {/* Heading */}

      <div className="skills-heading">

        <h2>Skills & Technologies</h2>
        <span className="skills-tag">
          TECHNOLOGIES & TOOLS I WORK WITH
        </span>
      </div>

      <p className="skill-subtitle">
        A collection of programming languages, frameworks, tools, and technologies
        I use to build intelligent and impactful applications.
      </p>

      {/* Cards */}

      <div className="skill-container">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

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

          </div>

        ))}

      </div>

    </section>

  );

}

export default Skills;