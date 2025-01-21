import React from 'react';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div className='bg-black'>
      {/* Top Navbar */}
      <div className=" py-2 max-w-7xl mx-auto">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Side: Mobile number and address */}
          <div className="flex space-x-6 -ml-8 text-white text-sm">
  <p className="flex items-center">
    <FaPhoneAlt className="mr-2" />
    +1 234 567 890
  </p>
  <p className="flex items-center">
    <FaMapMarkerAlt className="mr-2" />
    123 Street Name, City, Country
  </p>
</div>

          {/* Right Side: Social Icons */}
          <div className="flex space-x-4 text-white">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <AiOutlineInstagram className="text-2xl hover:text-dyellow" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <AiOutlineFacebook className="text-2xl hover:text-dyellow" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <AiOutlineTwitter className="text-2xl hover:text-dyellow" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <AiOutlineLinkedin className="text-2xl hover:text-dyellow" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-transparent max-w-7xl z-10 mx-auto py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center z-10 space-x-2">
            <img src="https://www.aquacare.me/img/logo.png" alt="Logo" className="h-10" />
          </div>

          {/* Navbar Menu */}
          <div className="hidden lg:flex z-10 space-x-8 text-lg text-white">
  <a href="#home" className="border-b-2 border-transparent hover:border-white ">Home</a>
  <a href="#pages" className="border-b-2 border-transparent hover:border-white ">Pages</a>
  <a href="#portfolio" className="border-b-2 border-transparent hover:border-white ">Portfolio</a>
  <a href="#blog" className="border-b-2 border-transparent hover:border-white ">Blog</a>
  <a href="#shop" className="border-b-2 border-transparent hover:border-white ">Shop</a>
  <a href="#contact" className="border-b-2 border-transparent hover:border-white ">Contact</a>
  <a href="#quote" className="border-b-2 border-transparent hover:border-white ">Request a Quote</a>
</div>



          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center space-x-4">
            <button className="text-white">Menu</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
