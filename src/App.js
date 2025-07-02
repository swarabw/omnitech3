import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Header from "./header";
import ProductsPage from "./components/ProductsPage"; // keeping this for default page
import SearchResults from "./pages/SearchResults";

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
          <Route path="/search" element={<SearchResults />} />
          <Route path="/machines" element={<ProductsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
