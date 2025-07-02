import React, { useEffect } from "react";
import "../style/experience.css"; // ✅ Make sure this path is correct

const ExperienceSection = () => {
  useEffect(() => {
    const animateCounter = (counter) => {
      const target = +counter.getAttribute("data-target");
      const increment = target / 200;

      const updateCount = () => {
        const current = +counter.innerText.replace(/,/g, "");
        if (current < target) {
          counter.innerText = Math.ceil(current + increment).toLocaleString();
          setTimeout(updateCount, 15);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };
      updateCount();
    };

    const section = document.querySelector("#stats-section");
    const counters = document.querySelectorAll(".stat-number");
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            counters.forEach((counter) => animateCounter(counter));
            started = true;
            observer.unobserve(section);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(section);
  }, []);

  return (
    <section className="stats-section" id="stats-section">
      <div className="stats-container">
        <div className="stat-box">
          <div className="icon-circle">
            <i className="fas fa-thumbs-up"></i>
          </div>
          <div className="stat-number" data-target="55000">0</div>
          <div className="stat-label">Installed Products</div>
        </div>

        <div className="stat-box">
          <div className="icon-circle">
            <i className="fas fa-award"></i>
          </div>
          <div className="stat-number" data-target="45">0</div>
          <div className="stat-label">Years of Experience</div>
        </div>

        <div className="stat-box">
          <div className="icon-circle">
            <i className="fas fa-users"></i>
          </div>
          <div className="stat-number" data-target="150">0</div>
          <div className="stat-label">Employees</div>
        </div>

        <div className="stat-box">
          <div className="icon-circle">
            <i className="fas fa-globe"></i>
          </div>
          <div className="stat-number" data-target="40">0</div>
          <div className="stat-label">Worldwide Partners</div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
