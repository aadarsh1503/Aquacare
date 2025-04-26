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
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(currentScrollPos > 50);
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (section) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${section}`;
    } else {
      const target = document.querySelector(`[data-section="${section}"]`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  const isActive = (path) => {
    return location.pathname === path;
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
      style={{
        // Safari specific fixes
        WebkitTransform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        WebkitTransition: '-webkit-transform 300ms ease',
      }}
    >
      {/* Top Navbar */}
      <div 
        className={`${isScrolled ? 'bg-dblack/80' : isSpecialPage ? 'bg-dblack' : 'bg-dblack/80'}`}
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)', // Safari specific
        }}
      >
        <div className='py-2 max-w-7xl mx-auto'>
          <div className='container mx-auto z-10 flex justify-between items-center'>
            {/* Left Side: Mobile number and address */}
            <div className='flex flex-wrap items-center space-x-6 z-10 -ml-4 relative top-1 text-white text-sm'>
              <a href='tel:+97339390050' className='flex items-center hover:hover:underline underline-offset-4 transition-colors'>
                <FaPhoneAlt className='mr-2' />
                +973 39390050
              </a>

              <a href='mailto:info@aquacare.me' className='flex items-center hover:hover:underline underline-offset-4 transition-colors'>
                <FaEnvelope className='mr-2' />
                info@aquacare.me
              </a>

              <a
                href='https://www.google.com/maps?q=26.201798,50.533029'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center hover:hover:underline underline-offset-4 transition-colors'
              >
                <FaMapMarkerAlt className='mr-2' />
                P.O Box: 54121, Manama, Kingdom of Bahrain
              </a>
            </div>

            {/* Right Side: Social Icons */}
            <div className='flex space-x-4 relative top-1 text-white'>
              <a
                href='https://instagram.com/aquacarebh'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlineInstagram className='text-2xl hover:hover:underline underline-offset-4 transition-colors' />
              </a>
              <a
                href='https://www.facebook.com/profile.php?id=61572486478720'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlineFacebook className='text-2xl hover:hover:underline underline-offset-4 transition-colors' />
              </a>
              <a href='https://x.com/aquacarebh' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faXTwitter} className='text-2xl hover:hover:underline underline-offset-4 transition-colors' />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`mx-auto py-4 ${
          isScrolled 
            ? 'bg-dblack/80' 
            : isSpecialPage 
              ? 'bg-dblack' 
              : location.pathname === '/' 
                ? 'bg-dblack/10' 
                : 'bg-dblack/80'
        }`}
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)', // Safari specific
        }}
      >
        <div className='container mx-auto max-w-7xl flex justify-between items-center'>
          {/* Logo */}
          <a href='/' className='flex items-center z-10 space-x-2'>
            <img src={logo} alt='Logo' className='h-16 w-full' style={{ objectFit: 'contain' }} />
          </a>

          {/* Navbar Menu */}
          <div className='hidden lg:flex z-10 items-center justify-between text-white font-poppins text-17px'>
            <div className='flex space-x-8'>
              <a
                href='/'
                className={`mt-6 hover:hover:underline underline-offset-4 transition-colors ${isActive('/') ? 'hover:underline underline-offset-4' : ''}`}
              >
                Home
              </a>
              <a
                href="/#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className={`mt-6 hover:hover:underline underline-offset-4 transition-colors ${
                  location.pathname === '/' && window.location.hash === '#about' ? 'hover:underline underline-offset-4 ' : ''
                }`}
              >
                About Us
              </a>
              
              {/* Projects Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProjectsHovered(true)}
                onMouseLeave={() => setIsProjectsHovered(false)}
              >
                <div className={`flex items-center mt-6 cursor-pointer transition-colors ${
                  isActive('/our-Projects') || isActive('/recent-Projects') || isProjectsHovered ? '' : ''
                }`}>
                  <span className="mr-1">
                    Projects
                  </span>
                  <FaChevronDown className="text-xs mt-1" />
                </div>
                
                {isProjectsHovered && (
                  <div 
                    className="absolute -left-10 mt-2 rounded-xl top-10 w-48 bg-white/90 shadow-lg z-50"
                    style={{
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)', // Safari specific
                    }}
                  >
                    {projectsItems.map((project, index) => (
                      <a
                        key={index}
                        href={project.link}
                        className="block px-4 py-3 text-dblack hover:bg-gray-100/50 rounded-xl border-b border-gray-100 last:border-b-0 transition-colors"
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
                <div className={`flex items-center mt-6 transition-colors ${
                  isServicesHovered || 
                  servicesItems.some(item => isActive(item.link)) ? '' : ''
                }`}>
                  <a
                    href='/#services'
                    className="mr-1"
                  >
                    Services
                  </a>
                  <FaChevronDown className="text-xs mt-1" />
                </div>
                
                {isServicesHovered && (
                  <div 
                    className="absolute -left-16 mt-2 rounded-xl top-10 w-64 bg-white/90 shadow-lg z-50"
                    style={{
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)', // Safari specific
                    }}
                  >
                    {servicesItems.map((service, index) => (
                      <a
                        key={index}
                        href={service.link}
                        className="block px-4 py-3 text-dblack hover:bg-gray-100/50 rounded-xl border-b border-gray-100 last:border-b-0 transition-colors"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="/#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('portfolio');
                }}
                className={`mt-6 hover:hover:underline underline-offset-4 transition-colors ${
                  location.pathname === '/' && window.location.hash === '#portfolio' ? 'hover:underline underline-offset-4' : ''
                }`}
              >
                Portfolio
              </a>
            </div>

            <div className='ml-8 mt-6 font-poppins'>
              <a
                href='/contact'
                className='px-6 py-3 bg-dpink text-white shadow-lg hover:bg-hpink hover:shadow-xl transition duration-300'
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