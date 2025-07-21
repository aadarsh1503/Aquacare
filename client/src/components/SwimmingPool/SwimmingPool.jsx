import React from 'react';
import { motion } from 'framer-motion';

// Your image imports
import i1 from "./i1.jpg"; // Infinity pool
import i2 from "./i2.webp"; // Long Island pool
import i3 from "./i3.jpg"; // Aquatic pool
import i4 from "./i4.jpg"; // Glass wall pool
import i5 from "./i5.jpg"; // Above ground pool

// This array will hold the 3 pools we feature inside the main panel
// I noticed you had duplicates, so I've cleaned it up to show 4 unique pools inside.
const featuredPools = [
  { name: 'Aquatic Pool', image: i3 },
  { name: 'Long Island Pool', image: i2 },
  { name: 'Above Ground Pool', image: i5 },
  { name: 'Glass wall pool',  image: i4 },
];

const SwimmingPool = () => {

  const contentVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", damping: 30, stiffness: 100, delay: 0.2 } 
    }
  };
  
  // Animation variants for the inner image grid
  const listContainerVariants = {
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    // Increased min-height to ensure the panel has enough space
    <section 
      className="relative h-[120vh] min-h-[1200px] w-full py-20 flex items-center justify-center overflow-hidden"
    >
      {/* 1. STATIC FUTURISTIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* Aurora Glow */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-cyan-200/20 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-blue-200/20 blur-3xl opacity-40"></div>
        
        {/* Using i1 (Infinity) as one of the background images */}
        <motion.div 
          className="absolute top-0 left-0 w-2/3 h-2/3 opacity-70"
          style={{ scale: 1.1 }} 
        >
          <img src={i1} alt="A stunning infinity pool overlooking a vista" className="w-full h-full object-cover rounded-br-full" />
        </motion.div>
        
        {/* I've used i5 here for variety in the background */}
        <motion.div 
          className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-70"
          style={{ scale: 1.1 }}
        >
          <img src={i5} alt="A clean above ground swimming pool" className="w-full h-full object-cover rounded-tl-full" />
        </motion.div>
        
        <div className="absolute inset-0 bg-slate-900/10"></div>
      </div>
      
      {/* 2. FLOATING GLASS CONTENT PANEL */}
      <motion.div 
        className="relative z-10 w-11/12 max-w-5xl p-8 md:p-12 rounded-2xl 
                   bg-white/60 backdrop-blur-xl shadow-2xl border border-white/50"
        variants={contentVariants}
        initial="hidden"
        // --- MODIFIED: 'whileInView' ko 'animate' se badal diya gaya hai ---
        // Ab animation page load hote hi shuru hoga.
        animate="visible" 
        // --- REMOVED: viewport prop ki ab zaroorat nahi hai ---
      >
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-600 to-blue-700 pb-2 bg-clip-text text-transparent">
            Swimming Pools
          </h2>
          <p className="mt-6 mx-auto max-w-3xl text-lg leading-8 text-gray-700">
            As complete swimming pool contractors, we manage every aspect of your project, from initial design and construction to installation and follow-up maintenance. We specialize in creating a wide variety of stunning pool types.
          </p>
        </div>

        {/* --- MODIFIED: Grid layout updated to handle 4 items beautifully --- */}
        <motion.div 
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
          variants={listContainerVariants}
        >
          {featuredPools.map((feature, index) => (
            <motion.div 
              key={`${feature.name}-${index}`} // Using index for unique key since names can be duplicated
              className="relative rounded-lg overflow-hidden shadow-lg" 
              variants={listItemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={feature.image} alt={feature.name} className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 w-full p-3 bg-black/50 backdrop-blur-sm">
                <h3 className="text-white font-semibold text-center">{feature.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SwimmingPool;