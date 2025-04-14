import React, { useState, useEffect } from "react";
import logo from './logo.png';

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const services = [
    { name: 'Construction & Maintenance', link: '/construction&Maintenance' },
    { name: 'Electric', link: '/electrical' },
    { name: 'Plumbing', link: '/plumbing' },
    { name: 'Painting', link: '/painting' },
    { name: 'Gypsum', link: '/gypsum' },
    { name: 'Water Features', link: '/water-Features' },
    { name: 'Swimming Pool', link: '/swimmingPool' },
    { name: 'Jacuzzi And Sauna', link: '/jacuzzi&Sauna' },
    { name: 'Splash Pads & SprayPark', link: '/splashPads' },
    { name: 'Fitted Bathrooms', link: '/fittedBathrooms' },
  ];

  return (
    <nav className="lg:hidden bg-dblack text-white px-6 py-4">
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-32 mr-2" />
        </a>
        <button
          className="text-white focus:outline-none text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <ul className="mt-4 space-y-4">
          <li>
            <a
              href="/#about"
              className="hover:text-green-500 cursor-pointer flex justify-between items-center"
              onClick={() => toggleDropdown(null)}
            >
              About Us
            </a>
          </li>

          <li>
            <div
              className="hover:text-green-500 cursor-pointer flex justify-between items-center"
              onClick={() => toggleDropdown(2)}
            >
              Services
              <span className="ml-2">{activeDropdown === 2 ? "▲" : "▼"}</span>
            </div>
            {activeDropdown === 2 && (
              <ul className="ml-4 mt-2 space-y-2 text-sm text-gray-300">
                {services.map((service, idx) => (
                  <li key={idx}>
                    <a href={service.link} className="hover:text-white block">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <a
              href="/#portfolio"
              className="hover:text-green-500 cursor-pointer flex justify-between items-center"
              onClick={() => toggleDropdown(null)}
            >
              Portfolio
            </a>
          </li>

          <li>
            <a href="/contact">
              <button className="block w-full bg-dpink mt-4 text-white px-4 py-2 rounded hover:bg-lime-400">
                Request a Quote
              </button>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default MobileNavbar;
