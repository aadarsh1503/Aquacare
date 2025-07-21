import React from 'react';
import { motion } from 'framer-motion';
// Icons for the lists
import { FaShower, FaTools, FaColumns, FaUserCog, FaSink, FaToilet, FaTshirt } from 'react-icons/fa';

// All 8 of your image imports
import i1 from "./i1.jpg"; // Bathroom
import i2 from "./i2.webp"; // Bathroom
import i3 from "./i3.jpg"; // Bathroom
import i4 from "./i4.jpg"; // Bathroom
import i5 from "./i5.jpg"; // Sink
import i6 from "./i6.jpg"; // Sink
import i7 from "./i7.webp"; // Washing Machine
import i8 from "./i8.jpg"; // Washing Machine

// A dedicated list for the main bathroom services
const bathroomServices = [
  { name: 'Custom Design & Layout', icon: <FaUserCog /> },
  { name: 'Tiling & Waterproofing', icon: <FaColumns /> },
  { name: 'Sanitary Ware Installation', icon: <FaShower /> },
  { name: 'Modern Fixtures & Fittings', icon: <FaTools /> },
];

const FittedBathrooms = () => {
  // Animation variants for the content panels
  const contentVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", damping: 30, stiffness: 100, delay: 0.2 } 
    }
  };

  const listContainerVariants = {
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
  };
  
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };
  
  const imagePaneVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      {/* =================================================================== */}
      {/* HERO SECTION 1: FITTED BATHROOMS (Integrated HUD Layout) */}
      {/* =================================================================== */}
      <section className="relative h-[120vh] min-h-[900px] w-full py-20 flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-cyan-200/20 blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-blue-200/20 blur-3xl opacity-40"></div>
          <motion.div className="absolute top-0 left-0 w-2/3 h-2/3 opacity-70" style={{ scale: 1.1 }}>
            <img src={i1} alt="A beautifully fitted modern bathroom" className="w-full h-full object-cover rounded-br-full" />
          </motion.div>
          <motion.div className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-70" style={{ scale: 1.1 }}>
            <img src={i3} alt="Elegant bathroom fixtures and tiling" className="w-full h-full object-cover rounded-tl-full" />
          </motion.div>
          <div className="absolute inset-0 bg-slate-900/10"></div>
        </div>
        
        {/* Content Panel */}
        <motion.div 
          className="relative z-10 w-11/12 max-w-4xl p-8 md:p-12 rounded-2xl bg-white/60 backdrop-blur-xl shadow-2xl border border-white/50"
          variants={contentVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
        >
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-600 to-blue-700 pb-1  bg-clip-text text-transparent">
              Fitted Bathrooms
            </h2>
            <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-700">
              We specialize in the complete design and renovation of fitted bathrooms, combining style and functionality. Our services cover everything from initial layout to the final, perfect installation.
            </p>
          </div>
          <motion.div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6" variants={listContainerVariants}>
            {bathroomServices.map((service) => (
              <motion.div key={service.name} className="flex items-center gap-3" variants={listItemVariants}>
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-cyan-100/80 text-cyan-700">{service.icon}</span>
                <span className="font-medium text-gray-800">{service.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* =================================================================== */}
      {/* SUPPORTING SECTIONS CONTAINER */}
      {/* =================================================================== */}
      <div className="bg-slate-50 py-24 sm:py-32 space-y-24 sm:space-y-32">
        
        {/* SECTION 2: SINKS & BASINS (Holographic Pane Layout) */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={contentVariants}>
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-600 to-blue-700 pb-1  bg-clip-text text-transparent">Sinks & Basins</h3>
            <p className="mt-6 text-lg leading-8 text-gray-600">Our expertise extends to a wide variety of sinks and basins, ensuring perfect integration with your countertops and vanity units. We focus on both elegance and long-lasting functionality.</p>
          </motion.div>
          <motion.div className="relative h-96" variants={imagePaneVariants}>
            <motion.div className="absolute top-0 left-0 w-3/4 h-3/4 p-2 bg-white/50 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50" whileHover={{ scale: 1.05, rotate: -3, z: 10 }} transition={{ type: 'spring', stiffness: 300 }}>
              <img src={i5} alt="Stylish modern sink" className="w-full h-full object-cover rounded-xl"/>
            </motion.div>
            <motion.div className="absolute -bottom-20 right-0 w-3/4 h-3/4 p-2 bg-white/50 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50" whileHover={{ scale: 1.05, rotate: 3, z: 10 }} transition={{ type: 'spring', stiffness: 300 }}>
              <img src={i6} alt="Elegant wash basin" className="w-full h-full object-cover rounded-xl"/>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* SECTION 3: WASHING MACHINE INSTALLATIONS (Alternate Layout) */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div className="relative h-96 lg:order-last" variants={imagePaneVariants}>
            <motion.div className="absolute top-0 right-0 w-3/4 h-3/4 p-2 bg-white/50 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50" whileHover={{ scale: 1.05, rotate: 3, z: 10 }} transition={{ type: 'spring', stiffness: 300 }}>
              <img src={i7} alt="Professional washing machine installation" className="w-full h-full object-cover rounded-xl"/>
            </motion.div>
            <motion.div className="absolute -bottom-20 left-0 w-3/4 h-3/4 p-2 bg-white/50 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50" whileHover={{ scale: 1.05, rotate: -3, z: 10 }} transition={{ type: 'spring', stiffness: 300 }}>
              <img src={i8} alt="Seamless appliance integration" className="w-full h-full object-cover rounded-xl"/>
            </motion.div>
          </motion.div>
          <motion.div variants={contentVariants}>
            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-600 to-blue-700 pb-1  bg-clip-text text-transparent">Washing Machine Installations</h3>
            <p className="mt-6 text-lg leading-8 text-gray-600">We provide professional installation for all types of washing machines, ensuring secure plumbing connections, proper drainage, and seamless integration into your utility space or kitchen.</p>
          </motion.div>
        </motion.div>

      </div>
    </>
  );
};

export default FittedBathrooms;