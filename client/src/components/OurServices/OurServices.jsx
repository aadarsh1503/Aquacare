import React, { useState } from "react";
import i1 from "./i1.jpg";
import i3 from "./i3.jpg";
import i4 from "./i4.jpg";
import i5 from "./i5.jpg";
import i6 from "./i6.jpg";
import i2 from "./i2.jpg";
import "./s.css";

const OurServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Plumbing Contracting and Maintenance",
      image: i1,
      text: (
        <>
          <p>
            Aquacare team of experts would be able to recommend the required material, design, layout, and implement different systems depending on the type of project at hand. We responsively undertake contracting such as:
          </p>
          <ul className="list-disc pl-5 mt-4">
            <li>Water Supply System</li>
            <li>Water Distribution Works</li>
            <li>Rain water system</li>
            <li>Waste water Treatment</li>
            <li>A/C Drainage System</li>
            <li>Sewerage Pipe works</li>
            <li>Vent pipe system</li>
            <li>Irrigation Pipeline System</li>
            <li>Pressure reducing valves (PRV) and More</li>
          </ul>
        </>
      ),
    },
    {
      id: 2,
      title: "Water Features",
      image: i3,
      text: "We render our client different water features take on many forms including Fountains, Water wall, reflection pools, cascades, waterfalls, rills, streams, formal pools, lakes and ponds. They bring life to architecture and landscape and the sight, sound and movement of water can transform a quiet, still space into a vibrant, stimulating environment. Aquacare’s creative use of water can create additional value to any project. Our fountain service lengthens the life of your fountain, maintaining the beauty and quality of your fountain.",
    },
    {
      id: 3,
      title: "Plumbing Installations",
      image: i2,
      text: "One of the most appreciated services that Aquacare very much proud of is the Plumbing installation and maintenance work. We are highly popular in the Contracting market with regard to creating the most exquisite Plumbing work and other impressive water features works. AQUACARE Maintenance offers a full design and installation service for all plumbing works such as Drainage, Sewerage, Water tanks, Environmental solution, Custom Plumbing, Gas fitting, Water main installation, Pipeline construcation and more",
    },
    {
      id: 4,
      title: "Swimming Pools",
      image: i4,
      text: "Aqua Care is the complete swimming pool contractor and can take care of every single aspect of your pool and spa construction project from initial design through to swimming pool installation and follow-up maintenance. We offer offer our best in all types of swimming pool such as, Italian swimming pool, Glass wall pool, Long Island pool, Above ground pool, Aquatic swimming pool, Indoor pool, Infinity pool etc.",
    },
    {
      id: 5,
      title: "Jacuzzi and Sauna",
      image: i5,
      text: (
        <>
          <p>
            The Installation team of Aquacare is always ready to make your leisure time fully relaxing, allowing you to chill out and rejuvenate in a quality Spa, Jacuzzi, steam room, or sauna with various styles to suit all budgets, including Japanese, European, Arabian, Asian classic styles, and more.
          </p>
          <p className="mt-4">
            Our team of specialists is also ready to assist with Engineering, Construction, Renovation, Service, and Repair for your Themed Environments.
          </p>
        </>
      ),
    },
    {
      id: 6,
      title: "Splash Pads and Spray Parks",
      image: i6,
      text: "A Spray Park is a water playground with a splash pad or other spray park products on a flat, water-permeable floor. Our Aqua care specialist, render you the installation, Maintenance, Repair and Service for splash pad on considering challenge the children to play with water in a safe and distinctive way.",
    },
  ];

  return (
    <div id="services" className="bg-dblack font-poppins py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          OUR SERVICES
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 w-[300px] lg:w-[1100px] mx-auto lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="cursor-pointer bg-gray-800 rounded-lg overflow-hidden shadow-md relative group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="lg:w-full  h-[370px] object-fill"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
              {/* Heading and Preview Text */}
              <div className="absolute inset-0 mt-32 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 transition-transform duration-300 group-hover:transform group-hover:translate-y-[-20px]">
                <h3
                  className="text-white relative top-14 text-lg font-bold overflow-hidden truncate group-hover:translate-y-[-20px]"
                  title={service.title}
                >
                  {service.title}
                </h3>
                <p className="text-white text-sm relative top-8 mt-1 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.text.props
                    ? service.text.props.children[0].props.children.trim().split(".")[0]
                    : service.text.split(".").slice(0, 3).join(".")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Section */}
        {selectedService && (
          <div
  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  onClick={() => setSelectedService(null)}
>
  <div
    className="bg-white rounded-lg p-8 w-[332px] lg:ml-0  lg:max-w-4xl lg:w-full relative sm:p-4 lg:p-8"
    onClick={(e) => e.stopPropagation()}
  >
    {/* Close Button */}
    <button
      onClick={() => setSelectedService(null)}
      className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 focus:outline-none sm:w-5 sm:h-5 lg:w-6 lg:h-6"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <div className="flex flex-col lg:flex-row">
      <img
        src={selectedService.image}
        alt={selectedService.title}
        className="lg:w-full object-cover rounded-lg w-[332px] lg:w-1/2"
      />
      <div className="mt-4 sm:mt-4 w-[300px] lg:w-full lg:mt-0 lg:ml-6 flex flex-col">
        <h3 className="text-xl sm:text-lg lg:text-2xl font-bold text-gray-800">
          {selectedService.title}
        </h3>
        <p className="text-gray-700 text-sm sm:text-sm lg:text-base mt-4">
          {selectedService.text}
        </p>
      </div>
    </div>
  </div>
</div>

)}


      </div>
    </div>
  );
};

export default OurServices;
