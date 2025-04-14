import React from 'react';
import i1 from "./i1.jpg"
import i2 from "./i2.jpg"
import i3 from "./i3.avif"
import i4 from "./i4.jpg"


const WaterFeatures = () => {
  return (
    <section className="px-6 lg:px-20 mt-40 py-12 bg-gray-100 text-[#0a2b66]">
      <h2 className="text-3xl lg:text-5xl font-semibold mb-6">Water Features</h2>
      <p className="text-lg leading-8 mb-2">
      We render our client different water features take on many forms including Fountains, Water wall, reflection pools, cascades, waterfalls, rills, streams, formal pools, lakes and ponds. They bring life to architecture and landscape and the sight, sound and movement of water can transform a quiet, still space into a vibrant, stimulating environment. Aquacare’s creative use of water can create additional value to any project. Our fountain service lengthens the life of your fountain, maintaining the beauty and quality of your fountain.

      </p>
    
      <div className="max-w-5xl mx-auto py-10">
      {/* Row 1 */}
      <div className="grid grid-cols-2 gap-4">
        {/* Fountain */}
        <div className="relative">
          <div className="bg-green-500 text-white px-4 py-2 text-lg absolute top-0 left-0 z-10">
            Fountain
          </div>
          <img
            src={i1}
            alt="Fountain"
            className="w-full h-80 object-cover"
          />
        </div>
        {/* Cascades */}
        <div className="relative">
          <div className="bg-cyan-800 text-white px-4 py-2 text-lg absolute top-0 left-0 z-10">
            Cascades
          </div>
          <img
            src={i2}
            alt="Cascades"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Water wall */}
        <div className="relative">
          <div className="bg-green-500 text-white px-4 py-2 text-lg absolute top-0 left-0 z-10">
            Water wall
          </div>
          <img
            src={i3}
            alt="Water Wall"
            className="w-full h-80 object-cover"
          />
        </div>
        {/* Water falls */}
        <div className="relative">
          <div className="bg-cyan-800 text-white px-4 py-2 text-lg absolute top-0 left-0 z-10">
            Water falls
          </div>
          <img
            src={i4}
            alt="Water Falls"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </div>
    </section>
  );
};

export default WaterFeatures;
