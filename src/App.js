import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from 'aos';            // ✅ Only keep this ONCE
import 'aos/dist/aos.css';        // ✅ Keep AOS styles

import SearchResults from "./pages/SearchResults"; // ✅ Add this import

// Components
import Header from "./header";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Contact from "./pages/Contact";

// Styles
import "./App.css";
import "./Header.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchResults />} /> {/* ✅ Add this line */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
