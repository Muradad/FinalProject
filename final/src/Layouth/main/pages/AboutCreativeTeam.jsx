import React from 'react';
import Slider from 'react-slick';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DatamMenim from './AboutCreativeData';
import 'tailwindcss/tailwind.css';


function AboutCreativeTeam() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false,

    
    
  };

  return (
    <div className='bg-gradient-to-b  from-black to-blue-200 text-white py-16 mt-32'>
      <div className='text-center mb-12'>
        <p className='text-sm font-extrabold text-white'>Subtitle</p>
        <h1 className='text-blue-500 text-[3rem]'>Creative Team</h1>
      </div>

      <Slider {...settings} className='mx-auto max-w-5xl'>
        {DatamMenim.map(item => (
          <div key={item.id} className='relative text-center'>
            {/* Social Icons */}
            <div className='cursor-pointer absolute top-1/2 flex left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-4 z-10'>
              <FaFacebook className='text-blue-700 text-xl' />
              <FaInstagram className='text-blue-900 text-xl' />
              <FaLinkedin className='text-blue-400 text-xl' />
            </div>

            {/* User Image */}
            <img
              src={item.img}
              alt={item.author}
              className=' cursor-default mx-auto w-40 h-40 rounded-full mb-4 border-4 border-white relative z-0'
            />

            {/* User Information */}
            <h2 className='text-3xl font-semibold mb-2 text-gray-600 '>{item.title}</h2>
            <p className='text-white text-sm'>{item.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AboutCreativeTeam;
