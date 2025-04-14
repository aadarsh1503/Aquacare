import React from 'react';
import i1 from "./i1.jpg"
import i2 from "./i2.webp"
import i3 from "./i3.jpg"
import i4 from "./i4.jpg"
import i5 from "./i5.jpg"




const PoolTypesSection = () => {
  const pools = [
    { title: 'Infinity pool', color: 'bg-green-500', src: i1 },
    { title: 'Aquatic pool', color: 'bg-blue-800', src: i3 },
    { title: 'Long Island pool', color: 'bg-green-500', src: i2 },
    { title: 'Glass wall pool', color: 'bg-blue-800', src: i4 },
    { title: 'Above ground pool', color: 'bg-green-500', src: i5 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-6xl mx-auto">
      {/* First Row */}
      {pools.slice(0, 3).map((pool, index) => (
        <div key={index} className="relative">
          <div className={`text-white px-4 py-2 text-lg font-semibold absolute top-0 left-0 z-10 ${pool.color}`}>
            {pool.title}
          </div>
          <img
            src={pool.src}
            alt={pool.title}
            className="w-full h-64 object-cover"
          />
        </div>
      ))}

      {/* Second Row */}
      <div className="relative md:col-span-2">
        <div className="bg-blue-800 text-white px-4 py-2 text-lg font-semibold absolute top-0 left-0 z-10">
          Glass wall pool
        </div>
        <img
          src={pools[3].src}
          alt="Glass wall pool"
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="relative">
        <div className="bg-green-500 text-white px-4 py-2 text-lg font-semibold absolute top-0 left-0 z-10">
          Above ground pool
        </div>
        <img
          src={pools[4].src}
          alt="Above ground pool"
          className="w-full h-64 object-cover"
        />
      </div>
    </div>
  );
};

export default PoolTypesSection;
