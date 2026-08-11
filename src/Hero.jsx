import "./Hero.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations/variants";

const roles = [
  "AI & Machine Learning Student",
  "Data Science Enthusiast",
  "Web Developer",
  "Problem Solver",
];

const stack = [
  "Python", "Machine Learning", "React", "SQL", "Data Visualization", "NLP",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">

      {/* Ambient animated background */}
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="blob blob-c" />
        <span className="grid-overlay" />
      </div>

      <motion.div
        className="hero-content"
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

        <motion.div className="role-wrap" variants={fadeUp}>
          <AnimatePresence mode="wait">
            <motion.h2
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {roles[roleIndex]}
            </motion.h2>
          </AnimatePresence>
        </motion.div>

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
