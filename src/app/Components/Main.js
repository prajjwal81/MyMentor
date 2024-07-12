import React from "react";

const Main = () => {
  return (
    <div>
      <main className="max-w-9xl mx-auto py-10 px-4 sm:px-6 lg:px-40 bg-pink-50">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_55%] gap-2">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_60%] gap-2">
            <div>
              <div className="p-2 text-center rounded-lg h-64 overflow-hidden bg-gradient-to-r from-teal-600 to-blue-900">
                <p className="text-gray-500 text-sm">#AdmissionKiGuarantee</p>
                <img
                  className="w-full h-46 object-cover"
                  src="/Images/image1.png"
                  alt="Student 1"
                />
              </div>

              <div className="shadow-lg rounded-lg overflow-hidden mt-2 h-64 bg-gradient-to-r from-gray-800 to-blue-900">
                <div className="p-2 text-center">
                  <p className="text-gray-500 text-sm">#AdmissionKiGuarantee</p>
                  <img
                    className="w-full h-56 object-cover"
                    src="/Images/image4.png"
                    alt="Student 2"
                  />
                </div>
              </div>
            </div>

            <div className="md:mt-0 mt-4">
              <div className="p-2 text-center h-80 rounded-lg shadow-lg overflow-hidden bg-gradient-to-r from-red-600 to-red-800">
                <p className="text-gray-500 text-sm">#AdmissionKiGuarantee</p>
                <img
                  className="w-full h-46 object-cover"
                  src="/Images/image2.png"
                  alt="Student 5"
                />
              </div>

              <div className="grid lg:grid-cols-2 gap-2 h-48 mt-2">
                <div className="shadow-lg rounded-lg overflow-hidden p-2 text-center bg-gradient-to-r from-pink-600 to-purple-900">
                  <p className="text-gray-500 text-sm">#AdmissionKiGuarantee</p>
                  <img
                    className="w-full h-36 object-cover"
                    src="/Images/image4.png"
                    alt="Student 4"
                  />
                </div>

                <div className="p-2 text-center shadow-lg rounded-lg overflow-hidden bg-gradient-to-r from-indigo-300 to-purple-700">
                  <p className="text-gray-500 text-sm">#AdmissionKiGuarantee</p>
                  <img
                    className="w-full h-36 object-cover"
                    src="/Images/image5.png"
                    alt="Student 5"
                  />
                </div>
              </div>
            </div>
          </div> */}
          <img
            className="w-full h-46 object-cover"
            src="/Images/Group.png"
            alt="Student 1"
          />

          <div className="text-center lg:ml-10 md:mt-0 mt-4">
            <h2 className="text-4xl font-bold text-gray-900 text-left">
              Are you ready to be part of a Top Global University?
            </h2>
            <div className="lg:pr-20">
              <p className="mt-4 text-xs text-left text-gray-500">
                My Mentor has successfully got students accepted across top IVY
                League Colleges, Russell Group Institutions, Group 8
                Institutions, and other prestigious universities across the
                globe.
              </p>
              <p className="mt-4 text-xs text-left text-gray-500">
                If you have a study abroad dream, we can make it happen.
              </p>
              <p className="mt-4 text-sm text-left text-red-600 font-bold">
                Book a free consultation today!
              </p>
              <p className="mt-4 text-xs font-medium text-gray-900 text-left">
                Are you a student or guardian?
              </p>
            </div>

            <div className="mt-4 rounded-lg overflow-hidden p-1 mx-auto">
              <div className="mt-2 flex justify-center space-x-4">
                <label className="flex items-center">
                  <input
                    id="student"
                    name="role"
                    type="radio"
                    className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    Student
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    id="parent"
                    name="role"
                    type="radio"
                    className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    Parent
                  </span>
                </label>
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-2xl"
                  />
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-2xl"
                  />
                </div>

                <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
                  <input
                    type="text"
                    placeholder="Your Mobile No."
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-2xl"
                  />
                  <input
                    type="email"
                    placeholder="Your Email Id"
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-2xl"
                  />
                </div>
              </div>
              <button className="mt-6 w-full text-white py-2 rounded-2xl bg-gradient-to-r from-red-600 to-red-800">
                Submit
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
