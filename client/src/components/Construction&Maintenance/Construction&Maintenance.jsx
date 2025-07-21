import React, { useRef } from 'react';
import { motion } from 'framer-motion'; // REMOVED: useScroll, useTransform
import { FaHardHat, FaPaintBrush, FaRulerCombined, FaTools, FaBuilding, FaWrench } from 'react-icons/fa';

// Your image imports
import i1 from "./i1.jpg";
import i2 from "./i2.jpg";

const servicesList = [
  { name: 'General Building Civil Works', icon: <FaBuilding /> },
  { name: 'Paving & Interlocking', icon: <FaHardHat /> },
  { name: 'Professional Painting', icon: <FaPaintBrush /> },
  { name: 'Aluminum & Fabrication', icon: <FaWrench /> },
  { name: 'Granite & Tiling Design', icon: <FaRulerCombined /> },
  { name: 'Installation & Commissioning', icon: <FaTools /> }
];

const ConstructionMaintenance = () => {
  // REMOVED: The sectionRef and hooks for scroll-based parallax are no longer needed.

  const contentVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", damping: 30, stiffness: 100, delay: 0.2 } 
    }
  };

  return (
    // The section remains tall to provide scroll room over the static background.
    <section 
      className="relative h-[120vh] min-h-[900px] w-full py-20 flex items-center justify-center overflow-hidden"
    >
      {/* 1. STATIC FUTURISTIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* Aurora Glow */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-cyan-200/20 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-blue-200/20 blur-3xl opacity-40"></div>
        
        {/* Image 1 - NOW STATIC */}
        <motion.div 
          className="absolute top-0 left-0 w-2/3 h-2/3 opacity-70"
          // REMOVED: style prop with parallax movement (y: bgY1)
          style={{ scale: 1.1 }} 
        >
          <img src={i1} alt="Construction site background" className="w-full h-full object-cover rounded-br-full" />
        </motion.div>
        
        {/* Image 2 - NOW STATIC */}
        <motion.div 
          className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-70"
          // REMOVED: style prop with parallax movement (y: bgY2)
          style={{ scale: 1.1 }}
        >
          <img src={i2} alt="Engineering plan background" className="w-full h-full object-cover rounded-tl-full" />
        </motion.div>
        
        {/* Darkening Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-slate-900/10"></div>
      </div>
      
      {/* 2. FLOATING GLASS CONTENT PANEL (No changes here) */}
      <motion.div 
        className="relative z-10 w-11/12 max-w-4xl p-8 md:p-12 rounded-2xl 
                   bg-white/60 backdrop-blur-xl shadow-2xl border border-white/50"
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-600 to-blue-700 pb-1  bg-clip-text text-transparent">
            Construction & Maintenance
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-700">
            AquaCare Contracting is a specialist in the construction and maintenance industry, dedicated to providing excellent, future-focused services to our clients. All services can be provided under a Planned Preventative Maintenance program.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {servicesList.map((service) => (
            <div key={service.name} className="flex items-center gap-3">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-cyan-100/80 text-cyan-700">
                {service.icon}
              </span>
              <span className="font-medium text-gray-800">{service.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ConstructionMaintenance;