import { useState } from "react";
import "./Footer.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp, FaUtensils, FaGlassCheers, FaUserTie } from "react-icons/fa";

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
    <footer className="gcs-site-footer">
      <div className="gcs-footer-top">
        <div className="gcs-footer-container">
          <div className="gcs-footer-grid">
            <div className="gcs-footer-about">
              <h5 className="gcs-logo-text">The Service Syndicate</h5>
              <div className="gcs-divider"></div>
              <p className="gcs-footer-tagline">
                Premium catering services providing expert chefs, professional waitstaff, 
                and skilled bartenders for your special events. We bring culinary excellence 
                and impeccable service to every occasion.
              </p>
              <div className="gcs-footer-contact-info">
                <div className="gcs-contact-item">
                  <FaPhone className="gcs-contact-icon" />
                  <span>+27 123 456 789</span>
                </div>
                <div className="gcs-contact-item">
                  <FaEnvelope className="gcs-contact-icon" />
                  <span>info@theservicesyndicate.co.za</span>
                </div>
                <div className="gcs-contact-item">
                  <FaMapMarkerAlt className="gcs-contact-icon" />
                  <span>123 Test Street, Food District</span>
                </div>
              </div>
            </div>

            <div className="gcs-footer-links">
              <h3>Quick Links</h3>
              <div className="gcs-divider"></div>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="gcs-footer-services">
              <h3>Our Services</h3>
              <div className="gcs-divider"></div>
              <ul>
                <li>
                  <FaUtensils className="gcs-service-icon" />
                  <a href="/services">Professional Chefs</a>
                </li>
                <li>
                  <FaUserTie className="gcs-service-icon" />
                  <a href="/services">Trained Waitstaff</a>
                </li>
                <li>
                  <FaGlassCheers className="gcs-service-icon" />
                  <a href="/services">Skilled Bartenders</a>
                </li>
                <li>
                  <FaUtensils className="gcs-service-icon" />
                  <a href="/services">Catering Equipment</a>
                </li>
                <li>
                  <FaUtensils className="gcs-service-icon" />
                  <a href="/services">Custom Menu Planning</a>
                </li>
              </ul>
            </div>

            <div className="gcs-footer-newsletter">
              <h3>Get Updates</h3>
              <div className="gcs-divider"></div>
              <p>
                Subscribe for seasonal menus, special offers, and catering tips.
              </p>
              <form onSubmit={handleSubscribe} className="gcs-newsletter-form">
                <div className="gcs-form-group">
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
                  <p className="gcs-success-message">Thank you for subscribing!</p>
                )}
              </form>
              <div className="gcs-business-hours">
                <h4>Business Hours</h4>
                <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                <p>Sat-Sun: 9:00 AM - 4:00 PM</p>
                <p>24/7 for emergencies</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gcs-footer-bottom">
        <div className="gcs-footer-container">
          <div className="gcs-footer-bottom-content">
            <p className="gcs-copyright">
              © {currentYear} theservicesyndicate . All rights reserved.
            </p>
            <div className="gcs-footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      <div className="gcs-footer-crafted">
        <div className="gcs-footer-container">
          <p className="gcs-crafted-text">
            Crafted by <a href="https://wa.me/27677366141" target="_blank" rel="noopener noreferrer">Chimbo</a>
          </p>
        </div>
      </div>

      <button
        className="gcs-back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;