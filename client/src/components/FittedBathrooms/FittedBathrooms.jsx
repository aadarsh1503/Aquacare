import React from 'react';
import i1 from "./i1.jpg"
import i2 from "./i2.webp"
import i3 from "./i3.jpg"
import i4 from "./i4.jpg"
import i5 from "./i5.jpg"
import i6 from "./i6.jpg"
import i7 from "./i7.webp"
import i8 from "./i8.jpg"




const FittedBathrooms = () => {
  return (
    <section className="px-6 lg:px-20 lg:mt-40 mt-0 py-12  text-[#0a2b66]">
      <h2 className="text-3xl lg:text-5xl max-w-6xl mx-auto font-semibold mb-6">Fitted Bathrooms</h2>
      <p className="text-lg leading-8 mb-2">
    

      </p>
    
      <div className="max-w-5xl mx-auto py-10">
      {/* Row 1 */}
      <div className="grid grid-cols-2 gap-4">
        {/* Fountain */}
        <div className="relative">
         
          <img
            src={i1}
            alt="Fountain"
            className="w-full h-80 object-cover"
          />
        </div>
        {/* Cascades */}
        <div className="relative">
         
          <img
            src={i4}
            alt="Cascades"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Water wall */}
        <div className="relative">
        
          <img
            src={i3}
            alt="Water Wall"
            className="w-full h-80 object-cover"
          />
        </div>
        {/* Water falls */}
        <div className="relative">

          <img
            src={i2}
            alt="Water Falls"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </div>

    <h2 className="text-3xl lg:text-5xl max-w-6xl mx-auto font-semibold mb-6">Sinks & Basins</h2>
      <p className="text-lg leading-8 mb-2">
    

      </p>
    
      <div className="max-w-5xl mx-auto py-10">
      {/* Row 1 */}
      <div className="grid grid-cols-2 gap-4">
        {/* Fountain */}
        <div className="relative">
         
          <img
            src={i5}
            alt="Fountain"
            className="w-full h-80 object-cover"
          />
        </div>
        {/* Cascades */}
        <div className="relative">
         
          <img
            src={i6}
            alt="Cascades"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>

     
     
    </div>

    <h2 className="text-3xl lg:text-5xl max-w-6xl mx-auto font-semibold mb-6">Washing Machine Installations</h2>
      <p className="text-lg leading-8 mb-2">
    

      </p>
    
      <div className="max-w-5xl mx-auto py-10">
      {/* Row 1 */}
      <div className="grid grid-cols-2 gap-4">
        {/* Fountain */}
        <div className="relative">
         
          <img
            src={i7}
            alt="Fountain"
            className="w-full h-80 object-cover"
          />
        </div>
        {/* Cascades */}
        <div className="relative">
         
          <img
            src={i8}
            alt="Cascades"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>

     
     
    </div>
    </section>
  );
};

export default FittedBathrooms;
