import React from "react";
import "./ImageGenerator.css";
import default_image from "../Assets/default_image.svg";

const ImageGenerator = () => {
  return (
    <div className="main-container">
      {/* heading */}
      <div className="header">
        AI Image <span>Generator</span>
      </div>

      {/* image container and loading */}
      <div className="image-loading">
        <div className="image">
          <img src={default_image} alt="default image" />
        </div>
      </div>

      {/* search button */}
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Describe what you want to see?"
        />
        <div className="generate-btn">Generate</div>
      </div>
    </div>
  );
};

export default ImageGenerator;
