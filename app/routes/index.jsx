import { Link } from "@remix-run/react";
import React from "react";

function Home() {
  return (
    <div className="home-container">
      <div className="home-container-title">
        <h1 className="hero-title">
          Stay Informed with Latest Tech News with <span>LCO Shorts</span>
        </h1>
        <p className="hero-description">
          We understand you don’t have time to go through long news articles
          everyday. So we cut the clutter and deliver them, in 60-word shorts.
          Short news for the mobile generation.
        </p>
        <Link to="/posts">
          <button className="hero-btn">Read News</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
