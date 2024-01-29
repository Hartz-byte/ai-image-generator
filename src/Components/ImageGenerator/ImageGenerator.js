import React, { useRef, useState } from "react";
import "./ImageGenerator.css";
import defaultImage from "../Assets/default_image.svg";

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState("/");
  let inputRef = useRef(null);

  const imgGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }

    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          promt: `${inputRef.current.value}`,
          n: 1,
          size: "400x400",
        }),
      }
    );

    let data = await response.json();
    console.log(data);

    let dataArray = data.data;
    setImageUrl(dataArray[0].url);
  };

  return (
    <div className="main-container">
      {/* heading */}
      <div className="header">
        AI Image <span>Generator</span>
      </div>

      {/* image container and loading */}
      <div className="image-loading">
        <div className="image">
          <img
            src={imageUrl === "/" ? defaultImage : imageUrl}
            alt="default image"
          />
        </div>
      </div>

      {/* input and search button */}
      <div className="search-box">
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder="Describe what you want to see?"
        />
        <div
          className="generate-btn"
          onClick={() => {
            imgGenerator();
          }}
        >
          Generate
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
