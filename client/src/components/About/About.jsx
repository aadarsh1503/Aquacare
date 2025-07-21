import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { motion } from 'framer-motion';

// --- NEW: Import the CSS file ---
import './About.css';

// Icons from Font Awesome 6
import { FaWrench, FaHammer, FaGears, FaPaintbrush } from "react-icons/fa6";

// Your placeholder image
const aboutImage = "https://images.pexels.com/photos/3771045/pexels-photo-3771045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";


const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  // Animation variants for the left-side text content
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const textItemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="bg-dblack relative overflow-hidden text-white py-24 md:py-32">
      
      {/* --- LAYER 1: RUNNING LINES (FROM CSS FILE) --- */}
      <div className="about-background-lines" />

      {/* --- LAYER 2: GLOWS AND FLOATING ICONS --- */}
      <div className="absolute inset-0 z-5">
        {/* Pulsing Background Glows */}
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-2/3 h-2/3 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.1, 0.2] }}
          transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, delay: 5 }}
        />
        {/* Floating Icons */}
        <motion.div
          className="absolute top-[10%] left-[5%] text-white/10"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaWrench className="w-20 h-20" />
        </motion.div>
        <motion.div
          className="absolute top-[15%] right-[10%] text-white/10 hidden md:block"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaHammer className="w-24 h-24" />
        </motion.div>
        <motion.div
          className="absolute bottom-[15%] left-[15%] text-white/10 hidden md:block"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaPaintbrush className="w-16 h-16" />
        </motion.div>
        <motion.div
          className="absolute bottom-[10%] right-[5%] text-white/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        >
          <FaGears className="w-32 h-32" />
        </motion.div>
      </div>

      {/* --- LAYER 3: FOREGROUND CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            className="flex flex-col text-center lg:text-left"
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1 
              className="font-semibold text-3xl md:text-4xl tracking-tight"
              variants={textItemVariants}
            >
              ABOUT US
            </motion.h1>
            <motion.div 
              className="h-1 w-24 bg-accent mt-4 mx-auto lg:mx-0" 
              variants={textItemVariants}
            />
            <motion.p 
              className="mt-8 text-white/80 text-lg leading-relaxed"
              variants={textItemVariants}
            >
              Aqua Care Services is a leading maintenance and refurbishment contractor in the wet leisure industry. With a team of skilled engineers and a wide range of premium products, we provide reliable solutions for both residential and commercial clients. Our core offerings include comprehensive <span className="font-bold text-accent">Construction & Maintenance</span> services, covering every stage from initial building to continuous upkeep.
            </motion.p>
            <motion.p 
              className="mt-4 text-white/80 text-lg leading-relaxed"
              variants={textItemVariants}
            >
              We also specialize in plumbing systems, swimming pools, saunas, steam rooms, Jacuzzis, fountains, electrical works, painting, gypsum ceilings and partitions, and custom fitted bathrooms. All services are available under our Planned Preventative Maintenance program to ensure long-term performance, safety, and complete client satisfaction.
            </motion.p>
            <motion.div variants={textItemVariants}>
              <button className="mt-8 px-8 py-3 bg-accent text-dblack font-bold rounded-md hover:bg-accent/80 transition-colors duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img 
              src={aboutImage}
              alt="Professional maintenance and construction work"
              className="rounded-lg shadow-2xl object-cover w-full h-auto max-h-[500px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;