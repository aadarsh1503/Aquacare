import React from 'react';
import i1 from "./i1.jpg"
import i2 from "./i2.jpg"
import i3 from "./i3.webp"
import i4 from "./i4.jpg"

const Jaccuzi = () => {
  return (
    <section className="px-6 lg:px-20 lg:mt-40 mt-0 py-12 bg-white text-[#0a2b66]">
      <h2 className="text-3xl lg:text-5xl font-semibold mb-6">Jacuzzi And Sauna</h2>
      <p className="text-lg leading-8 mb-2">
      The Installation team of Aqucare is always ready to make your leisure time to fully relax, chill out and rejuvenate in a quality Spa, Jacuzzi, steam room or sauna with Japanese style, European style, Arabian style, Asian classic style, and more styles that to suit all budgets.
Our team of specialist also ready with Engineering, Construction, Renovation, Service, Repair for your Themed Environments.

      </p>
    
           <div className="max-w-5xl mx-auto py-10">
      {/* Row 1 */}
      <div className="grid grid-cols-2 gap-4">
        {/* Fountain */}
        <div className="relative">
          <div className="bg-green-500 text-white px-4 py-2 text-lg absolute top-0 left-0 z-10">
            Japanese Spa
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
            Indoor Sauna
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
            Arabian Jacuzzi
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
            French Jacuzzi
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

export default Jaccuzi;
