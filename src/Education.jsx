import "./Education.css";

function Education() {

  const education = [
    {
      degree: "Master of Computer Applications (AI & ML)",
      institute: "Ramdeobaba University, Nagpur",
      year: "2025 - Present",
      details:
        "Specialization in Artificial Intelligence and Machine Learning with focus on Data Science, ML algorithms and advanced technologies."
    },

    {
      degree: "Bachelor of Computer Applications",
      institute: "SFS College, Nagpur",
      year: "2021 - 2024",
      details:
        "Completed undergraduate studies in Computer Applications covering programming, databases, web technologies and software development."
    },

    {
      degree: "Higher Secondary Education (12th)",
      institute: "St. Ursula Girls Junior College, Nagpur",
      year: "2020 - 2021",
      details:
        "Completed higher secondary education with focus on science and technology."
    }
  ];


  return (

    <section className="education" id="education">

      <h2>Education</h2>

      <p className="education-subtitle">
        My academic journey
      </p>


      <div className="timeline">

        {
          education.map((edu,index)=>(

            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>


              <div className="education-card">

                <h3>
                  {edu.degree}
                </h3>

                <h4>
                  {edu.institute}
                </h4>

                <span>
                  {edu.year}
                </span>

                <p>
                  {edu.details}
                </p>

              </div>

            </div>

          ))
        }

      </div>

    </section>

  );
}

export default Education;