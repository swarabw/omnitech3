// src/components/Footer.js
import React, { useEffect } from 'react';
import './Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const backToTopBtn = document.getElementById("backToTop");
    const handleScroll = () => {
      backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleChat = () => {
    const popup = document.getElementById("chatPopup");
    if (popup) {
      popup.style.display = popup.style.display === "flex" ? "none" : "flex";
      popup.style.flexDirection = "column";
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* SVG Divider */}
      <div style={{ position: "relative", height: "100px", overflow: "hidden" }}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none"
             style={{ position: "absolute", bottom: 0, width: "100%", height: "100px" }}>
          <path d="M-1.41,59.41 C131.62,177.52 349.91,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
                style={{ stroke: "none", fill: "#0a1d3c" }} />
        </svg>
      </div>

      <footer className="footer" data-aos="fade-up">
        <div className="footer-container">
          <div className="footer-column" data-aos="fade-up" data-aos-delay="100">
            <h3>Contact Information</h3>
            <p>OmniTech HQ</p>
            <p>123 Innovation Road, Pune, MH 411041</p>
            <p>📞 +91 7385249974</p>
            <p>✉ support@omnitech.com</p>
          </div>

          <div className="footer-column" data-aos="fade-up" data-aos-delay="200">
            <h3>Helpful Links</h3>
            <ul>
              <li><a href="products.html" target="_blank" rel="noreferrer">Products</a></li>
              <li><a href="training.html" target="_blank" rel="noreferrer">Training</a></li>
              <li><a href="careers.html" target="_blank" rel="noreferrer">Careers</a></li>
              <li><a href="blog.html" target="_blank" rel="noreferrer">Blog</a></li>
              <li><a href="support.html" target="_blank" rel="noreferrer">Support</a></li>
            </ul>
          </div>

          <div className="footer-column" data-aos="fade-up" data-aos-delay="300">
            <h3>Legal</h3>
            <ul>
              <li><a href="terms.html" target="_blank" rel="noreferrer">Terms of Service</a></li>
              <li><a href="privacy.html" target="_blank" rel="noreferrer">Privacy Policy</a></li>
              <li><a href="returns.html" target="_blank" rel="noreferrer">Return Policy</a></li>
              <li><a href="warranty.html" target="_blank" rel="noreferrer">Warranty</a></li>
              <li><a href="cookies.html" target="_blank" rel="noreferrer">Cookie Notice</a></li>
            </ul>
          </div>

          <div className="footer-column" data-aos="fade-up" data-aos-delay="400">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com/omnitech" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
  <i className="fab fa-facebook-f"></i>
</a>
<a href="https://twitter.com/omnitech" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
  <i className="fab fa-x-twitter"></i>
</a>
<a href="https://instagram.com/omnitech" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
  <i className="fab fa-instagram"></i>
</a>
<a href="https://youtube.com/omnitech" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
  <i className="fab fa-youtube"></i>
</a>
<a href="https://linkedin.com/company/omnitech" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
  <i className="fab fa-linkedin-in"></i>
</a>

            </div>
            <a href="calendar-contest.html" className="chat-now-btn" target="_blank" rel="noreferrer">Learn More</a>
            <div className="subscribe-form">
              <h4>Subscribe to Our Newsletter</h4>
              <form action="https://docs.google.com/forms/d/e/1FAIpQLSfq_UcND-test-url/viewform" target="_blank" rel="noreferrer">
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom" data-aos="fade-up" data-aos-delay="500">
          <p>&copy; 2025 OmniTech. All rights reserved. | Pune, India | +91 98765 43210</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <div className="whatsapp-launcher">
        <div className="chat-popup" id="chatPopup">
          <div className="chat-header">
            <span>💬 Chat with OmniTech</span>
            <span className="close-chat" onClick={toggleChat}>&times;</span>
          </div>
          <div className="chat-body">
            <p>Hi there! 👋<br />Need help? Tap below to chat with us on WhatsApp.</p>
            <a href="https://wa.me/917385249974?text=Hi%20OmniTech%20Team!%20I%20have%20a%20question." target="_blank" rel="noreferrer" className="chat-now-btn">Start Chat</a>
          </div>
        </div>
        <div className="chat-icon" onClick={toggleChat}>
          <i className="fab fa-whatsapp"></i>
        </div>
      </div>

      {/* Back to Top */}
      <button id="backToTop" title="Back to top" onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
};

export default Footer;
