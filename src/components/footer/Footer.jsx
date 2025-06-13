import { useState } from "react";
import "./Footer.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import { MdOutlineImportExport, MdOutlineDirectionsCarFilled, MdOutlineBorderClear } from "react-icons/md";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-about">
              <h5 className="logo-text">NN Queueing Services</h5>
              <div className="divider"></div>
              <p className="footer-tagline">
                Your trusted partner for seamless import/export documentation, 
                cross-border permits, and vehicle registration services across 
                Southern Africa. We simplify complex processes with expertise 
                and efficiency.
              </p>
              <div className="footer-contact-info">
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>+2700 000 000</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>nnqueueingservices.co.za</span>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>123 Test Road Street, Mars</span>
                </div>
              </div>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              <div className="divider"></div>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>

            <div className="footer-services">
              <h3>Our Services</h3>
              <div className="divider"></div>
              <ul>
                <li>
                  <MdOutlineImportExport className="service-icon" />
                  <a href="/services/import-export">Import/Export Licenses</a>
                </li>
                <li>
                  <MdOutlineBorderClear className="service-icon" />
                  <a href="/services/cross-border">Cross-Border Permits</a>
                </li>
                <li>
                  <MdOutlineDirectionsCarFilled className="service-icon" />
                  <a href="/services/vehicle-reg">Vehicle Registration</a>
                </li>
                <li>
                  <MdOutlineDirectionsCarFilled className="service-icon" />
                  <a href="/services/number-plates">Number Plates</a>
                </li>
                <li>
                  <MdOutlineImportExport className="service-icon" />
                  <a href="/services/customs">Customs Clearance</a>
                </li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h3>Get Updates</h3>
              <div className="divider"></div>
              <p>
                Subscribe to our newsletter for the latest regulations and service updates.
              </p>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <div className="form-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                  />
                  <button type="submit">Subscribe</button>
                </div>
                {subscribed && (
                  <p className="success-message">Thank you for subscribing!</p>
                )}
              </form>
              <div className="business-hours">
                <h4>Business Hours</h4>
                <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
                <p>Sat: 9:00 AM - 1:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} NN Queueing Services. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;