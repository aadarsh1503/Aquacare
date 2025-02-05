import React, { useEffect } from 'react';
import i1 from "./i1.png";
import { useLocation } from "react-router-dom"; // Import for detecting the location

const About = () => {
  const location = useLocation(); // React Router's hook for the current location

  useEffect(() => {
    // If the hash exists in the URL, scroll to the respective section
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]); // Runs whenever the location changes

  return (
    <div id="about" className="bg-dblack">
      <div className="flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto justify-between px-6 py-10 md:px-16 md:py-20">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src={i1}
            alt="Email Design Preview"
            className="w-[750px] h-[500px] rounded-md"
          />
        </div>

        {/* Right Side Content */}
        <div className="md:w-1/2 text-center justify-start md:text-left">
          <h1 className="font-semibold text-2xl text-white text-center relative bottom-10 lg:mt-0 mt-10 lg:text-3xl mb-8">
            ABOUT US
          </h1>
          <p className="mt-4 max-w-3xl relative left-0 lg:left-10 bottom-10 text-white text-lg">
            Aqua care services are the leading maintenance and refurbishment
            contractors to the wet leisure industry. With a skilled team of highly
            trained engineers and access to the widest range of products available.
          </p>
          <p className="mt-4 max-w-3xl relative left-0 lg:left-10 lg:mb-0 mb- bottom-10 text-white text-lg">
            Our engineers are strategically situated around Bahrain to ensure a quick,
            reliable service nationwide to private, commercial and local authority
            clientele. Specialists in the supply, installation and maintenance of
            commercial and residential Plumbing work ,swimming pools, Saunas, Steam room,
            Jacuzzi, Fountains and also other water features
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
