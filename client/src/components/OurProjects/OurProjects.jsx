import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import f1 from "./f1.jpg";
import f2 from "./f2.jpg";
import f3 from "./f3.jpg";
import f4 from "./f4.jpg";
import f5 from "./f5.jpg";
import f6 from "./f6.jpg";
import f7 from "./f7.jpg";
import f8 from "./f8.jpg";
import f9 from "./f9.jpg";
import f10 from "./f10.jpg";
import f11 from "./f11.jpg";
import f12 from "./f12.jpg";
import f13 from "./f13.jpg";




const projects = [
  {
    title: "",
    location: "Sanad",
    image: f2,
    side: "left"
  },
  {
    title: "",
    location: "Sanad",
    image: f1,
    side: "right"
  },
  {
    title: "2 Storey Villa",
    location: "Janabiya - Al Taweel",
    image: f3,
    side: "left"
  },
  {
    title: "3 Storey Building",
    location: "Jid Hafs - Aali Engg",
    image: f4,
    side: "right"
  },
  {
    title: "1 Storey Building",
    location: "Shakora - Vision Gate",
    image: f5,
    side: "left"
  },
  {
    title: "3 Storey Building",
    location: "Jidd Ali",
    image: f6,
    side: "right"
  },
  {
    title: " ",
    location: "JidHafs",
    image: f7,
    side: "left"
  },
  {
    title: " ",
    location: "Jid Ali",
    image: f8,
    side: "right"
  },
 
  {
    title: " ",
    location: "Maqaba",
    image: f10,
    side: "left"
  },
  {
    title: " ",
    location: "Aali",
    image: f11,
    side: "right"
  },
  {
    title: " ",
    location: "Maqaba",
    image: f12,
    side: "left"
  },
  {
    title: " ",
    location: "Aali",
    image: f13,
    side: "right"
  },
  {
    title: " ",
    location: "Aali",
    image: f9,
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
    <section className="relative bg-white py-24 mt-32 overflow-hidden">
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
    
                <div className="bg-white rounded-xl w-[450px] shadow-2xl overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                <div className="h-80  overflow-hidden flex items-center justify-center">
  <img 
    src={project.image} 
    alt={project.title}
    className="min-w-full min-h-full mt-4 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
  />
</div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                    <p className="text-gray-600 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {project.location}
                    </p>
                  </div>
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
          <div className="flex flex-col gap-16 relative right-24 pt-32">
            {rightProjects.map((project, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
          
                <div className="bg-white rounded-xl w-[450px] shadow-2xl overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                  <div className="h-80 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                    <p className="text-gray-600 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {project.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}