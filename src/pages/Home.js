import React from "react";
import Slider from "../Slider";
import AboutOmnitech from "../components/AboutOmnitech";
import ProductCategories from "../components/ProductCategories";
import "./Home.css"; // 👈 Add this for layout fix

const Home = () => {
  return (
    <div>
      <Slider />

      {/* Proper content container for layout */}
      <div className="home-container">
        <AboutOmnitech />
        <ProductCategories />
      </div>
    </div>
  );
};

export default Home;
