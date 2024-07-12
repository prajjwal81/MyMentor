"use client";
import { useState, useEffect } from "react";
import Form from "./Form";

const images = [
  "/Images/Form1.png",
  "/Images/Form2.png",
  "/Images/Form3.png",
  "/Images/Form4.png",
];

const FormCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(true);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowCarousel(false);
      } else {
        setShowCarousel(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-[85%] h-[80%] mx-auto mt-9 justify-center items-center">
      {!showCarousel ? (
        <Form />
      ) : (
        <div className="flex justify-center items-center relative h-full">
          <button
            onClick={prevSlide}
            className="absolute left-[3.5%] text-4xl bg-transparent p-1 rounded-full hover:bg-gray-400"
          >
            &#10094;
          </button>
          <div className="w-[110%] overflow-hidden h-full">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className="w-full h-full object-contain"
            />
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-[3.5%] text-4xl bg-tranparent p-1 rounded-full"
          >
            &#10095;
          </button>
        </div>
      )}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 w-2 bg-gray-500 rounded-full ${
              currentIndex === idx ? "bg-blue-500" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FormCarousel;
