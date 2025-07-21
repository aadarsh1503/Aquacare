import React from 'react';
import { motion } from 'framer-motion';

// Your image imports
import i1 from "./i1.jpg"; // Fountain
import i2 from "./i2.jpg"; // Cascades
import i3 from "./i3.avif"; // Water wall
import i4 from "./i4.jpg"; // Water falls

// We will feature two of the water features inside the main panel
const featuredWaterFeatures = [
    { name: 'Cascades', image: i2 },
    { name: 'Water Walls', image: i3 }
];

const WaterFeatures = () => {

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
      className="relative h-[120vh] min-h-[900px] w-full py-20 flex items-center justify-center overflow-hidden"
    >
      {/* 1. STATIC FUTURISTIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* Aurora Glow */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-cyan-200/20 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-blue-200/20 blur-3xl opacity-40"></div>
        
        {/* Using i1 (Fountain) and i4 (Water falls) for the background */}
        <motion.div 
          className="absolute top-0 left-0 w-2/3 h-2/3 opacity-70"
          style={{ scale: 1.1 }} 
        >
          <img src={i1} alt="A grand, elegant water fountain" className="w-full h-full object-cover rounded-br-full" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-70"
          style={{ scale: 1.1 }}
        >
          <img src={i4} alt="A beautiful, cascading waterfall feature" className="w-full h-full object-cover rounded-tl-full" />
        </motion.div>
        
        <div className="absolute inset-0 bg-slate-900/10"></div>
      </div>
      
      {/* 2. FLOATING GLASS CONTENT PANEL */}
      <motion.div 
        className="relative z-10 w-11/12 max-w-4xl p-8 md:p-12 rounded-2xl 
                   bg-white/60 backdrop-blur-xl shadow-2xl border border-white/50"
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
            Water Features
          </h2>
          <p className="mt-6 mx-auto max-w-3xl text-lg leading-8 text-gray-700">
            We bring life to architecture and landscapes with bespoke water features. The sight, sound, and movement of water can transform any space into a vibrant, stimulating environment, adding exceptional value and beauty to your project.
          </p>
        </div>

        {/* --- IMPROVEMENT: Visual grid featuring the other two images --- */}
        <motion.div 
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={listContainerVariants}
        >
          {featuredWaterFeatures.map((feature) => (
            <motion.div 
              key={feature.name} 
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

export default WaterFeatures;