import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import "./NavBar.css";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const to = (id) => (isHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const probe = window.scrollY + window.innerHeight * 0.32;
      let current = LINKS[0].id;

      for (const link of LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= probe) current = link.id;
      }

      const bottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 4;

      setActive(bottom ? LINKS[LINKS.length - 1].id : current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? "is-scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav-shell">
          <a href={isHome ? "#home" : "/"} className="nav-brand" aria-label="Back to top">
            <span className="nav-logo">RJ</span>
            <span className="nav-brand-text">
              Rishika<span className="nav-brand-dot">.</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={to(link.id)}
                className={isHome && active === link.id ? "active" : ""}
              >
                {isHome && active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="nav-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="nav-label">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a href={to("contact")} className="nav-cta">
              Let&apos;s talk
            </a>

            <button
              className={`nav-burger ${open ? "is-open" : ""}`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <span className="nav-glow" aria-hidden="true" />
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="nav-scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.nav
              className="nav-drawer"
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Mobile"
            >
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={to(link.id)}
                  onClick={() => setOpen(false)}
                  className={isHome && active === link.id ? "active" : ""}
                  initial={{ x: -14, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <span className="drawer-index">
                    0{i + 1}
                  </span>
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
