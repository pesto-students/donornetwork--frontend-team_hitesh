import React, { useState } from "react";
import "./ImageSlider.css";

const SliderDots = ({ images, activeIndex, onDotClick }) => {
  return (
    <div className="slider-dots">
      {images.map((image, index) => (
        <span
          key={index}
          className={`slider-dot ${activeIndex === index ? "active" : ""}`}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
};

const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider-container">
      <button className="slider-btn prev" onClick={handlePrevClick}>
        &#10094;
      </button>
      <img className="slider-image" src={images[activeIndex]} alt="slider" />
      <button className="slider-btn next" onClick={handleNextClick}>
        &#10095;
      </button>
      <SliderDots
        images={images}
        activeIndex={activeIndex}
        onDotClick={handleDotClick}
      />
    </div>
  );
};

export default ImageSlider;
