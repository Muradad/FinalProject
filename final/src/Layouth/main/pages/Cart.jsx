import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import "../pages/scss/Cart.scss"

function Cart() {
  const [hover, setHover] = useState(false);

  const imageSpring = useSpring({
    opacity: hover ? 1 : 0,
    transform: hover ? 'scale(1)' : 'scale(0.8)',
  });

  return (
    <div className=" w-full max-w-sm  overflow-hidden">
      <div
        className="  relative cursor-pointer"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        style={{ overflow: 'hidden' }}
      >
        <Link to={"/detail"} style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <animated.img
            className=""
            src="https://eme-2.myshopify.com/cdn/shop/products/6_e5f93193-cfdc-4f66-9e72-aec7de1dba78_360x.jpg?v=1655288184"
            alt="product image"
            style={imageSpring}
          />
          {!hover && (
            <img
              className=""
              src="https://eme-2.myshopify.com/cdn/shop/products/8_0e671cbf-a84e-48f6-bb89-ae8eb2df68a5_360x.jpg?v=1655357697"
              alt="product image"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          )}
        </Link>
      </div>
      <div className="cartRes px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
          <strong className='bg-blue-950 p-2 text-gray-300 rounded-sm hover:bg-blue-900 cursor-pointer duration-500'>Sebete At</strong>
        </div>
      </div>
    </div>
  );
}

export default Cart;
