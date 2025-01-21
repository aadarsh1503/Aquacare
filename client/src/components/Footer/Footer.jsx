import React from 'react';
import { AiOutlineMail, AiOutlineArrowRight } from 'react-icons/ai';
import logo from "./logo.png"
const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Logo Section */}
          <div className="w-full sm:w-1/4 mb-6">
  <img 
    src={logo} 
    alt="Plumbing Logo" 
    className="h-16 w-auto" 
  />
</div>

          {/* Office Section */}
          <div className="w-full sm:w-1/4 mb-6">
  <h2 className="text-lg font-semibold mb-6">Office</h2>
  <a 
    href="https://www.google.com/maps?q=26.201798,50.533029" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block hover:underline"
  >
    P.O Box: 54121, Manama<br /> Kingdom of Bahrain
  </a>
  <a 
    href="mailto:info@aquacare.me" 
    className="block mt-4 hover:underline"
  >
    info@aquacare.me
  </a>
  <a 
    href="tel:+97317400690" 
    className="block mt-4 hover:underline"
  >
    +973 17400690
  </a>
</div>


          {/* Links Section */}
          <div className="w-full sm:w-1/4 mb-6">
            <h2 className="text-lg font-semibold mb-4">Links</h2>
            <ul className="space-y-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full sm:w-1/4 mb-6">
            <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
            <div className="flex items-center space-x-2 border-b border-gray-600 pb-2">
              <AiOutlineMail className="text-xl" />
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-transparent outline-none placeholder-gray-400 w-full"
              />
              <AiOutlineArrowRight className="text-xl cursor-pointer" />
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" id="privacy" className="mr-2" />
              <label htmlFor="privacy" className="text-sm">
                I agree to the <a href="#" className="underline">Privacy Policy</a>.
              </label>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-800 pt-4 text-left">
          <p className="text-sm">Aquacare &copy; 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
