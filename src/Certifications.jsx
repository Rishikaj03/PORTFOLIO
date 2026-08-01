import "./Certifications.css";
import { Link } from "react-router-dom";

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
        "Explored Google Cloud fundamentals, BigQuery, and cloud technologies.",
    },

    {
      title: "Google Data Analytics",
      issuer: "Google",
      year: "2025",
      icon: <FaGoogle />,
      description:
        "Learned data analytics concepts and data-driven decision making.",
    },

    {
      title: "Python for Data Science",
      issuer: "IBM",
      year: "2025",
      icon: <FaPython />,
      description:
        "Built a strong foundation in Python for data science and analytics.",
    },

    {
      title: "Deloitte Data Analytics Job Simulation",
      issuer: "Deloitte",
      year: "2025",
      icon: <FaAward />,
      description:
        "Completed a virtual job simulation focused on analytics and visualization.",
    },

  ];

  return (

    <section className="certifications" id="certifications">

      {/* Heading */}

      <div className="cert-heading">

        <h2>Certifications</h2>
        <span className="cert-tag">
          CONTINUOUS LEARNING
        </span>

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
                  View →
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="view-more">
        <Link to="/certifications" className="explore-btn">
        Explore All Certifications →
        </Link>
      </div>

    </section>

  );

}

export default Certifications;