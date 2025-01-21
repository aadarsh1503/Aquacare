import React, { useEffect, useRef, useState } from 'react';
import i1 from "./i1.jpg";
import "./h.css"
import About from '../About/About';
import OurServices from '../OurServices/OurServices';
import StatsSection from '../StatsSection/StatsSection';
import PortfolioSection from '../portfolioItems/portfolioItems';
import PlumbingSection from '../plumbing/plumbing';
const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setIsVisible(true);  // Trigger zoom effect
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the section is in view
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);
  
    return (
      <div>
      <div
        ref={sectionRef}
        className={`relative bg-cover bg-center min-h-screen  transition-transform duration-500 ease-in-out ${
          isVisible ? 'zoom-in' : ''
        }`}
        style={{
          backgroundImage: `url(${i1})`,
        }}
      >

        <div className="relative mx-auto h-full flex flex-col justify-between p-12 ">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-4 text-white ">
            <h1 className="text-4xl lg:text-6xl mt-0 lg:mt-72 font-bold leading-tight">
              Introducing<br /> our exclusive<br /> plumbing range
            </h1>
          </div>
  
          {/* Right Content */}
          <div className="flex flex-col font-poppins  mt-0 lg:-mt-36 right-10 relative space-y-6 items-end">
            <p className="text-gray-100 relative left-3 text-lg text-left">
              Adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, quis nostrud.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 text-sm bg-dyellow text-black font-semibold hover:bg-white">
                View Our Fixtures
              </button>
              <button className="px-6 py-3 border text-sm border-white text-white font-semibold hover:bg-gray-100 hover:text-black">
                Plumbing Parts
              </button>
            </div>
          </div>
        </div>
        </div>
        <About />
        <OurServices />
        <StatsSection />
        <PlumbingSection />
        <PortfolioSection />
      </div>
    );
  };
  
  export default HeroSection;
