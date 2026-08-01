import "./Certifications.css";
import { Link } from "react-router-dom";
import { certificates } from "./data/certificates";

function Certifications() {
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

      {/* Featured Certificates */}

      <div className="cert-container">

        {certificates
          .filter((cert) => cert.featured)
          .map((cert) => (

            <div className="cert-card" key={cert.id}>

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

      {/* Explore All */}

      <div className="view-more">

        <Link
          to="/certifications"
          className="explore-btn"
        >
          Explore All Certifications →
        </Link>

      </div>

    </section>
  );
}

export default Certifications;