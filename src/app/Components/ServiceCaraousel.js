"use client";

import { useState } from "react";

const slides = [
  {
    image: "/Images/service1.png",
    heading: "Career Counselling",
    description:
      "With more and more diverse career options and professional opportunities emerging, career counselling helps individuals make the right choice about their career path.",
    buttonText: "know more",
  },
  {
    image: "/Images/service2.png",
    heading: "Student Guidance",
    description:
      "We begin by assessing your strengths and weaknesses, and then create a personalized plan to help you achieve your academic goals.",
    buttonText: "learn more",
  },
  {
    image: "/Images/service3.png",
    heading: "Skill Development",
    description:
      "A psychological approach to improving your skills and knowledge to better prepare you for the challenges of study and work.",
    buttonText: "find out more",
  },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getAdjacentIndex = (index, offset) => {
    return (index + offset + slides.length) % slides.length;
  };

  return (
    <div className="justify-center items-center h-[70vh] bg-white w-full">
      <div className="w-[85%] ml-[7.5%] bg-[#EED9DB] h-[22vw] rounded-md py-11 mt-5">
        <div className="text-4xl font-bold text-center ">Services</div>
        <div className="mt-4 text-lg text-center">
          Everything you need to make it into your dream university
        </div>
        <div className="relative w-full max-w-4xl mx-auto mt-20">
          <div className="relative h-64 flex justify-center items-center overflow-hidden">
            {slides.map((slide, index) => {
              const isCurrent = index === currentIndex;
              const isPrev = index === getAdjacentIndex(currentIndex, -1);
              const isNext = index === getAdjacentIndex(currentIndex, 1);

              return (
                <div
                  key={index}
                  className={`absolute w-[80%] h-full transition-transform duration-500 ease-in-out ${
                    isCurrent
                      ? "transform translate-x-0 z-10"
                      : isPrev
                      ? "transform -translate-x-full z-0 h-[80%] w-[80%] opacity-80"
                      : isNext
                      ? "transform translate-x-full z-0 h-[80%] w-[80%] opacity-80"
                      : "hidden"
                  }`}
                >
                  <img
                    src={slide.image}
                    className="w-full h-full object-cover rounded-md"
                    alt={`Slide ${index}`}
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-start pr-72 pl-11 bg-black bg-opacity-50 text-white rounded-md">
                    <h2 className="text-2xl font-bold mb-4">{slide.heading}</h2>
                    <p className="mb-4">{slide.description}</p>
                    <button className="px-4 py-2 bg-blue-500 rounded">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={previousImage}
            className="absolute left-[5%] top-1/2 transform -translate-y-1/2 px-4 py-2 bg-grey text-4xl text-white bg-opacity-75 rounded-r-full pointer-events-auto z-20"
          >
            &#10094;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-[5%] top-1/2 transform -translate-y-1/2 px-4 py-2 bg-grey text-4xl text-white bg-opacity-75 rounded-l-full pointer-events-auto z-20"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}
