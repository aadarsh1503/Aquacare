import React from 'react';
import i1 from "./i1.jpg"
import i2 from "./i2.jpg"

const ConstructionMaintenance = () => {
  return (
    <section className="px-6 lg:px-20 mt-40 py-12 bg-white text-[#0a2b66]">
      <h2 className="text-3xl lg:text-5xl font-semibold mb-6">Construction & Maintenance</h2>
      <p className="text-lg leading-8 mb-4">
        Aquacare contracting is specialist in the construction and maintenance industry dedicated to provide excellent services to our clients. All of our services can be provided under a Planned Preventative Maintenance program, our specialization of general construction services are as follows:
      </p>
      <p className="text-lg leading-8 mb-8">
        General Building Civil works, Paving, Painting, Aluminum, Granite & Tiling design and installation and commissioning as per latest standards regulations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <img
    src={i1}
    alt="Construction site"
    className="w-full h-96 object-cover rounded-md shadow"
  />
  <img
    src={i2}
    alt="Engineer with blueprint"
    className="w-full h-96 object-cover rounded-md shadow"
  />
</div>

    </section>
  );
};

export default ConstructionMaintenance;
