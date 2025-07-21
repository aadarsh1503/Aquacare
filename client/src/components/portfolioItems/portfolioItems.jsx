import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Your image imports
import i1 from "./i1.jpg";
import i2 from "./i2.jpg";
import i3 from "./i3.jpg";
import i4 from "../../assets/images/i4.webp";
import i5 from "./i5.jpeg";
import i6 from "./i6.jpg";
import i7 from "./i7.jpg";
import i8 from "./i8.jpg";
import i9 from "./i9.jpg";
import i11 from "./i11.jpeg";

// Import the new futuristic CSS
import "./p.css";

const portfolioItems = [
  { image: i8, title: 'CONSTRUCTION SERVICES' },
  { image: i1, title: 'FITTED BATHROOMS' },
  { image: i2, title: 'SHOWERS' },
  { image: i3, title: 'SINKS, BASINS' },
  { image: i4, title: 'DISHWASHER INSTALLATIONS' },
  { image: i5, title: 'WASHING MACHINE INSTALLATIONS' },
  { image: i6, title: 'WASTE DISPOSAL INSTALLATIONS' },
  { image: i7, title: 'ELECTRICAL INSTALLATIONS' },
  { image: i9, title: 'GYPSUM WORKS' },
  { image: i11, title: 'PAINTING SERVICES' },
];

const PortfolioSection = () => {
    // The user's original smooth scroll useEffect is kept as it is functional
    useEffect(() => {
        const handleScroll = () => {
            if (window.location.hash === '#portfolio') {
                const element = document.getElementById('portfolio');
                if (element) {
                    const navbarHeight = 120; // Adjust to match your navbar height
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }
        };
        handleScroll();
        window.addEventListener('hashchange', handleScroll);
        return () => window.removeEventListener('hashchange', handleScroll);
    }, []);

    // Animation variants for the grid container (staggering children)
    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    // Animation variants for each portfolio item
    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    return (
        <div id="portfolio" className="futuristic-portfolio-bg py-20 md:py-28">
            <div className="relative z-10">
                <motion.h1 
                    className='text-center text-white text-3xl md:text-4xl font-bold uppercase tracking-widest mb-16'
                    style={{ textShadow: "0 0 10px rgba(255, 204, 0, 0.5)" }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Portfolios
                </motion.h1>
                
                <motion.div 
                    className="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {portfolioItems.map((item, index) => (
                        <motion.div key={index} className="rounded-lg overflow-hidden portfolio-card group" variants={itemVariants}>
                            <div className="relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-96 object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75"
                                />
                                {/* Holographic Title Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                        <h3 className="text-xl  text-white font-bold uppercase pb-2 tracking-wider">{item.title}</h3>
                                        <div className="h-0.5 w-1/4 bg-dyellow mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default PortfolioSection;