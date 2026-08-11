import "./Hero.css";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations/variants";

const stack = [
  "Python", "Machine Learning", "React", "SQL", "Data Visualization", "NLP",
];

function Hero() {
  return (
    <section className="hero" id="home">

      <motion.div
        className="hero-content hero-float"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >

        <motion.p className="greeting" variants={fadeUp}>
          <span className="status-dot" />
          Hello, I'm
        </motion.p>

        <motion.h1 variants={fadeUp}>
          <span className="gradient-text">Rishika Jaiswal</span>
        </motion.h1>

        <motion.h2 className="role-line gradient-text" variants={fadeUp}>
          AI & ML Enthusiast · Data Science · Web Developer
        </motion.h2>

        <motion.p className="description" variants={fadeUp}>
          Passionate about AI, Machine Learning, Data Science,
          and building practical web applications that solve
          real-world problems.
        </motion.p>

        <motion.div className="hero-buttons" variants={fadeUp}>
          <motion.button
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Download Resume
          </motion.button>

          <motion.button
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
          </motion.button>
        </motion.div>

        <motion.div className="stack-pills" variants={staggerContainer}>
          {stack.map((item) => (
            <motion.span
              className="pill"
              key={item}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.06 }}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

      </motion.div>

      <motion.a
        href="#about"
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        aria-label="Scroll to About section"
      >
        <span className="scroll-cue-dot" />
        <span className="scroll-cue-label">Scroll</span>
      </motion.a>

    </section>
  );
}

export default Hero;
