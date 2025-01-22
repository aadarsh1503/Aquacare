import React, { useState, useEffect } from "react";
import logo from './logo.png';

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Close navbar when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false); // Close navbar on scroll
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <nav className="lg:hidden bg-dblack text-white px-6 py-4">
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-32 mr-2" />
          <h1 className="text-lg font-bold"></h1>
        </a>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      {isOpen && (
        <ul className="mt-4 space-y-4">
          {/* First Menu Item */}
          <li>
            <a href="/#about"
              className="hover:text-green-500 cursor-pointer flex justify-between items-center"
              onClick={() => toggleDropdown(1)}
            >
              About Us
            </a>
          </li>
          {/* Second Menu Item */}
          <li>
            <a href="/#services"
              className="hover:text-green-500 cursor-pointer flex justify-between items-center"
              onClick={() => toggleDropdown(2)}
            >
              Services
            </a>
          </li>

          {/* Fourth Menu Item */}
          <li>
            <a href="/#portfolio"
              className="hover:text-green-500 cursor-pointer flex justify-between items-center"
              onClick={() => toggleDropdown(4)}
            >
              Portfolio
            </a>
          </li>

          {/* Buttons */}
          <a href="/contact" className="space-y-4">
            <button className="block w-full bg-dpink mt-4 text-white px-4 py-2 rounded hover:bg-lime-400">
              Request a Quote
            </button>
          </a>
        </ul>
      )}
    </nav>
  );
}

export default MobileNavbar;
