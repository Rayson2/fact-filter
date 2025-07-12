import "../styles/Footer.scss";
import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Left Column */}
        <div className="footer-left">
          <img src="logo.png" alt="logo" />
          <h2>Fact Filter</h2>
          <p>
            A final-year BCA project built by Rayson Murray to detect fake,
            real, or opinionated content using AI & NLP on text, audio, image,
            and video.
          </p>
          <div className="social-icons">
            <a href="https://github.com/rayson2" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.instagram.com/rayson_murray/" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rayson2/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Center Column */}
        <div className="footer-middle">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/text">Text Format</Link></li>
            <li><Link to="/image">Image Format</Link></li>
            <li><Link to="/video">Video Format</Link></li>
            <li><Link to="/audio">Audio Format</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="footer-right">
          <h3>Contact</h3>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:raysonmurray19009@gmail.com">
              raysonmurray19009@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919827468248">+91 982-7468-248</a>
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Rayson Murray | BCA Final Year Project, Govt.
          E.R.R. PG College Bilaspur
        </p>
      </div>
    </footer>
  );
};

export default Footer;
