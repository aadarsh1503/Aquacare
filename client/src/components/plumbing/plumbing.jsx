import React from "react";
import { motion } from "framer-motion";
import i1 from "./i1.jpeg"; // Your image import

const ConstructionSection = () => {
  // Animation variants for the main container to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Animation variants for each child element
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-dblack relative overflow-hidden">
      {/* --- LAYER 1: DYNAMIC BACKGROUND BANNER --- */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
      >
        <img
          src={i1}
          alt="Futuristic construction background"
          className="w-full h-full object-cover opacity-15"
        />
        {/* Dark overlay to ensure text is always readable */}
        <div className="absolute inset-0 bg-dblack/70" />
      </motion.div>

      {/* --- LAYER 2: FOREGROUND CONTENT --- */}
      <div className="relative z-10 flex items-center justify-center py-20 md:py-28 lg:py-32">
        <motion.div
          className="w-full max-w-4xl rounded-lg border border-dyellow/30 bg-black/30 p-8 text-center shadow-2xl shadow-dyellow/10 backdrop-blur-md"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            className="text-2xl font-bold uppercase tracking-widest text-white lg:text-4xl"
            style={{ textShadow: "0 0 10px rgba(255, 204, 0, 0.5)" }} // Neon glow for text
            variants={itemVariants}
          >
            Need Help With Construction or Maintenance?
          </motion.h2>

          <motion.div
            className="mx-auto mt-4 h-1 w-32 rounded-full bg-dyellow"
            style={{ boxShadow: "0 0 15px rgba(255, 204, 0, 0.7)" }} // Neon glow for divider
            variants={itemVariants}
          />

          <motion.p className="mt-6 text-lg text-white/80" variants={itemVariants}>
            Whether it's building, repairs, or regular upkeep — we're here for you!
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8">
            <motion.a
              href="/contact"
              className="inline-block rounded-md bg-dyellow px-10 py-3 font-bold text-dblack shadow-lg shadow-dyellow/30 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255, 204, 0, 0.6)", // Brighter glow on hover
              }}
              whileTap={{ scale: 0.95 }}
            >
              REQUEST A SERVICE
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConstructionSection;