import React from "react";
import i1 from "./i1.jpeg"

const ConstructionSection = () => {
  return (
    <div className="bg-dblack py-10">
      <div className="max-w-6xl mx-auto flex flex-wrap lg:flex-nowrap items-center gap-8">
        {/* Left Side Image */}
        <div className="flex-1">
          <img
            src={i1}
            alt="Construction and maintenance tools"
            className="w-[400px] lg:p-0 p-4 h-[300px] rounded-md shadow-md"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-[700px] text-center">
          <h2 className="text-2xl lg:text-3xl p-1 items-center justify-center font-bold text-white mb-1">
            NEED HELP WITH CONSTRUCTION OR MAINTENANCE WORK?
          </h2>
          <div className="w-32 h-1 bg-dyellow mb-10 items-center text-center justify-center relative left-32 lg:left-[280px] lg:mx-0"></div>
          <p className="text-white mb-4">
            Whether it's building, repairs, or regular upkeep — we're here for you!
          </p>
          <a href="/contact">
            <button className="bg-dyellow text-sm text-black px-6 py-2 rounded-md font-semibold hover:bg-white transition">
              REQUEST A SERVICE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConstructionSection;
