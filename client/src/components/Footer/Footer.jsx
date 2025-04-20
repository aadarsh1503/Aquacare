import React, { useState } from "react";
import { AiOutlineMail, AiOutlineArrowRight, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "./logo.png";

const Footer = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const servicesItems = [
    { name: 'Construction & Maintenance', link: '/construction&Maintenance' },
    { name: 'Electric', link: '/electrical' },
    { name: 'Plumbing', link: '/plumbing' },
    { name: 'Painting', link: '/painting' },
    { name: 'Gypsum', link: '/gypsum' },
    { name: 'Water Features', link: '/water-Features' },
    { name: 'Swimming Pool', link: '/swimmingPool' },
    { name: 'Jacuzzi And Sauna', link: '/jacuzzi&Sauna' },
    { name: 'Splash Pads & SprayPark', link: '/splashPads' },
    { name: 'Fitted Bathrooms', link: '/fittedBathrooms' }
  ];

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleEmailSubmit = () => {
    if (!isChecked) {
      toast.error("Please agree to the Privacy Policy before submitting.");
      return;
    }

    if (!email.trim()) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success("Email submitted successfully!");
    setEmail(""); // Clear email input field
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Logo Section */}
          <div className="w-full sm:w-1/4 mb-6">
            <img src={logo} alt="Plumbing Logo" className="h-24 w-auto" />
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
            <a href="mailto:info@aquacare.me" className="block mt-4 hover:underline">
              info@aquacare.me
            </a>
            <a href="tel:+97339390050" className="block mt-4 hover:underline">
              +973 39390050
            </a>
          </div>

          {/* Links Section */}
          <div className="w-full sm:w-1/4 mb-6">
            <h2 className="text-lg font-semibold mb-4">Links</h2>
            <ul className="space-y-4">
              <li>
                <a href="/" className="hover:underline">Home</a>
              </li>
              <li className="relative">
                <div 
                  className="flex items-center hover:underline cursor-pointer"
                  onClick={toggleServicesDropdown}
                >
                  <span>Services</span>
                  {isServicesOpen ? (
                    <AiOutlineUp className="ml-1" />
                  ) : (
                    <AiOutlineDown className="ml-1" />
                  )}
                </div>
                {isServicesOpen && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {servicesItems.map((service, index) => (
                      <li key={index}>
                        <a 
                          href={service.link} 
                          className="text-sm hover:underline block py-1"
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <a href="/#about" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="/our-Projects" className="hover:underline">Our Projects</a>
              </li>
              <li>
                <a href="/recent-Projects" className="hover:underline">Recent Projects</a>
              </li>
              <li>
                <a href="/#portfolio" className="hover:underline">Portfolio</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full sm:w-1/4 mb-6">
            <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
            <div className="flex items-center space-x-2 border-b border-gray-600 pb-2">
              <AiOutlineMail className="text-xl" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
                className="bg-transparent outline-none placeholder-gray-400 w-full"
              />
              <AiOutlineArrowRight
                className="text-xl cursor-pointer"
                onClick={handleEmailSubmit}
              />
            </div>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="privacy"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="privacy" className="text-sm">
                I agree to the <a href="/privacy-policy" className="underline">Privacy Policy</a>.
              </label>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t border-gray-800 pt-4 text-left">
          <p className="text-sm">Aquacare &copy; 2025. All Rights Reserved.</p>
        </div>
      </div>
      <ToastContainer />
    </footer>
  );
};

export default Footer;