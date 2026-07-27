import "./Certifications.css";

function Certifications() {

  const certificates = [
    {
      title: "Python Programming Certification",
      issuer: "EC-Council",
      year: "2025",
      description:
        "Completed beginner-level Python programming certification covering programming fundamentals."
    },

    {
      title: "Deloitte Data Analytics Virtual Experience",
      issuer: "Deloitte",
      year: "2025",
      description:
        "Completed a virtual job simulation focused on data analysis, visualization and business insights."
    },

    {
      title: "Google Cloud Skills",
      issuer: "Google Cloud",
      year: "2025",
      description:
        "Explored cloud technologies including BigQuery, Dataproc and other Google Cloud services."
    }
  ];


  return (

    <section className="certifications" id="certifications">

      <h2>Certifications & Achievements</h2>

      <p className="cert-subtitle">
        Learning milestones and professional growth
      </p>


      <div className="cert-container">

        {
          certificates.map((cert,index)=>(

            <div className="cert-card" key={index}>

              <div className="cert-icon">
                🏆
              </div>

              <div>
                <h3>{cert.title}</h3>

                <h4>
                  {cert.issuer} • {cert.year}
                </h4>

                <p>
                  {cert.description}
                </p>
              </div>

            </div>

          ))
        }

      </div>

    </section>

  );
}

export default Certifications;