import React from "react";
import "./Contact.css";
import Fade from "react-reveal/Fade";

const Contact = () => {

  const handleContactForm = e => {
    e.preventDefault();
  }

  
  return (
    <div className="contact">
      <section id="contact-section">
        <Fade bottom duration={2500}>
          <div className="form-container">
            <h2>Contact Us</h2>
            <p>Email us and keep upto date with our latest news</p>
            <div className="contactForm">
              <div>
                <i className="fa fa-map-marker"></i>
                <span className="form-info"> 29 Amborkana ,Sylhet BD</span>
                <br />
                <i className="fa fa-phone"> </i>
                <span className="form-info"> +880 1320-456789</span>
                <br />
                <i className="fa fa-envelope"></i>
                <span className="form-info"> CarGalleria7@gmail.com</span>
              </div>
              <div className="form-fields">
                <form onSubmit={handleContactForm}>
                  <input type="text" placeholder="Your Name" required />
                  <input type="text" placeholder="Last Name" />
                  <br />
                  <input type="Email" placeholder="Email" required />
                  <br />
                  <input type="text" placeholder="Subject of this message" />
                  <br />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                    required
                  ></textarea>
                  <br />
                  <button className="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default Contact;