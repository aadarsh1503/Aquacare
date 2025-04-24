import { motion } from "framer-motion";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaBuilding, FaCalendar, FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";

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
  { year: "2025-2026", project: "Two & Half Storey Villa", site: "Kamana", cost: "70 K" },

];

export default function RecentProjectsTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-6 max-w-7xl lg:mt-40 mt-0 mx-auto"
    >
      <h2 className="text-4xl font-bold text-center text-black mb-8">
        Some of Our Recent Projects
      </h2>
      <div className="overflow-x-auto">
  <table className="w-full table-auto border border-gray-200 shadow-lg rounded-lg">
  <thead className="bg-blue-100 text-black">
      <tr>
        <th className="px-4 py-3 font-semibold text-left">
        <AiOutlineCalendar className="inline mr-2" />
            SR. No</th>
        <th className="px-4 py-3 font-semibold text-left">
          <FaBuilding className="inline mr-2" /> Project
        </th>
        <th className="px-4 py-3 font-semibold text-left">
          <FaMapMarkerAlt className="inline mr-2" /> Site
        </th>
        <th className="px-4 py-3 font-semibold text-left">
          <FaMoneyBillWave className="inline mr-2" /> BHD 1000 (K)
        </th>
      </tr>
    </thead>
    <tbody>
      {projects.map((p, i) => (
        <motion.tr
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
        >
          <td className="px-4 py-3 font-medium text-gray-700">{p.year}</td>
          <td className="px-4 py-3 text-gray-800">{p.project}</td>
          <td className="px-4 py-3 text-gray-800">{p.site}</td>
          <td className="px-4 py-3 text-gray-800">{p.cost}</td>
        </motion.tr>
      ))}
    </tbody>
  </table>
</div>
    </motion.div>
  );
} 
