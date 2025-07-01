// src/components/AboutOmnitechSection.js
import React from "react";
import "./AboutOmnitechSection.css";

const AboutOmnitechSection = () => {
  return (
    <div className="content-section">
      <div className="content-left" data-aos="fade-right">
        <h2>About Omnitech</h2>
        <p>
          Omnitech is a leading supplier of metallurgy products designed to meet the needs of modern industries.<br />
          Our expert solutions cater to research, production, and quality control,<br />
          ensuring reliability and performance.
        </p>
        <ul>
          <li>Improves specimen preparation efficiency</li>
          <li>Frees up operator time</li>
          <li>Increased polishing quality</li>
          <li>Ensures result consistency</li>
        </ul>
        <a href="#learn-more">Be Inspired by Omnitech →</a>
      </div>

      <div className="content-right" data-aos="fade-left"></div>
    </div>
  );
};

export default AboutOmnitechSection;
