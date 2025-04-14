import React from 'react';
import i1 from "./i1.jpeg"
import i2 from "./i2.webp"

const Plumbing2 = () => {
  return (
    <section className="px-6 lg:px-20 lg:mt-40 mt-0 py-12 bg-white text-[#0a2b66]">
      <h2 className="text-3xl lg:text-5xl font-semibold mb-6">Plumbing</h2>
      <p className="text-lg leading-8 mb-4">
      We do all Plumbing jobs big or small, including solving problems with clogged drains, drainage smell issues, fitting new sanitary ware, updating silicone, water heaters replacements & repairs among many other interesting issues a resident can encounter. You can be assured of a professional finish.
      </p>
      <p className="text-lg leading-8 mb-8">
      Drainage & Sewerage Water main installation & pipeline construction Water tanks Environmental solutions Custom plumbing & gas fitting

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
      <h2 className="text-3xl lg:text-5xl font-semibold mt-12 mb-6">Plumbing Design and Installation
      </h2>
      <p className="text-lg leading-8 mb-4">
      One of the most appreciated services that Aquacare very much proud of is the Plumbing installation and maintenance work. We are highly popular in the Contracting market with regard to creating the most exquisite Plumbing work and other impressive water features works. AQUACARE Maintenance offers a full design and installation service for all plumbing works such as 
      </p>
      <p className="text-lg leading-8 mb-8">
      Drainage, Sewerage, Water tanks, Environmental solution, Custom Plumbing, Gas fitting, Water main installation, Pipeline construction and more.


      </p>
    </section>
  );
};

export default Plumbing2;
