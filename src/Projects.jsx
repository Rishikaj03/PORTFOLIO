import "./Projects.css";

function Projects() {

  const projects = [
    {
      title: "NLP Toolkit",
      description:
        "A Natural Language Processing toolkit that performs text preprocessing, tokenization, stemming, lemmatization, POS tagging, NER and dependency parsing.",
      tech:
        ["Python", "NLTK", "spaCy", "Streamlit"],
      github:
        "https://github.com/Rishikaj03/NLP-Toolkit"
    },

    {
      title: "Crop Recommendation System",
      description:
        "Machine learning based system that recommends suitable crops using soil and environmental parameters.",
      tech:
        ["Python", "Machine Learning", "Random Forest"],
      github: "#"
    },

    {
      title: "Student Study Planner",
      description:
        "A productivity application to manage study schedules, tasks and academic planning.",
      tech:
        ["Python", "Excel", "Data Management"],
      github: "#"
    },

    {
      title: "DBSCAN Clustering Analysis",
      description:
        "An unsupervised learning project implementing density-based clustering techniques.",
      tech:
        ["Python", "ML", "Data Visualization"],
      github: "#"
    }
  ];


  return (
    <section className="projects" id="projects">

      <h2>My Projects</h2>

      <p className="project-subtitle">
        Some projects I have built and explored
      </p>


      <div className="project-container">

        {
          projects.map((project,index)=>(
            
            <div className="project-card" key={index}>

              <h3>{project.title}</h3>

              <p>
                {project.description}
              </p>


              <div className="tech-stack">
                {
                  project.tech.map((item,i)=>(
                    <span key={i}>
                      {item}
                    </span>
                  ))
                }
              </div>


              <a 
                href={project.github}
                target="_blank"
              >
                View Code →
              </a>

            </div>

          ))
        }

      </div>

    </section>
  );
}

export default Projects;