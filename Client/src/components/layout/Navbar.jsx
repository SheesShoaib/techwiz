import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Menu,
  Search,
  UserRound,
  X,
} from "lucide-react";

import "../../styles/components/navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`main-navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="site-container navbar-inner">

        <Link className="fh-logo" to="/" onClick={closeMenu}>
          <div className="logo-symbol">
            <span className="logo-f">F</span>
            <span className="logo-slash"></span>
            <span className="logo-h">H</span>

            <motion.span
              className="logo-orbit-dot"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <div className="logo-name">
            <strong>FAN HUB</strong>
            <span>PLUS</span>
          </div>
        </Link>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/explore" onClick={closeMenu}>
            Explore
          </Link>

          <Link to="/characters" onClick={closeMenu}>
            Characters
          </Link>

          <Link to="/Stories" onClick={closeMenu}>
            Stories
          </Link>

          <Link to="/events" onClick={closeMenu}>
            Events
          </Link>

          <Link to="/Shop" onClick={closeMenu}>
            Shop
          </Link>
        </nav>

        <div className="navbar-actions">
          <button className="nav-icon-btn" aria-label="Search">
            <Search size={19} />
          </button>

          <Link className="join-btn" to="/login">
            <UserRound size={17} />
            <span>Join Hub</span>
          </Link>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;