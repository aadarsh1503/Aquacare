import React from "react";
import p from "./p.jpg"
const PlumbingSection = () => {
  return (
    <div className="bg-dblack py-10">
      <div className="max-w-6xl mx-auto flex flex-wrap lg:flex-nowrap items-center gap-8">
        {/* Left Side Image */}
        <div className="flex-1">
          <img
            src={p}
            alt="Plumbing tools"
            className="w-[400px] lg:p-0  p-4 h-[300px] rounded-md shadow-md"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-[700px] text-center ">
          <h2 className="text-2xl lg:text-3xl p-1 items-center justify-center font-bold text-white mb-1 ">
            ARE YOU TIRED FROM PLUMBING REPAIR OR WATER LEAKAGE
          </h2>
          <div className="w-32 h-1 bg-dyellow mb-10 items-center text-center justify-center relative left-32 lg:left-[280px] lg:mx-0 "></div>
          <p className="text-white mb-4">
            Need a plumbing service? Contact us Today
          </p>
          <a href="/contact">
          <button  className="bg-dyellow text-sm text-black px-6 py-2 rounded-md font-semibold hover:bg-white transition">
            MAKE AN APPOINTMENT
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlumbingSection;
