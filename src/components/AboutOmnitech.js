import React from "react";
import { Link } from "react-router-dom";
import "./AboutOmnitech.css";

const AboutOmnitech = () => {
  return (
    <div className="content-section" role="region" aria-label="About Omnitech Section">
      <div className="content-left" data-aos="fade-right">
        <h2>About Omnitech</h2>
        <p>
          Omnitech is a leading supplier of metallurgy products designed to meet the <br />needs of modern industries.
          
          Our expert solutions cater to research, production, <br />and quality control, ensuring reliability
          
          and performance.
        </p>
        <ul>
          <li>Improves specimen preparation efficiency</li>
          <li>Frees up operator time</li>
          <li>Increased polishing quality</li>
          <li>Ensures result consistency</li>
        </ul>

        <Link to="/about" className="learn-btn">
          Be Inspired by Omnitech →
        </Link>
      </div>

      {/* Background image styled in CSS */}
      <div className="content-right" data-aos="fade-left" aria-hidden="true"></div>
    </div>
  );
};

export default AboutOmnitech;
