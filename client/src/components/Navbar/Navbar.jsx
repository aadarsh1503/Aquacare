import React, { useState, useEffect } from 'react';
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './logo.png';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isSpecialPage = location.pathname === '/contact' || 
    location.pathname === '/privacy-policy' || 
    location.pathname === '/construction&Maintenance' || 
    location.pathname === '/electrical' || 
    location.pathname === '/plumbing' || 
    location.pathname === '/painting' || 
    location.pathname === '/gypsum' || 
    location.pathname === '/water-Features' || 
    location.pathname === '/our-Projects' ||
    location.pathname === '/swimmingPool' ||
    location.pathname === '/jacuzzi&Sauna' ||
    location.pathname === '/fittedBathrooms' ||
    location.pathname === '/splashPads' ||
    location.pathname === '/recent-Projects';

  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);

  useEffect(() => {
    // Handle scroll when landing on page with hash
    if (location.pathname === '/' && window.location.hash) {
      const section = window.location.hash.substring(1); // Remove the #
      const target = document.querySelector(`[data-section="${section}"]`);
      if (target) {
        // Small timeout to ensure DOM is ready
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const scrollToSection = (section) => {
    if (location.pathname !== '/') {
      // Navigate to home page with hash
      window.location.href = `/#${section}`;
      // The actual scrolling will happen after the page loads
    } else {
      // If already on home page, just scroll to section
      const target = document.querySelector(`[data-section="${section}"]`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        // Update URL hash without page reload
        window.history.pushState(null, null, `#${section}`);
      }
    }
  };
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const isSectionActive = (section) => {
    return location.pathname === '/' && window.location.hash === `#${section}`;
  };

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

  const projectsItems = [
    { name: 'Our Projects', link: '/our-Projects' },
    { name: 'All Projects', link: '/recent-Projects' }
  ];

  return (
    <div
      className={`z-50 fixed hidden lg:block top-0 left-0 w-full transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Top Navbar */}
      <div className={`${isScrolled ? 'bg-dblack/30 backdrop-blur-md' : isSpecialPage ? 'bg-dblack' : 'bg-dblack/80 backdrop-blur-md'}`}>
        <div className='py-2 max-w-7xl mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            {/* Left Side: Mobile number and address */}
            <div className='flex flex-wrap justify-center md:justify-start items-center space-x-2 md:space-x-6 z-10 text-white text-xs md:text-sm mb-2 md:mb-0'>
              <a href='tel:+97339390050' className='flex items-center hover:underline underline-offset-4 transition-colors whitespace-nowrap'>
                <FaPhoneAlt className='mr-2' />
                +973 39390050
              </a>

              <a href='mailto:info@aquacare.me' className='flex items-center hover:underline underline-offset-4 transition-colors whitespace-nowrap'>
                <FaEnvelope className='mr-2' />
                info@aquacare.me
              </a>

              <a
                href='https://www.google.com/maps?q=26.201798,50.533029'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center hover:underline underline-offset-4 transition-colors whitespace-nowrap'
              >
                <FaMapMarkerAlt className='mr-2' />
                P.O Box: 54121, Manama, Bahrain
              </a>
            </div>

            {/* Right Side: Social Icons */}
            <div className='flex space-x-4 text-white'>
              <a
                href='https://instagram.com/aquacarebh'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlineInstagram className='text-xl md:text-2xl hover:underline underline-offset-4 transition-colors' />
              </a>
              <a
                href='https://www.facebook.com/profile.php?id=61572486478720'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlineFacebook className='text-xl md:text-2xl hover:underline underline-offset-4 transition-colors' />
              </a>
              <a href='https://x.com/aquacarebh' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faXTwitter} className='text-xl md:text-2xl hover:underline underline-offset-4 transition-colors' />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`mx-auto py-4 ${
        isScrolled 
          ? 'bg-dblack/80 backdrop-blur-md' 
          : isSpecialPage 
            ? 'bg-dblack' 
            : location.pathname === '/' 
              ? 'bg-dblack/30 backdrop-blur-sm' 
              : 'bg-dblack/80 backdrop-blur-md'
      }`}>
        <div className='container mx-auto max-w-7xl px-4 flex justify-between items-center'>
          {/* Logo */}
          <a href='/' className='flex items-center z-10'>
            <img src={logo} alt='Logo' className='h-16 w-auto' />
          </a>

          {/* Navbar Menu */}
          <div className='hidden lg:flex z-10 items-center text-white font-poppins text-base'>
            <div className='flex items-center space-x-8'>
              <a
                href='/'
                className={`transition-colors ${isActive('/') ? '' : 'hover:text-gray-300'}`}
              >
                Home
              </a>
              <button
  onClick={() => scrollToSection('about')}
  className={`transition-colors ${isSectionActive('about') ? '' : 'hover:text-gray-300'}`}
>
  About Us
</button>
              
              {/* Projects Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProjectsHovered(true)}
                onMouseLeave={() => setIsProjectsHovered(false)}
              >
                <div className={`flex items-center cursor-pointer transition-colors ${
                  isActive('/our-Projects') || isActive('/recent-Projects') ? '' : 'hover:text-gray-300'
                }`}>
                  <span className="mr-1">
                    Projects
                  </span>
                  <FaChevronDown className="text-xs mt-1" />
                </div>
                
                {isProjectsHovered && (
                  <div className="absolute -left-10 mt-0 rounded-xl top-full w-48 bg-white/90 backdrop-blur-md shadow-lg z-50">
                    {projectsItems.map((project, index) => (
                      <a
                        key={index}
                        href={project.link}
                        className={`block px-4 py-3 text-dblack hover:bg-gray-100/50 rounded-xl border-b border-gray-100 last:border-b-0 transition-colors ${
                          isActive(project.link) ? 'font-semibold' : ''
                        }`}
                      >
                        {project.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
              >
                <div className={`flex items-center transition-colors ${
                  isServicesHovered || 
                  servicesItems.some(item => isActive(item.link)) ? '' : 'hover:text-gray-300'
                }`}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="mr-1"
                  >
                    Services
                  </button>
                  <FaChevronDown className="text-xs mt-1" />
                </div>
                
                {isServicesHovered && (
                  <div className="absolute -left-16 mt-0 rounded-xl top-full w-64 bg-white/90 backdrop-blur-md shadow-lg z-50">
                    {servicesItems.map((service, index) => (
                      <a
                        key={index}
                        href={service.link}
                        className={`block px-4 py-3 text-dblack hover:bg-gray-100/50 rounded-xl border-b border-gray-100 last:border-b-0 transition-colors ${
                          isActive(service.link) ? 'font-semibold' : ''
                        }`}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <button
  onClick={() => scrollToSection('portfolio')}
  className={`transition-colors ${isSectionActive('portfolio') ? '' : 'hover:text-gray-300'}`}
>
  Portfolio
</button>
            </div>

            <div className='ml-8 font-poppins'>
              <a
                href='/contact'
                className='px-6 py-3 bg-dpink text-white shadow-lg hover:bg-hpink hover:shadow-xl transition duration-300 whitespace-nowrap'
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;