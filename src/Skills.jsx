import "./Skills.css";

function Skills() {

  const skills = [
    {
      title: "Programming",
      items: ["Python", "C++", "Java", "SQL"]
    },
    {
      title: "AI & Machine Learning",
      items: [
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "Computer Vision"
      ]
    },
    {
      title: "Data Science",
      items: [
        "Pandas",
        "NumPy",
        "Power BI",
        "Data Visualization"
      ]
    },
    {
      title: "Web Development",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Django"
      ]
    },
    {
      title: "Tools",
      items: [
        "GitHub",
        "VS Code",
        "Streamlit",
        "Google Cloud"
      ]
    }
  ];


  return (
    <section className="skills" id="skills">

      <h2>My Skills</h2>

      <p className="skill-subtitle">
        Technologies and tools I work with
      </p>


      <div className="skill-container">

        {
          skills.map((skill, index) => (
            <div className="skill-card" key={index}>

              <h3>{skill.title}</h3>

              <div className="skill-tags">
                {
                  skill.items.map((item, i)=>(
                    <span key={i}>
                      {item}
                    </span>
                  ))
                }
              </div>

            </div>
          ))
        }

      </div>

    </section>
  );
}

export default Skills;