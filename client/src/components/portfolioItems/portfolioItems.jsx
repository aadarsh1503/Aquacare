import React, { useRef ,useEffect } from 'react';
import i1 from "./i1.jpg";
import i2 from "./i2.jpg";
import i3 from "./i3.jpg";
import i4 from "../../assets/images/i4.webp";
import i5 from "./i5.jpeg";
import i6 from "./i6.jpg";
import i7 from "./i7.jpg";
import i8 from "./i8.jpg";
import i9 from "./i9.jpg";
import i11 from "./i11.jpeg";
import "../../App.css";

const portfolioItems = [
  {
    image: i8,
    title: 'CONSTRUCTION SERVICES',
    category: '',
  },
  {
    image: i1,
    title: 'FITTED BATHROOMS',
    category: '',
  },
  {
    image: i2,
    title: 'SHOWERS',
    category: '',
  },
  {
    image: i3,
    title: 'SINKS, BASINS',
    category: '',
  },
  {
    image: i4,
    title: 'DISHWASHER INSTALLATIONS',
    category: '',
  },
  {
    image: i5,
    title: 'WASHING MACHINE INSTALLATIONS',
    category: '',
  },
  {
    image: i6,
    title: 'WASTE DISPOSAL INSTALLATIONS',
    category: '',
  },
    {
    image:i7,
    title: 'ELECTRICAL INSTALLATIONS',
    category: '',
  },

  {
    image: i9,
    title: 'GYPSUM WORKS',
    category: '',
  },
  {
    image: i11,
    title: 'PAINTING SERVICES',
    category: '',
  },
];

const PortfolioSection = () => {
  const portfolioRef = useRef(null);
  const hasScrolled = useRef(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.location.hash === '#portfolio') {
        const element = document.getElementById('portfolio');
        if (element) {
          const navbarHeight = 120; // Adjust to match your navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          // First jump immediately to the correct position
          window.scrollTo({
            top: offsetPosition,
            behavior: 'auto'
          });

          // Then smooth scroll to ensure proper positioning
          setTimeout(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 50);
        }
      }
    };

    // Run on initial mount
    handleScroll();

    // Also handle hash changes
    window.addEventListener('hashchange', handleScroll);
    return () => window.removeEventListener('hashchange', handleScroll);
  }, []);


  return (
    <div 
 
    className="bg-dblack py-12"
    style={{ 
      scrollMarginTop: '120px',
      scrollSnapMargin: '120px' // For older browsers
    }}
  >
      <h1 className='text-center text-white text-3xl mb-10'>PORTFOLIOS</h1>
      <div className="container max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <div className="relative group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full lg:p-0 p-4 h-[430px] object-cover transition-all duration-700 ease-in-out transform group-hover:wave-effect"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg text-white font-semibold">{item.title}</h3>
              <p className="text-white">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;