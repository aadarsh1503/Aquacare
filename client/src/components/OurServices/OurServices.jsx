import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import i1 from "./i1.jpg"
import i3 from "./i3.jpg"
import i4 from "./i4.jpg"
import i5 from "./i5.jpg"
import i6 from "./i6.jpg"
import i2 from "./i2.jpg"
const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Plumbing Contracting and Maintenance",
      image: i1,
    },
    {
      id: 2,
      title: "Water Features",
      image: i3,
    },
    {
      id: 3,
      title: "Plumbing Installations",
      image: i2,
    },
    {
      id: 4,
      title: "Swimming Pools",
      image: i4,
    },
    {
      id: 5,
      title: "Jacuzzi and Sauna",
      image: i5,
    },
    {
      id: 6,
      title: "Splash Pads and Spray Parks",
      image: i6,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="services" className="bg-dblack py-10">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        OUR SERVICES
      </h2>
      <Slider {...settings}>
        {services.map((service) => (
          <div key={service.id} className="px-2">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[370px] object-fill"
              />
   <div className="absolute inset-0 mt-32 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              <div className="absolute inset-0 flex justify-start items-end p-4">
                <h3
                  className="text-white text-lg font-bold justify-end text-left overflow-hidden truncate"
                  title={service.title} // Tooltip for full text
                >
                  {service.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
  
  );
};

export default OurServices;
