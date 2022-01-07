import React from "react";
import "./loader.css";

function SpaceLoader() {
  return (
    <div className="portfolio-loader">
      <div className="sun"></div>
      <div className="orbit orbit1">
        <div className="planetX planet1"></div>
      </div>
      <div className="orbit orbit2">
        <div className="planetX planet2"></div>
      </div>
      <div className="orbit orbit3">
        <div className="planetX planet3"></div>
      </div>
    </div>
  );
}

export default SpaceLoader;
