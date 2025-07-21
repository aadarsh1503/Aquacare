import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi"; // Added icon for the button

// All of your image imports
import i1 from "./i1.webp";
import i3 from "./i3.jpeg";
import i4 from "./i4.avif";
import i7 from "./i7.jpeg";
import i5 from "./i5.jpeg";
import i9 from "./i9.jpg";
import i10 from "./i10.webp";
import i11 from "./i11.webp";
import i12 from "./i12.jpg";
import i13 from "./i13.webp";
import i14 from "./i14.png";

// Your CSS file import
import "./s.css";

// --- MODIFIED: The 'services' array now includes a 'link' property for each service. ---
// You can change these links to your actual page routes.
const services = [
  { id: 1, link: "/construction&Maintenance", title: "Construction & Maintenance", image: i10, text: "AquaCare Contracting is a specialist in the construction and maintenance industry, committed to delivering high-quality services tailored to client needs. We offer end-to-end solutions including civil works, paving, painting, aluminum fabrication, granite and tiling design, installation, and commissioning—adhering strictly to the latest standards and regulations. All services are also available under a Planned Preventative Maintenance program, ensuring long-term durability and seamless operation of your infrastructure." },
  { id: 2, link: "/plumbing", title: "Plumbing Contracting and Maintenance", image: i1, text: <><p>Aquacare team of experts would be able to recommend the required material, design, layout, and implement different systems depending on the type of project at hand. We responsively undertake contracting such as:</p><ul className="list-disc pl-5 mt-4 space-y-1"><li>Water Supply System</li><li>Water Distribution Works</li><li>Rain water system</li><li>Waste water Treatment</li><li>A/C Drainage System</li><li>Sewerage Pipe works</li><li>Vent pipe system</li><li>Irrigation Pipeline System</li><li>Pressure reducing valves (PRV) and More</li></ul></> },
  { id: 3, link: "/water-Features", title: "Water Features", image: i3, text: "We render our client different water features take on many forms including Fountains, Water wall, reflection pools, cascades, waterfalls, rills, streams, formal pools, lakes and ponds. They bring life to architecture and landscape and the sight, sound and movement of water can transform a quiet, still space into a vibrant, stimulating environment. Aquacare’s creative use of water can create additional value to any project. Our fountain service lengthens the life of your fountain, maintaining the beauty and quality of your fountain." },
  { id: 4, link: "/plumbing", title: "Plumbing Installations", image: i7, text: "One of the most appreciated services that Aquacare very much proud of is the Plumbing installation and maintenance work. We are highly popular in the Contracting market with regard to creating the most exquisite Plumbing work and other impressive water features works. AQUACARE Maintenance offers a full design and installation service for all plumbing works such as Drainage, Sewerage, Water tanks, Environmental solution, Custom Plumbing, Gas fitting, Water main installation, Pipeline construcation and more" },
  { id: 5, link: "/swimmingPool", title: "Swimming Pools", image: i4, text: "Aqua Care is the complete swimming pool contractor and can take care of every single aspect of your pool and spa construction project from initial design through to swimming pool installation and follow-up maintenance. We offer offer our best in all types of swimming pool such as, Italian swimming pool, Glass wall pool, Long Island pool, Above ground pool, Aquatic swimming pool, Indoor pool, Infinity pool etc." },
  { id: 6, link: "/jacuzzi&Sauna", title: "Jacuzzi and Sauna", image: i5, text: <><p>The Installation team of Aquacare is always ready to make your leisure time fully relaxing, allowing you to chill out and rejuvenate in a quality Spa, Jacuzzi, steam room, or sauna with various styles to suit all budgets, including Japanese, European, Arabian, Asian classic styles, and more.</p><p className="mt-4">Our team of specialists is also ready to assist with Engineering, Construction, Renovation, Service, and Repair for your Themed Environments.</p></> },
  { id: 7, link: "/splashPads", title: "Splash Pads and Spray Parks", image: i9, text: "A Spray Park is a water playground with a splash pad or other spray park products on a flat, water-permeable floor. Our Aqua care specialist, render you the installation, Maintenance, Repair and Service for splash pad on considering challenge the children to play with water in a safe and distinctive way." },
  { id: 8, link: "/electrical", title: "Electrical", image: i11, text: "AquaCare Contracting offers expert electrical services covering installation, maintenance, and upgrades for residential, commercial, and recreational facilities. Our skilled team ensures all electrical work is performed in compliance with the latest safety standards and regulations. From lighting and power systems to control panels and wiring, we provide reliable solutions under our Planned Preventative Maintenance program to ensure efficiency, safety, and long-term performance." },
  { id: 9, link: "/painting", title: "Painting", image: i12, text: "AquaCare Contracting provides high-quality painting solutions for both interior and exterior surfaces across residential, commercial, and recreational spaces. Our services include surface preparation, waterproof coatings, decorative finishes, and protective painting—all executed with precision and care. We follow industry standards to ensure durability, aesthetic appeal, and long-lasting results. All painting services can also be included under our Planned Preventative Maintenance program for ongoing upkeep and protection." },
  { id: 10, link: "/gypsum", title: "Gypsum", image: i13, text: "AquaCare Contracting offers expert gypsum works, providing customized solutions for ceilings, partitions, wall claddings, and decorative elements. Our team ensures precise installation using high-quality materials, delivering both aesthetic appeal and functional performance. Whether it's a modern design or a classic touch, we follow the latest standards and techniques. All gypsum services can also be included under our Planned Preventative Maintenance program to maintain long-term quality and appearance." },
  { id: 11, link: "/fittedBathrooms", title: "Fitted Bathrooms", image: i14, text: "AquaCare Contracting specializes in the design, installation, and renovation of fitted bathrooms tailored to meet both functionality and style. Our services include plumbing, tiling, waterproofing, sanitary ware installation, and modern fixtures—all executed with attention to detail and quality craftsmanship. We ensure each project complies with the latest industry standards, delivering elegant and durable bathroom solutions. Maintenance services can also be included under our Planned Preventative Maintenance program for long-term reliability." }
];

