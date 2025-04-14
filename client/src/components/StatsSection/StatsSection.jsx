import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const stats = [
    { label: "Projects", endValue: 98 },
    { label: "People", endValue: 65 },
    { label: "Years", endValue: 10 },
    { label: "Offices", endValue: 15 },
  ];

  return (
    <>
      {/* Desktop view */}
      <div ref={ref} className="bg-dblack text-tblack z-0 py-16 ml- lg:-ml-5 flex justify-center space-x-32 lg:flex hidden">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center relative mb-6 lg:mb-0"
          >
            {/* Separate div for border */}
            {index !== stats.length - 1 && (
              <div className="absolute top-24 left-0 z-0 lg:left-[232px] h-12 border-r-2 border-tblack" />
            )}
            <div className="relative z-0"> {/* Content wrapper */}
              <h2 className="text-44px font-bold">
                {inView ? (
                  <CountUp start={0} end={stat.endValue} duration={3} />
                ) : (
                  0
                )}
              </h2>
              <p className="text-lg text-white relative bottom-[120px] font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile view */}
      <div className="lg:hidden bg-dblack text-tblack z-0 py-16 flex flex-col items-center space-y-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center relative mb-6"
          >
            <div className="relative z-0"> {/* Content wrapper */}
              <h2 className="text-44px font-bold">
                {/* Render number directly for mobile */}
                {stat.endValue}
              </h2>
              <p className="text-lg text-white font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StatsSection;
