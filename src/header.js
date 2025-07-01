import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header>
      <div className="top-bar">Hotline (+91) 44-2688 0737</div>

      <div className="main-header">
        <div className="logo-area">
          <img
            src="https://images-platform.99static.com/mx5CtlcMEwKY37aZGeZZFLaJn5w=/500x500/top/smart/99designs-contests-attachments/55/55214/attachment_55214390"
            alt="logo"
          />
          <div className="logo-text">
            <h1>Omnitech</h1>
            <p>for your Metallurgy</p>
          </div>
        </div>

        <div className="middle-container">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search Item..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button onClick={handleSearch}>🔍</button>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="dropdown">☰ ALL PRODUCTS</div>
        <div className="nav-links">
          <Link className="menu-item" to="/">HOME</Link>
          <Link className="menu-item" to="/about">ABOUT</Link>
          <Link className="menu-item" to="/products">PRODUCTS</Link>
          <Link className="menu-item" to="/services">SERVICES</Link>
          <Link className="menu-item" to="/training">TRAINING</Link>
          <Link className="menu-item" to="/contact">CONTACT US</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
