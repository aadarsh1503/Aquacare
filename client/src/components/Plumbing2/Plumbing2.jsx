import React from 'react';
import { motion } from 'framer-motion';
// Icons for the plumbing services list
import { FaWater, FaShower, FaCogs, FaGasPump, FaToilet } from 'react-icons/fa';

// Your image imports
import i1 from "./i1.jpeg";
import i2 from "./i2.webp";
import { FaToolbox } from 'react-icons/fa6';

// A dedicated list for plumbing services to keep the design clean and organized
const plumbingServices = [
  { name: 'Drainage & Sewerage', icon: <FaWater /> },
  { name: 'Water Tanks & Heaters', icon: <FaShower /> },
  { name: 'Pipeline Construction', icon: <FaCogs /> },
  { name: 'Custom Plumbing & Gas Fitting', icon: <FaGasPump /> },
  { name: 'Sanitary Ware Installation', icon: <FaToilet /> },
  { name: 'General Repairs & Leaks', icon: <FaToolbox /> },
];

const Plumbing = () => { // Renamed to Plumbing for simplicity

  const contentVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", damping: 30, stiffness: 100, delay: 0.2 } 
    }
  };

  // Animation variants for the service list
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
      {/* 1. STATIC FUTURISTIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* Aurora Glow */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-cyan-200/20 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-blue-200/20 blur-3xl opacity-40"></div>
        
        {/* Image 1 - Static */}
        <motion.div 
          className="absolute top-0 left-0 w-2/3 h-2/3 opacity-70"
          style={{ scale: 1.1 }} 
        >
          <img src={i1} alt="Modern plumbing pipes and fixtures" className="w-full h-full object-cover rounded-br-full" />
        </motion.div>
        
        {/* Image 2 - Static */}
        <motion.div 
          className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-70"
          style={{ scale: 1.1 }}
        >
          <img src={i2} alt="Professional plumber at work" className="w-full h-full object-cover rounded-tl-full" />
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
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-600 to-blue-700 pb-2 bg-clip-text text-transparent">
            Plumbing Services
          </h2>
          {/* Combined and polished paragraph */}
          <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-700">
            From clogged drains to new installations, we handle all plumbing jobs, big or small. Our team provides full design and installation services, ensuring a professional finish for every project, from custom plumbing to water main construction.
          </p>
        </div>

        {/* The list of services, now in a clean, icon-based grid */}
        <motion.div 
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6"
          variants={listContainerVariants}
        >
          {plumbingServices.map((service) => (
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

export default Plumbing;