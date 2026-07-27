import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <h2 className="section-title">About Me</h2>

      <div className="about-container">

        <div className="about-text">

          <p>
            I'm passionate about using technology to solve real-world problems and continuously expand my knowledge. My interests lie in Data Science, Artificial Intelligence, Machine Learning, and Web Development. I enjoy building practical projects, exploring new technologies, and turning ideas into meaningful applications. I believe that continuous learning and hands-on experience are the foundation of growth in technology.
          </p>

        </div>

        <div className="about-info">

          <div className="info-card">
            <span>📍</span>
            <div>
              <h4>Location</h4>
              <p>Nagpur, India</p>
            </div>
          </div>

          <div className="info-card">
            <span>🎯</span>
            <div>
              <h4>Career Goal</h4>
              <p>Data Science</p>
            </div>
          </div>

          <div className="info-card">
            <span>💻</span>
            <div>
              <h4>Interests</h4>
              <p>AI • ML • Web Development</p>
            </div>
          </div>

          <div className="info-card">
            <span>🌱</span>
            <div>
              <h4>Currently Learning</h4>
              <p>React • GenAI • Computer Vision</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;