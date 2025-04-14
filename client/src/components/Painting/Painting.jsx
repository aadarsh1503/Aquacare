import React from 'react';
import i1 from "./i1.jpg"
import i2 from "./i2.jpg"
const Painting = () => {
  return (
    <section className="px-6 lg:px-20 mt-40 py-12 bg-white text-[#0a2b66]">
      <h2 className="text-3xl lg:text-5xl font-semibold mb-6">Painting</h2>
      <p className="text-lg leading-8 mb-2">
      Aside from all best gypsum works that our team offers, we also provide painting works. Our painters are very well skilled and having wide range of experience to undertake complete Interior and Exterior painting, Color consulting, Staining and color matching.
      </p>
      <p className='text-lg leading-8 mb-4'>Very well skilled and having wide range of experience Interior and Exterior painting Color consulting, Staining and color matching
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

export default Painting;
