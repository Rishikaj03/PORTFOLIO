import "./Certifications.css";

import {
  FaGoogle,
  FaPython,
  FaCloud,
  FaAward,
} from "react-icons/fa";

function Certifications() {

  const certificates = [

    {
      title: "Google Cloud Career Launchpad",
      issuer: "Google Cloud",
      year: "2025",
      icon: <FaCloud />,
      description:
        "Explored cloud technologies including BigQuery, Dataproc, and Google Cloud services.",
    },

    {
      title: "Google Data Analytics: Data, Data, Everywhere",
      issuer: "Google",
      year: "2025",
      icon: <FaGoogle />,
      description:
        "Learned the foundations of data analytics, data-driven decision making, and analytical thinking.",
    },

    {
      title: "Python for Data Science",
      issuer: "IBM",
      year: "2025",
      icon: <FaPython />,
      description:
        "Built a strong foundation in Python programming for data science and analytics.",
    },

    {
      title: "Deloitte Data Analytics Job Simulation",
      issuer: "Deloitte",
      year: "2025",
      icon: <FaAward />,
      description:
        "Completed a virtual job simulation focused on data analysis, visualization, and business insights.",
    },

  ];

  return (

    <section className="certifications" id="certifications">

      {/* Heading */}

      <div className="cert-heading">

        <span className="cert-tag">
          CONTINUOUS LEARNING
        </span>

        <h2>Certifications</h2>

      </div>

      <p className="cert-subtitle">
        Professional certifications and learning milestones that reflect my
        commitment to continuous growth in technology and data science.
      </p>

      {/* Cards */}

      <div className="cert-container">

        {certificates.map((cert, index) => (

          <div className="cert-card" key={index}>

            <div className="cert-icon">

              {cert.icon}

            </div>

            <div className="cert-content">

              <h3>{cert.title}</h3>

              <span>

                {cert.issuer} • {cert.year}

              </span>

              <p>

                {cert.description}

              </p>

              <div className="cert-buttons">

                <button>
                  View
                </button>

                <button>
                  Verify
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="view-more">

        <button>

          Explore All Certifications →

        </button>

      </div>

    </section>

  );

}

export default Certifications;