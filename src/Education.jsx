import "./Education.css";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, staggerContainer } from "./animations/variants";

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

    <section className="education ambient-bg" id="education">

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        Education
      </motion.h2>

      <motion.p
        className="education-subtitle"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        My academic journey
      </motion.p>


      <motion.div
        className="timeline"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >

        {
          education.map((edu,index)=>(

            <motion.div className="timeline-item" key={index} variants={fadeLeft}>

              <div className="timeline-dot"></div>


              <motion.div className="education-card" whileHover={{ y: -6 }}>

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

              </motion.div>

            </motion.div>

          ))
        }

      </motion.div>

    </section>

  );
}

export default Education;