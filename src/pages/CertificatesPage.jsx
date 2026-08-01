import "./CertificatesPage.css";
import { Link } from "react-router-dom";
import { certificates } from "../data/certificates";

function CertificatesPage() {
  return (
    <section className="cert-page">

      {/* Header */}

      <div className="cert-page-header">

        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>

        <h1>All Certifications</h1>
        
        <span className="page-tag">
          CONTINUOUS LEARNING
        </span>
        
        <p>
          A collection of certifications that showcase my continuous learning,
          technical growth, and passion for exploring new technologies.
        </p>

      </div>

      {/* Cards */}

      <div className="all-certificates">

        {certificates.map((cert) => (

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

    </section>
  );
}

export default CertificatesPage;