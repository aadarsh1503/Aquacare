import { motion } from "framer-motion";
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";

// Data remains the same
const projects = [
  { year: "2016-2017", project: "3 Storey Building", site: "Jidhaf", cost: "85 K" },
  { year: "2016-2017", project: "3 Storey Building", site: "Tubli", cost: "120 K" },
  { year: "2016-2017", project: "2 Storey Building", site: "Salhiya", cost: "35 K" },
  { year: "2017-2018", project: "2 Storey Building", site: "Saar", cost: "45 K" },
  { year: "2017-2018", project: "2 Storey Building", site: "Maqaba", cost: "32 K" },
  { year: "2017-2018", project: "Twin Villa 2 Storey Building", site: "Maqaba", cost: "116 K" },
  { year: "2017-2018", project: "3 Storey Building", site: "Sitra", cost: "33 K" },
  { year: "2017-2018", project: "3 Storey Building", site: "Jidhafs", cost: "41 K" },
  { year: "2017-2018", project: "3 Storey Villa 3", site: "Kawarah", cost: "58 K" },
  { year: "2018-2019", project: "Storey Villa 2", site: "Jidd Ali", cost: "70 K" },
  { year: "2018-2019", project: "Storey Building 3", site: "Amwaj", cost: "68 K" },
  { year: "2018-2019", project: "Storey Building 2", site: "Narnar", cost: "95 K" },
  { year: "2018-2019", project: "Storey Villa", site: "Riffa", cost: "36 K" },
  { year: "2018-2019", project: "2 Storey Villa (8 Nos)", site: "Awali", cost: "122 K" },
  { year: "2018-2019", project: "3 Storey Villa", site: "Muqabah", cost: "59 K" },
  { year: "2019-2020", project: "3 Storey Villa", site: "Samahee", cost: "88 K" },
  { year: "2019-2020", project: "3 Storey Building 3", site: "A’ali", cost: "45 K" },
  { year: "2019-2020", project: "Storey Villa Single", site: "Sehla", cost: "50 K" },
  { year: "2019-2020", project: "Storey Building", site: "Salhiya", cost: "40 K" },
  { year: "2020-2022", project: "Two and Half Storey Villa", site: "A’ali", cost: "65 K" },
  { year: "2022-2023", project: "Two Storey Villa", site: "Jablat", cost: "63.5 K" },
  { year: "2022-2023", project: "One Storey Villa", site: "Damistan", cost: "31.5 K" },
  { year: "2024-2025", project: "Two Storey Villa", site: "Damistan", cost: "39.4 K" },
  { year: "2025-2026", project: "Two Storey Villa", site: "Jabala", cost: "85 K" },
  { year: "2025-2026", project: "Two Storey Villa", site: "Sitra", cost: "55 K" },
  { year: "2025-2026", project: "Two & Half Storey Villa", site: "Karranah", cost: "70 K" },
];

// Reusable component for the gradient-powered icon
const GradientIcon = ({ IconComponent }) => (
  <span className="bg-gradient-to-br from-cyan-400 to-blue-600 text-transparent bg-clip-text">
    <IconComponent />
  </span>
);


export default function RecentProjectsTable() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.08, // This will make each child animate one after the other
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } },
  };


  return (
    <div className="relative bg-gray-50/50 py-20 lg:py-40">
      {/* Aurora background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-200/50 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl opacity-50 animate-pulse animation-delay-4000"></div>
      </div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative p-6 max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          A Glimpse Into Our Portfolio
        </h2>

        <div className="flex flex-col space-y-3">
          {/* Header Row - visible on medium screens and up */}
          <div className="hidden md:grid grid-cols-10 gap-4 px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
            <div className="col-span-2 flex items-center gap-2"><FaCalendarAlt /> Year</div>
            <div className="col-span-3 flex items-center gap-2"><FaBuilding /> Project Description</div>
            <div className="col-span-3 flex items-center gap-2"><FaMapMarkerAlt /> Location</div>
            <div className="col-span-2 flex items-center gap-2"><FaMoneyBillWave /> Value (BHD)</div>
          </div>
          
          {/* Project Rows */}
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5, boxShadow: "0px 10px 30px -5px rgba(0, 190, 255, 0.2)" }}
              className="grid grid-cols-1 md:grid-cols-10 gap-4 items-center p-5 rounded-xl border border-white/30 
                         bg-white/40 backdrop-blur-lg shadow-md hover:bg-white/60 transition-all duration-300 cursor-pointer"
            >
              {/* Data Cells */}
              <div className="md:col-span-2 font-semibold text-gray-800">
                <span className="md:hidden text-gray-500 font-normal text-xs uppercase">Year: </span>
                {p.year}
              </div>
              <div className="md:col-span-3 text-gray-700">
                 <span className="md:hidden text-gray-500 font-normal text-xs uppercase">Project: </span>
                 {p.project}
              </div>
              <div className="md:col-span-3 text-gray-600">
                <span className="md:hidden text-gray-500 font-normal text-xs uppercase">Site: </span>
                {p.site}
              </div>
              <div className="md:col-span-2 font-bold bg-gradient-to-br from-cyan-500 to-blue-600 text-transparent bg-clip-text">
                <span className="md:hidden text-gray-500 font-normal text-xs uppercase">Cost: </span>
                {p.cost}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}