import React from "react";

const UniversitySlider = () => {
  return (
    <div className="relative overflow-hidden group  mx-auto  bg-white mt-8">
      <div className="absolute w-1/5 h-full bg-white z-10" />
      <div className="absolute w-1/5 h-full bg-white z-10 right-0 " />
      <div className="flex transition-transform duration-1000 ease-linear group-hover:translate-x-52 w-full justify-center">
        <div className="flex space-x-4 ">
          <img
            src="/Images/University1.jpg"
            alt="Stanford University"
            className="w-32 h-auto"
          />
          <img
            src="/Images/University2.jpg"
            alt="Harvard University"
            className="w-32 h-auto"
          />
          <img
            src="/Images/University17.jpg"
            alt="University of Notre Dame"
            className="w-32 h-auto"
          />
          <img
            src="/Images/University4.jpg"
            alt="University of Texas at Austin"
            className="w-32 h-auto"
          />
          <img
            src="/Images/University5.jpg"
            alt="Yale University"
            className="w-32 h-auto"
          />
          <img
            src="/Images/University6.jpg"
            alt="Stanford University"
            className="w-32 h-auto"
          />
          <img
            src="/Images/University4.jpg"
            alt="University of Texas at Austin"
            className="w-32 h-auto"
          />
          <img
            src="/Images/University5.jpg"
            alt="Yale University"
            className="w-32 h-auto"
          />
          <img
            src="/Images/University6.jpg"
            alt="Stanford University"
            className="w-32 h-auto"
          />
        </div>
      </div>
      <div className="flex transition-transform duration-1000 ease-linear group-hover:-translate-x-52 mt-4 w-full justify-center">
        <div className="flex space-x-4">
          <img
            src="/Images/University7.jpg"
            alt="University of Glasgow"
            className="w-32 h-auto"
          />
          <img
            src="/Images/University8.jpg"
            alt="University of Waikato"
            className="w-32 h-auto"
          />
          <img
            src="/Images/University18.jpg"
            alt="Singapore University of Technology and Design"
            className="w-32 h-auto"
          />
          <img
            src="/Images/University15.jpg"
            alt="University of Adelaide"
            className="w-32 h-auto"
          />
          <img
            src="/Images/University20.jpg"
            alt="Al Ghurair University"
            className="w-32 h-auto"
          />
          <img
            src="/Images/University19.jpg"
            alt="Al Ghurair University"
            className="w-32 h-auto"
          />
          <img
            src="/Images/University15.jpg"
            alt="University of Adelaide"
            className="w-32 h-auto"
          />
          <img
            src="/Images/University20.jpg"
            alt="Al Ghurair University"
            className="w-32 h-auto"
          />
          <img
            src="/Images/University19.jpg"
            alt="Al Ghurair University"
            className="w-32 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default UniversitySlider;
