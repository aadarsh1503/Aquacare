import React from 'react';
import i1 from "./i1.jpg";
import i2 from "./i2.jpg";
import i3 from "./i3.jpg";
import i4 from "./i4.webp";
import i5 from "./i5.jpeg";
import i6 from "./i6.jpg";

const portfolioItems = [
  {
    image: i1,
    title: 'FITTED BATHROOMS',
    category: '',
  },
  {
    image: i2,
    title: 'SHOWERS',
    category: '',
  },
  {
    image: i3,
    title: 'SINKS, BASINS',
    category: '',
  },
  {
    image: i4,
    title: 'DISHWASHER INSTALLATIONS',
    category: '',
  },
  {
    image: i5,
    title: 'WASHING MACHINE INSTALLATIONS',
    category: '',
  },
  {
    image: i6,
    title: 'WASTE DISPOSAL INSTALLATIONS',
    category: '',
  },
];

const PortfolioSection = () => {
  return (
    <div id='portfolio' className="bg-dblack py-12">
        <h1 className='text-center text-white text-3xl mb-10  '>PORTFOLIOS</h1>
      <div className="container max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            {/* Image container */}
            <div className="relative group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full lg:p-0 p-4 h-[430px] object-cover transition-all duration-700 ease-in-out transform group-hover:wave-effect"
              />
            </div>
            {/* Text container outside the image div */}
            <div className="p-4 text-center">
              <h3 className="text-lg text-white font-semibold">{item.title}</h3>
              <p className="text-white">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
