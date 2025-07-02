// Slider.js
import React, { useState, useEffect } from "react";
import "./Slider.css";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "https://www.etasis.com.tr/en/wp-content/uploads/2023/08/1-1024x576-1.jpg",
    title: "Precision Machines",
    text: "High accuracy for advanced manufacturing.",
    button: "Learn More",
    link: "/Products"
  },
  {
    image: "https://interlakemecalux.cdnwm.com/blog/img/robotic-arms-functions.1.1.jpg",
    title: "Automation Systems",
    text: "Streamlining processes for efficiency.",
    button: "Discover",
    link: "/products"
  },
  {
    image: "https://cdn.prod.website-files.com/6602a4b67bdde9cb5f763066/67ac650a7de69f504720bcf3_shutterstock_team-3-1120x630.jpeg",
    title: "Smart Factories",
    text: "Transforming production lines into intelligent systems.",
    button: "Explore",
    link: "/products"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661877153361-ef5e3b108237?q=80&w=1170&auto=format&fit=crop",
    title: "Eco-Friendly Solutions",
    text: "Building sustainable technologies for the future.",
    button: "Get Started",
    link: "/products"
  }
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div className="hero">
      <button className="arrow left" onClick={prevSlide} aria-label="Previous Slide">
        &#10094;
      </button>
      <button className="arrow right" onClick={nextSlide} aria-label="Next Slide">
        &#10095;
      </button>

      <div className="slides" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide, i) => (
          <div className="slide" key={i}>
            <img src={slide.image} alt={slide.title} />
            <div className="content-box">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <Link to={slide.link} className="slide-btn">
                {slide.button}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="indicator">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>

      <div className="controls" style={{ textAlign: "center", marginTop: "10px" }}>
        {isPaused ? (
          <button onClick={() => setIsPaused(false)}>▶ Play</button>
        ) : (
          <button onClick={() => setIsPaused(true)}>⏸ Pause</button>
        )}
      </div>
    </div>
  );
};

export default Slider;
