"use client";
import Head from "next/head";
import React, { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false); // State for About Us dropdown

  return (
    <div>
      <Head>
        <title>My Mentor</title>
        <meta
          name="description"
          content="My Mentor - Top Global University Admissions"
        />
      </Head>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-5 px-4 sm:px-5 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="h-12 w-auto"
              src="/Images/logo.png"
              alt="My Mentor"
            />
          </div>
          <div className="flex items-center space-x-4 ">
            <div className="hidden md:flex space-x-4 relative">
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <a href="#" className="text-gray-500 mt-7">
                  Our Services
                </a>
                {isServicesOpen && (
                  <div className="absolute left-0 right-0 mt-4 w-[50vw] whitespace-nowrap bg-white border border-gray-200 shadow-lg rounded-md flex">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-red-900 w-full"
                    >
                      All Services
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-red-900 w-full"
                    >
                      Career Counseling
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-red-900 w-full"
                    >
                      Study Abroad
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-red-900 w-full"
                    >
                      Test Preparation
                    </a>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setIsAboutUsOpen(true)}
                onMouseLeave={() => setIsAboutUsOpen(false)}
              >
                <a href="#" className="text-gray-500">
                  About Us
                </a>
                {isAboutUsOpen && (
                  <div className="absolute left-0 right-0 mt-4 w-[50vw] whitespace-nowrap bg-white border border-gray-200 shadow-lg rounded-md flex">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-red-900 w-full"
                    >
                      Success Stories
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-red-900 w-full"
                    >
                      mentor process
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-red-900 w-full"
                    >
                      Ineraction
                    </a>
                  </div>
                )}
              </div>
              <a href="#" className="text-gray-500">
                Our Blog
              </a>
              <a href="#" className="text-gray-500">
                Careers
              </a>
              <a href="tel:+91929888502" className="text-gray-500">
                (+91) 91 2988 8502
              </a>
              <button className="bg-red-500 text-white px-4 py-1 rounded-3xl">
                Quick Enquiry
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {(isOpen || isAboutUsOpen) && ( // Show About Us dropdown in mobile view if isOpen or isAboutUsOpen is true
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block text-gray-700">
                Our Services
              </a>
              <div className="relative">
                <a
                  href="#"
                  className="block text-gray-700"
                  onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
                >
                  About Us
                  <svg
                    className="h-4 w-4 inline ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {isAboutUsOpen ? (
                      <path
                        fillRule="evenodd"
                        d="M13.707 10.293a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L10 12.586l2.293-2.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M10 8a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    )}
                  </svg>
                </a>
                {isAboutUsOpen && (
                  <div className="px-3 mt-1 space-y-1">
                    <a href="#" className="block text-gray-700">
                      Company Overview
                    </a>
                    <a href="#" className="block text-gray-700">
                      Mission and Vision
                    </a>
                    <a href="#" className="block text-gray-700">
                      Team
                    </a>
                  </div>
                )}
              </div>
              <a href="#" className="block text-gray-700">
                Our Blog
              </a>
              <a href="#" className="block text-gray-700">
                Careers
              </a>
              <a href="tel:+91929888502" className="block text-gray-700">
                (+91) 91 2988 8502
              </a>
              <button className="w-full bg-red-500 text-white px-4 py-2 rounded">
                Quick Enquiry
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Hero;
