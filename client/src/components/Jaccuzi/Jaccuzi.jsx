import React from 'react';
import { motion } from 'framer-motion';

// Your image imports
import i1 from "./i1.jpg"; // Japanese Spa
import i2 from "./i2.jpg"; // Indoor Sauna
import i3 from "./i3.webp"; // Arabian Jacuzzi
import i4 from "./i4.jpg"; // French Jacuzzi

// --- CORRECTED: The array now only shows the items NOT used in the background ---
// This prevents showing the same image twice.
const featuredItems = [
  { name: 'Indoor Sauna', image: i2 },
  { name: 'Japanese spa', image: i1 }, // Renamed for better context
  { name: 'Arabian Jacuzzi', image: i3 }, // Renamed for better context
  { name: 'French Jacuzzi', image: i4 } // Renamed for better context
];

const Jaccuzi = () => {

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
      transition: { staggerChildren: 0.2, delayChildren: 0.4 }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section 
      className="relative h-[120vh] min-h-[1200px] w-full py-20 flex items-center justify-center overflow-hidden"
    >
      {/* 1. STATIC FUTURISTIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* Aurora Glow */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-cyan-200/20 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-blue-200/20 blur-3xl opacity-40"></div>
        
        {/* Using i1 (Japanese Spa) and i3 (Arabian Jacuzzi) for the background */}
        <motion.div 
          className="absolute top-0 left-0 w-2/3 h-2/3 opacity-70"
          style={{ scale: 1.1 }} 
        >
          <img src={i1} alt="A tranquil Japanese-style spa" className="w-full h-full object-cover rounded-br-full" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-70"
          style={{ scale: 1.1 }}
        >
          <img src={i3} alt="An ornate Arabian-style jacuzzi" className="w-full h-full object-cover rounded-tl-full" />
        </motion.div>
        
        <div className="absolute inset-0 bg-slate-900/10"></div>
      </div>
      
      {/* 2. FLOATING GLASS CONTENT PANEL */}
      <motion.div 
        className="relative z-10 w-11/12 max-w-4xl p-8 md:p-12 rounded-2xl 
                   bg-white/60 backdrop-blur-xl shadow-2xl border border-white/50"
        variants={contentVariants}
        initial="hidden"
        // --- MODIFIED: 'whileInView' is replaced with 'animate' ---
        // This will trigger the animation on load, without needing to scroll.
        animate="visible"
        // --- REMOVED: The 'viewport' prop is no longer needed ---
      >
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
            Jacuzzi & Sauna
          </h2>
          <p className="mt-6 mx-auto max-w-3xl text-lg leading-8 text-gray-700">
            Our installation team is ready to transform your leisure time. Relax and rejuvenate in a quality Spa, Jacuzzi, or Sauna designed to suit your style and budget, from classic Asian designs to modern European themes.
          </p>
        </div>

        {/* Visual grid featuring the other two items */}
        <motion.div 
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={listContainerVariants}
        >
          {featuredItems.map((feature, index) => (
            <motion.div 
              key={`${feature.name}-${index}`}
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

export default Jaccuzi;