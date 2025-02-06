import React, { useState, useEffect } from 'react';
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './logo.png';
import { useLocation } from 'react-router-dom'; // For React Router

const Navbar = () => {
  const location = useLocation(); // For React Router
  
  const isContactPage = location.pathname === '/contact' || location.pathname === '/privacy-policy';

  const [isVisible, setIsVisible] = useState(true); // State to track visibility of navbar
  const [prevScrollPos, setPrevScrollPos] = useState(0); // State to track previous scroll position
  const [isScrolled, setIsScrolled] = useState(false); // State to track if the user has scrolled

  const isActive = (path) => {
    const currentPath = window.location.pathname - window.location.hash; // Combine pathname and hash
    return currentPath === path; // Check if the combined path matches the target path
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(currentScrollPos > 50); // Check if the user scrolled past 50px
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10); // Show navbar on scroll up
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`z-10 fixed hidden lg:block top-0 left-0 w-full transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isContactPage
          ? 'bg-dblack shadow-lg'
          : isScrolled
          ? 'bg-dblack bg-opacity-100 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Top Navbar */}
      <div className='bg-dblack'>
        <div className='py-2 max-w-7xl mx-auto'>
          <div className='container mx-auto z-10 flex justify-between items-center'>
            {/* Left Side: Mobile number and address */}
            <div className='flex flex-wrap items-center space-x-6 z-10 -ml-4 relative top-1 text-white text-sm'>
              {/* Phone */}
              <a href='tel:+97339390050' className='flex items-center hover:underline'>
                <FaPhoneAlt className='mr-2' />
                +973 39390050
              </a>

              {/* Email */}
              <a href='mailto:info@aquacare.me' className='flex items-center hover:underline'>
                <FaEnvelope className='mr-2' />
                info@aquacare.me
              </a>

              {/* Address */}
              <a
                href='https://maps.google.com/?q=P.O Box: 54121, Manama, Kingdom of Bahrain'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center hover:underline'
              >
                <FaMapMarkerAlt className='mr-2' />
                P.O Box: 54121, Manama, Kingdom of Bahrain
              </a>
            </div>

            {/* Right Side: Social Icons */}
            <div className='flex space-x-4 relative top-1 text-white'>
              <a
                href='https://www.instagram.com/aquacare514/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlineInstagram className='text-2xl hover:text-dyellow' />
              </a>
              <a
                href='https://www.facebook.com/profile.php?id=61572486478720'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlineFacebook className='text-2xl hover:text-dyellow' />
              </a>
              <a href='https://x.com/aquacarebh' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faXTwitter} className='text-2xl hover:text-dyellow' />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className='max-w-7xl mx-auto py-4'>
        <div className='container mx-auto flex justify-between items-center'>
          {/* Logo */}
          <a href='/' className='flex items-center z-10 space-x-2'>
            <img src={logo} alt='Logo' className='h-16 w-full' />
          </a>

          {/* Navbar Menu */}
          <div className='hidden lg:flex z-10 items-center justify-between text-white font-poppins text-17px'>
            <div className='flex space-x-8'>
              <a
                href='/'
                className={`border-b-2 mt-6 ${
                  isActive('/') ? 'border-white' : 'border-transparent hover:border-white'
                }`}
              >
                Home
              </a>
              <a
                href='/#about'
                className={`border-b-2 mt-6 ${
                  isActive('/#about') ? 'border-white' : 'border-transparent hover:border-white'
                }`}
              >
                About Us
              </a>
              <a
                href='/#services'
                className={`border-b-2 mt-6 ${
                  isActive('/#services') ? 'border-white' : 'border-transparent hover:border-white'
                }`}
              >
                Services
              </a>
              <a
                href='/#portfolio'
                className={`border-b-2 mt-6 ${
                  isActive('/#portfolio') ? 'border-white' : 'border-transparent hover:border-white'
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

          {/* Mobile Menu */}
          <div className='lg:hidden flex items-center space-x-4'>
            <button className='text-white'>Menu</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
