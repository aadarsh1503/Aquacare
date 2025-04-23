import React, { useEffect, useRef, useState } from 'react';
import i1 from "./i1.jpg";
import i2 from "./i2.jpg";
import i3 from "./i3.jpg";
import i4 from "./i4.webp";
import ig from "./ig.jpg"
import is from "./is.jpeg"
import ie from "./ie.jpg"
import ik from "./ik.jpg"
import iss from "./iss.jpg"
import il from "./il.jpg"

// Import more images as needed
import "./h.css"
import About from '../About/About';
import OurServices from '../OurServices/OurServices';
import StatsSection from '../StatsSection/StatsSection';
import PortfolioSection from '../portfolioItems/portfolioItems';
import PlumbingSection from '../plumbing/plumbing';

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const sectionRef = useRef(null);
    
    // Array of background images
    const backgroundImages = [
      i3,
        i1,
 
       i4,
       ig,
       ie,
       is,
       ik,
       iss,
       il
        // Add more images here
        // i3, i4, etc.
    ];

    useEffect(() => {
        // Set up the observer for the zoom effect
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Set up the image rotation interval
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % backgroundImages.length
            );
        }, 5000); // Change image every 5 seconds

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
            clearInterval(interval);
        };
    }, [backgroundImages.length]);

    return (
        <div>
            <div
                ref={sectionRef}
                className={`relative bg-fill bg-center h-[700px] lg:h-screen transition-all duration-1000 ease-in-out ${
                    isVisible ? '' : ''
                }`}
                style={{
                  backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
                  backgroundSize: 'cover', /* or 'contain' */
                  transition: 'background-image 1s ease-in-out',
              }}
            >
                {/* For mobile screens */}
                <div className="lg:hidden absolute inset-0 bg-fill" style={{ backgroundImage: `url(${i2})` }}></div>
                
                {/* Main container with content at bottom */}
                <div className="absolute inset-0 flex flex-col justify-end pb-12 lg:pb-24 px-4 md:px-8 lg:px-12">
                    {/* Content Container */}
                    <div className="flex flex-col lg:flex-row justify-between w-full">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-white">
                                Introducing <br />Our Exclusive<br /> Range of Services
                            </h1>
                        </div>
                
                        {/* Right Content */}
                        <div className="w-full lg:w-1/2 flex flex-col space-y-4 lg:space-y-6 lg:items-end">
                        
                            <p className="text-gray-100 lg:hidden text-base md:text-lg">
                                AQUA CARE, A PROFESSIONAL PLUMBING AND QUALITY SERVICE WITH REASONABLE PRICE
                            </p>
                            <div className=" space-x-4 ">
                            <p className="text-gray-100 text-base md:text-lg mb-6 ml-4 font-semibold relative hidden lg:block">
                                AQUA CARE – PROFESSIONAL <br />& QUALITY SERVICE AT A<br /> REASONABLE PRICE
                            </p>
                                <a href='/recent-Projects'>
                                    <button className="px-4 md:px-6 py-2 md:py-3 text-sm bg-dyellow text-black font-semibold hover:bg-white transition-colors">
                                        View Our Recent Projects
                                    </button>
                                </a>
                                <a href='/our-Projects'>
                                    <button className="px-4 md:px-6 py-2 md:py-3 border text-sm border-white text-white font-semibold hover:bg-gray-100 hover:text-black transition-colors">
                                        Our Projects
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section data-section="about">
                <About />
            </section>
            <OurServices />
            <StatsSection />
            <PlumbingSection />
            <section data-section="portfolio">
                <PortfolioSection />
            </section>
        </div>
    );
};
  
export default HeroSection;