import React from 'react';
import { motion } from 'framer-motion';
// Icons for the new list
import { FaBolt, FaLightbulb, FaPlug, FaWrench } from 'react-icons/fa'; 

// Your image imports
import i1 from "./i1.jpg";
import i2 from "./i2.jpg";

// --- NEW: A dedicated list for electrical services for a cleaner look ---
const electricalServices = [
  { name: 'Wiring & Installations', icon: <FaBolt /> },
  { name: 'Chandeliers & Lighting', icon: <FaLightbulb /> },
  { name: 'Sockets & Switches', icon: <FaPlug /> },
  { name: 'Troubleshooting & Repairs', icon: <FaWrench /> },
];

const Electrical = () => {

  const contentVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", damping: 30, stiffness: 100, delay: 0.2 } 
    }
  };
  
  // Stagger animation for the new list
  const listContainerVariants = {
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.4 }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section 
      className="relative h-[120vh] min-h-[900px] w-full py-20 flex items-center justify-center overflow-hidden"
    >
      {/* 1. STATIC FUTURISTIC BACKGROUND (No changes) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-cyan-200/20 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-blue-200/20 blur-3xl opacity-40"></div>
        
        <motion.div 
          className="absolute top-0 left-0 w-2/3 h-2/3 opacity-70"
          style={{ scale: 1.1 }} 
        >
          <img src={i1} alt="Professional electrical wiring" className="w-full h-full object-cover rounded-br-full" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-70"
          style={{ scale: 1.1 }}
        >
          <img src={i2} alt="Modern lighting installation" className="w-full h-full object-cover rounded-tl-full" />
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
            Electrical
          </h2>
          {/* Main paragraph remains */}
          <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-700">
            We provide expert electrical services to meet both residential and commercial needs. Whether it's a simple fix or a complete setup, our team ensures safety, precision, and high-quality workmanship in every project.
          </p>
        </div>

        {/* --- IMPROVEMENT: The list is now a separate, styled grid --- */}
        <motion.div 
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6"
          variants={listContainerVariants}
        >
          {electricalServices.map((service) => (
            <motion.div key={service.name} className="flex items-center gap-3" variants={listItemVariants}>
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-cyan-100/80 text-cyan-700">
                {service.icon}
              </span>
              <span className="font-medium text-gray-800">{service.name}</span>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Electrical;