import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Import your CSS file

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation('fade-out');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setAnimation('fade-in');
      }, 500); //
    }, 3000); // 

    return () => clearInterval(interval);
  }, [currentIndex, images]);

  return (
    <div className="image-slider">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={`slide-image ${animation}`}
      />
    </div>
  );
};

export default ImageSlider;