// Helper function to get a plain text preview
const getPreviewText = (text) => {
  if (typeof text === 'string') {
    return text.substring(0, 120) + '...';
  }
  if (React.isValidElement(text) && text.props.children) {
    const firstP = React.Children.toArray(text.props.children).find(child => child.type === 'p');
    if (firstP && typeof firstP.props.children === 'string') {
      return firstP.props.children.substring(0, 120) + '...';
    }
  }
  return "Click to read more about this service.";
};

const OurServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Effect to lock body scroll when the modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedService]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', damping: 25, stiffness: 200 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <div id="services" className="bg-dblack font-poppins py-20 md:py-28 futuristic-services-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-white uppercase tracking-widest"
          style={{ textShadow: "0 0 10px rgba(255, 204, 0, 0.5)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <motion.div 
            className="mx-auto mt-4 h-1 w-32 rounded-full bg-dyellow"
            style={{ boxShadow: "0 0 15px rgba(255, 204, 0, 0.7)" }}
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '8rem' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="futuristic-card cursor-pointer bg-white/5 rounded-lg group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold truncate transition-transform duration-300 group-hover:-translate-y-1">
                  {service.title}
                </h3>
                <div className="overflow-hidden h-0 group-hover:h-16 transition-all duration-500 ease-in-out">
                  <p className="text-white/70 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    {getPreviewText(service.text)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Section */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedService(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-dblack/80 backdrop-blur-xl rounded-lg w-full max-w-5xl relative border border-dyellow/50 shadow-2xl shadow-dyellow/20"
                onClick={(e) => e.stopPropagation()}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 text-dyellow hover:text-white transition z-20"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="flex flex-col lg:flex-row max-h-[90vh]">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full lg:w-1/2 h-64 lg:h-auto object-cover lg:rounded-l-lg rounded-t-lg"
                  />
                  <div className="flex flex-col p-6 lg:p-10 lg:w-1/2 overflow-y-auto custom-scrollbar">
                    <h3 className="text-2xl lg:text-3xl font-bold text-dyellow" style={{ textShadow: "0 0 5px rgba(255, 204, 0, 0.7)" }}>
                      {selectedService.title}
                    </h3>
                    <div className="text-white/80 text-base mt-6 space-y-4 prose prose-invert prose-p:text-white/80 prose-li:text-white/80">
                      {selectedService.text}
                    </div>
                    
                    {/* --- NEW: The "Learn More" Button Section --- */}
                    <div className="mt-8 pt-6 border-t border-dyellow/20">
                      <motion.a
                        href={selectedService.link} // Uses the specific link from the array
                        className="inline-flex items-center gap-2 rounded-md bg-dyellow/10 px-4 py-2 font-semibold text-dyellow shadow-lg shadow-dyellow/10 transition-all duration-300 border border-dyellow/30"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(255, 204, 0, 0.2)",
                          boxShadow: "0 0 20px rgba(255, 204, 0, 0.4)",
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                        <FiArrowRight />
                      </motion.a>
                    </div>

                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OurServices;