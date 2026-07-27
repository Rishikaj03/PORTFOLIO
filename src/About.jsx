import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <h2 className="section-heading">About</h2>

      <p className="about-text">
        I enjoy learning new technologies and building practical solutions that
        solve real-world problems. My interests lie in Data Science, Artificial
        Intelligence, Machine Learning, and Web Development. I believe in
        continuous learning, experimenting with ideas, and improving through
        hands-on projects.
      </p>

      <div className="about-grid">

        <div className="about-card">
          <h3>🎯 Focus</h3>
          <p>Aspiring Data Science Professional</p>
        </div>

        <div className="about-card">
          <h3>💡 Interests</h3>
          <p>Artificial Intelligence</p>
          <p>Machine Learning</p>
          <p>Data Science</p>
          <p>Web Development</p>
        </div>

        <div className="about-card">
          <h3>🌱 Currently Exploring</h3>
          <p>Generative AI</p>
          <p>Computer Vision</p>
          <p>React</p>
        </div>

        <div className="about-card">
          <h3>📍 Location</h3>
          <p>Nagpur, India</p>
        </div>

      </div>

    </section>
  );
}

export default About;