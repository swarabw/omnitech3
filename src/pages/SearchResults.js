import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search).get("q");

  return (
    <div style={{ padding: "40px" }}>
      <h2>Search Results for: "{query}"</h2>
      <p>🚧 (This is where you’ll display filtered items based on the query.)</p>
    </div>
  );
};

export default SearchResults;
