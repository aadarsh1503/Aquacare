import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import y1 from "./y1.jpg";
import y2 from "./y2.jpg";
import y3 from "./y3.jpg";
import y4 from "./y4.jpg";
import y5 from "./y5.jpg";
import y6 from "./y6.jpg";
import y7 from "./y7.jpg";
import y8 from "./y8.jpg";
import y9 from "./y9.jpg";

const projects = [
  {
    title: "2 Story Villa",
    location: "Saar",
    image: y6,
    side: "left"
  },
  {
    title: "2 Story Villa",
    location: "ZaraSalman",
    image: y7,
    side: "right"
  },
  {
    title: "2 Storey Villa",
    location: "Shela",
    image: y8,
    side: "left"
  },
  {
    title: "2 Storey Building",
    location: "Bahrain",
    image: y4,
    side: "right"
  },
  {
    title: "3 Storey Building",
    location: "Bahrain",
    image: y5,
    side: "left"
  },
  {
    title: "3 Storey Building",
    location: "Bahrain",
    image: y1,
    side: "right"
  },
  {
    title: " ",
    location: "Bahrain",
    image: y2,
    side: "left"
  },
  {
    title: " ",
    location: "Jid Ali",
    image: y3,
    side: "right"
  },
  {
    title: " ",
    location: "Maqaba",
    image: y9,
    side: "left"
  },
];

export default function OurProject() {
  const lineRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });

  const height = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true
    });
  }, []);

  const leftProjects = projects.filter((p) => p.side === "left");
  const rightProjects = projects.filter((p) => p.side === "right");

  return (
    <section className="relative bg-white py-24 mt-0 lg:mt-32 overflow-hidden">
      {/* Section header */}
      <div className="container mx-auto px-6 text-center mb-20">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 font-serif tracking-tight">
          Our <span className="">Projects</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Showcasing our excellence in architectural design and construction
        </p>
      </div>

      {/* Projects timeline */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left projects */}
          <div className="flex flex-col gap-16 pt-16">
            {leftProjects.map((project, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl w-full lg:w-[450px] shadow-2xl overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                  <div className="h-96 w-full overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute h-full w-full object-fill rounded-t-xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                    <p className="text-gray-600 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {project.location}
                    </p>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative hidden md:block" ref={lineRef}>
            <div className="absolute left-1/2 top-0 bottom-0 w-1  rounded-full -translate-x-1/2"></div>
            <motion.div
              className="absolute left-1/2 top-5 w-1 bg-gradient-to-b from-black to-red-600 rounded-full -translate-x-1/2"
              style={{ height }}
            />
            <motion.div
              className="absolute  w-4 h-4 top-3 bg-black rounded-full -translate-x-1/2  left-[173px] shadow-lg"
              style={{ 
                y: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
                opacity: useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0])
              }}
            />
          </div>

          {/* Right projects */}
          <div className="flex flex-col gap-16 relative right-0 lg:right-24 pt-32">
            {rightProjects.map((project, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl w-full lg:w-[450px] shadow-2xl overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                  <div className="h-96 w-full overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute h-full w-full object-fill rounded-t-xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                    <p className="text-gray-600 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {project.location}
                    </p>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}