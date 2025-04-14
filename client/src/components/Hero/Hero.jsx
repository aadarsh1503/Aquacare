import React, { useEffect, useRef, useState } from 'react';
import i1 from "./i1.jpg";
import i2 from "./i2.jpg";
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
        className={`relative bg-fill bg-center h-[700px] lg:h-full lg:min-h-screen transition-transform duration-500 ease-in-out ${
          isVisible ? 'zoom-in' : ''
        }`}
        style={{
          backgroundImage: `url(${i1})`, // Default background image (large screens)
        }}
      >
        {/* For mobile screens */}
        <div className="lg:hidden absolute inset-0 bg-cover" style={{ backgroundImage: `url(${i2})` }}></div>
        
        <div className="relative mx-auto h-full flex flex-col justify-between p-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-4 text-white">
            <h1 className="text-3xl lg:text-6xl mt-32 lg:mt-72 font-bold leading-tight">
              Introducing<br /> our exclusive<br /> plumbing range
            </h1>
          </div>
    
          {/* Right Content */}
          <div className="flex flex-col font-poppins mt-0 lg:-mt-36 right-0 lg:right-1 relative space-y-6 items-end">
            <p className="text-gray-100 hidden lg:block relative left-0 lg:-left-8  text-lg ">
            AQUA CARE, A PROFESSIONAL <br />  PLUMBING AND QUALITY SERVICE <br /> WITH REASONABLE PRICE
            </p>
            <p className="text-gray-100 lg:hidden relative left-0 lg:left-3 text-lg bottom-32 text-left">
            AQUA CARE, A PROFESSIONAL PLUMBING AND QUALITY SERVICE WITH REASONABLE PRICE
            </p>
            <div className="flex relative lg:bottom-0 bottom-20 space-x-4">
              <a href='/recent-Projects'>
              <button className="lg:px-6 px-3 py-1 lg:py-3 text-sm bg-dyellow text-black font-semibold hover:bg-white">
                View Our Recent Projects
              </button>
              </a>
              <a href='/our-Projects'>
              <button className="lg:px-6 px-3 py-1 lg:py-3 border text-sm border-white text-white font-semibold hover:bg-gray-100 hover:text-black">
                Our Projects
              </button>
              </a>
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
