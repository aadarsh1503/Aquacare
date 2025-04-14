import React from 'react';
import i1 from "./i1.jpg"
import i2 from "./i2.jpg"
const Gypsum = () => {
  return (
    <section className="px-6 lg:px-20 lg:mt-40 mt-0 py-12 bg-white text-[#0a2b66]">
      <h2 className="text-3xl lg:text-5xl font-semibold mb-6">Gypsum</h2>
      <p className="text-lg leading-8 mb-2">
      One of the most appreciated services that A.K.C is very much proud of is the gypsum works. We are highly popular in the gypsum market with regard to creating the most exquisite gypsum decorations and other impressive gypsum works, which makes them one of the most sought after material to set up partitions, to create false ceilings and other forms of decorations.
      </p>
      <p className="text-lg leading-8 mb-4">
      Gypsum & Fit out worksworks Complete Interior and Exterior painting, Color consulting, Staining and color matching

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

export default Gypsum;
