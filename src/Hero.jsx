import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="greeting">Hello, I'm</p>

        <h1>Rishika Jaiswal</h1>

        <h2>
          Artificial Intelligence <br />
          & Machine Learning Student
        </h2>

        <p className="description">
          Passionate about AI, Machine Learning, Data Science,
          and building practical web applications that solve
          real-world problems.
        </p>

        <div className="hero-buttons">
          <button>Download Resume</button>
          <button>View Projects</button>
        </div>

      </div>

      <div className="hero-image">

        <div className="image-box">

          Image

        </div>

      </div>

    </section>
  );
}

export default Hero;