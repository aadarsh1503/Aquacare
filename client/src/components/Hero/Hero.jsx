import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
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
import "./h.css"
import About from '../About/About';
import OurServices from '../OurServices/OurServices';
import StatsSection from '../StatsSection/StatsSection';
import PortfolioSection from '../portfolioItems/portfolioItems';
import PlumbingSection from '../plumbing/plumbing';

const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
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
    ];

    useEffect(() => {
        // Set up the image rotation interval
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % backgroundImages.length
            );
        }, 5000); // Change image every 5 seconds

        return () => {
            clearInterval(interval);
        };
    }, [backgroundImages.length]);

    return (
        <div>
            <div className="relative h-[700px] lg:h-screen overflow-hidden">
                {/* Background images with motion */}
                {backgroundImages.map((image, index) => (
                    <motion.div
                        key={index}
                        className={`absolute inset-0 bg-center bg-cover ${index === currentImageIndex ? 'z-0' : 'z-0'}`}
                        style={{ backgroundImage: `url(${image})` }}
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: index === currentImageIndex ? 1 : 0,
                            scale: index === currentImageIndex ? 1 : 1.1
                        }}
                        transition={{ 
                            duration: 1.5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
                
                {/* For mobile screens */}
                <div className="lg:hidden absolute inset-0 bg-fill" style={{ backgroundImage: `url(${i2})` }}></div>
                
                {/* Main container with content at bottom */}
                <motion.div 
                    className="absolute inset-0 flex flex-col justify-end pb-12 lg:pb-24 px-4 md:px-8 lg:px-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    {/* Content Container */}
                    <div className="flex flex-col lg:flex-row justify-between w-full">
                        {/* Left Content */}
                        <motion.div 
                            className="w-full lg:w-1/2 mb-8 lg:mb-0"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-white">
                                Introducing <br />Our Exclusive<br /> Range of Services
                            </h1>
                        </motion.div>
                
                        {/* Right Content */}
                        <motion.div 
                            className="w-full lg:w-1/2 flex flex-col space-y-4 lg:space-y-6 lg:items-end"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-gray-100 lg:hidden text-base md:text-lg">
                                AQUA CARE, A PROFESSIONAL PLUMBING AND QUALITY SERVICE WITH REASONABLE PRICE
                            </p>
                            <div className="space-x-4">
                                <p className="text-gray-100 text-base md:text-lg mb-6 ml-4 font-semibold relative hidden lg:block">
                                    AQUA CARE – PROFESSIONAL <br />& QUALITY SERVICE AT A<br /> REASONABLE PRICE
                                </p>
                                <motion.a 
                                    href='/recent-Projects'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <button className="px-4 md:px-6 py-2 md:py-3 text-sm bg-dyellow text-black font-semibold hover:bg-white transition-colors">
                                        View Our Recent Projects
                                    </button>
                                </motion.a>
                                <motion.a 
                                    href='/our-Projects'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <button className="px-4 md:px-6 py-2 md:py-3 border text-sm border-white text-white font-semibold hover:bg-gray-100 hover:text-black transition-colors">
                                        Our Projects
                                    </button>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
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