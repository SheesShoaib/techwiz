import { Github, Instagram, Sparkles, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

import "../../styles/components/footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main">
          <div className="footer-brand-area">
            <Link className="brand" to="/">
              <span className="brand-icon">
                <Sparkles size={18} />
              </span>

              <span>
                FANHUB<span className="brand-plus">+</span>
              </span>
            </Link>

            <p>
              One universe for every story, character, game, artist and fandom
              you love.
            </p>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <Link to="/explore">Discover</Link>
            <Link to="/characters">Characters</Link>
            <Link to="/articles">Stories</Link>
            <Link to="/events">Events</Link>
          </div>

          <div className="footer-column">
            <h4>FanHub+</h4>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/merchandise">Merchandise</Link>
            <Link to="/login">Join community</Link>
          </div>

          <div className="footer-social">
            <h4>Follow the universe</h4>

            <div className="social-links">
              <a href="#" aria-label="Instagram">
                <Instagram size={18} />
              </a>

              <a href="#" aria-label="YouTube">
                <Youtube size={18} />
              </a>

              <a href="#" aria-label="GitHub">
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} FanHub+. All rights reserved.</span>
          <span>Built for fans, by fans.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;