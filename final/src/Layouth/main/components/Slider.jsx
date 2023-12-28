import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { motion, AnimatePresence } from 'framer-motion';
import './scss/Slider.scss';
import {Link} from "react-router-dom"
function Slider() {



  const [spring, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const containerRef = useRef(null);

  const trans = (x, y) => `translate(${x}px, ${y}px)`;

  useEffect(() => {
    const container = containerRef.current;

    // keyframes
    const animateContinuous = () => {
      const update = () => {
        const x = Math.cos(Date.now() * 0.001) * 50;
        const y = Math.sin(Date.now() * 0.001) * 50;
        set({ xy: [x, y] });
        requestAnimationFrame(update);
      };

      update();
    };

    animateContinuous();

    // Manual
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = -(e.clientX - rect.left - rect.width / 2) / 5;
      const y = -(e.clientY - rect.top - rect.height / 2) / 5;
      set({ xy: [x, y] });
    };

    const handleMouseLeave = () => {
      set({ xy: [0, 0] });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Temizleme
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [set]);

  useEffect(() => {
    const initialAnimation = () => {
      set({ xy: [100, 100] }); 
      set({ xy: [0, 0], config: { duration: 1000 } }); 
    };

    initialAnimation();

  }, [set]);

  return (
    <>
      <div className='animated-image-container' ref={containerRef}>
        <div className='overflow-effect'></div>
        <div className='ove'>
          <animated.img
            src="https://eme-2.myshopify.com/cdn/shop/files/mid_slider_2.png?v=1654685689"
            alt=""
            className='animated-image'
            style={{
              transform: spring.xy.interpolate(trans),
            }}
          />
          <div className="content-container">
           <div className='content-cont'>
           <p className="text-gray-600 mb-4">New collection A-W ss17</p>
            <h2 className=" mt-10 text-6xl leading-[70px] max-w-sm mb-6 font-bold">Blazer Collection.</h2>
            <Link to={"/shop"} className=" uppercase px-8 py-3  bg-blue-950 text-white hover:bg-blue-800 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none">
              Shop now
            </Link>
           </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Slider;
