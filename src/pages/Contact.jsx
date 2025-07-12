import "../styles/Contact.scss";
import { Github, Instagram, Linkedin } from "lucide-react";
import MailScript from "../components/MailScript.jsx";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contactContainer">
        {/* Left Section */}
        <div className="contactLeft">
          <div className="contactOption">
            <h4 className="optionTitle">📧 Email Me</h4>
            <p className="optionDescription">
              I’m happy to connect regarding this project or tech collaboration.
            </p>
            <p className="optionInfo">
              <a href="mailto:raysonmurray19009@gmail.com">
                raysonmurray19009@gmail
              </a>
            </p>
          </div>

          <div className="contactOption">
            <h4 className="optionTitle">📞 Call Me</h4>
            <p className="optionDescription">
              Reach out for project details or future opportunities.
            </p>
            <p className="optionInfo">
              <a href="tel:+919827468248">+91 982-7468-248</a>
            </p>
          </div>

          <div className="socialIcons">
            <ul>
              <li>
                 <a href="https://github.com/rayson2" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
              </li>
              <li>
                <a href="https://www.instagram.com/rayson_murray/" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} />
            </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rayson2/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="contactRight">
          <h2 className="formHeading">
            Let's Talk About the Project
          </h2>
          <p className="formSubheading">
            I’d love to hear your feedback or ideas!
          </p>
          <form className="contactForm" onSubmit={MailScript}>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
              className="formInput"
            />
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              className="formInput"
            />
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              required
              className="formTextarea"
              rows="5"
            ></textarea>
            <button type="submit" className="buttonStyle">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;