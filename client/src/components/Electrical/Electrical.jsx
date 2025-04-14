import React from 'react';
import i1 from "./i1.jpg"
import i2 from "./i2.jpg"

const Electrical = () => {
  return (
    <section className="px-6 lg:px-20 lg:mt-40 mt-0 py-12 bg-white text-[#0a2b66]">
      <h2 className="text-3xl lg:text-5xl font-semibold mb-6">Electrical</h2>
      <p className="text-lg leading-8 mb-4">
      Professional Electrical services are our forte. Troubleshooting wires, hanging chandeliers, lighting connections, socket issues & more. No job is too big or small for us. We equally enjoy small jobs as we do with large jobs.

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

export default Electrical;
