import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { FilterContext } from '../FilterContext';
import { FaHeart } from 'react-icons/fa';

function Cart() {
  const {  productwf } = useContext(FilterContext);

 console.log(productwf,'---------fdf-----')
 const newArray = Array.from({ length: productwf.rating }, (_, index) => index + 1);


  return (
    <div className="container mx-auto my-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {productwf && productwf.map((productwf) => (
      <div key={productwf.id} className="group relative overflow-hidden bg-white border rounded-lg shadow-md">
        <Link to={`/home/${productwf.id}`} className="relative overflow-hidden aspect-w-2 aspect-h-3">
          <img
            className="object-cover w-full h-96 transform scale-100 group-hover:scale-105 transition-transform duration-300"
            src={productwf.image}
            alt={productwf.name}
          />
          <HoverImageEffect hoverImage={productwf.image} />
        </Link>
        <div className="p-4">
          <h5 className="text-lg font-semibold text-gray-900 dark:text-white">{productwf.name}</h5>
          <div className="star-container flex items-center space-x-1 rtl:space-x-reverse">
            {/* Render stars */}
            {newArray.map((star) => (
              <svg key={star} className="star-icon w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
            {/* Render rating count */}
            <span className="rating-count bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 mt-5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              {productwf.rating}
            </span>
          </div>
  
          <div className="flex items-center justify-between mt-2.5">
            <span className="text-md font-bold text-gray-900 dark:text-white">{productwf.price} azn</span>
            <div className="flex items-center space-x-2">
              <button className="text-black px-2 py-2 text-sm  rounded-lg hover:bg-red-700 hover:text-white transition-all duration-300 border border-black">Sebete At</button>
              <button className="wishlist-button bg-red-500 text-white px-4 py-2 rounded-lg border border-gray-500 hover:bg-white hover:text-black transition-all duration-300">
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
    {productwf.length === 0 && (
      <h1 className='text-red-900 uppercase font-bold'>Bağışlayın, məlumat yoxdur.</h1>
    )}
  </div>
  
    
  );
}

const HoverImageEffect = ({ hoverImage }) => {
  const [hover, setHover] = useState(false);

  const imageSpring = useSpring({
    opacity: hover ? 1 : 0,
    transform: hover ? 'scale(1)' : 'scale(0.8)',
  });

  return (
    <animated.img
      className="absolute inset-0 w-full h-full object-cover"
      src={hoverImage}
      alt="hover image"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={imageSpring}
    />
  );
};

export default Cart;
