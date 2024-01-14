import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { FaHeart } from 'react-icons/fa';
import { BasketContext } from '../../../Context/BasketContext';
import "../pages/scss/Cart.scss"
import { WishlistContext } from '../../../context/WishListContext';

const Cart = ({ product }) => {
  const { basket, setBasket, GoBasket } = useContext(BasketContext);
  const { GoWish } = useContext(WishlistContext);

  console.log(product)
  const [hover, setHover] = useState(false);
  
  const imageSpring = useSpring({
    opacity: hover ? 1 : 0.9,
    transform: hover ? 'scale(1.05)' : 'scale(1)',
  });

  const newArray = Array.from({ length: product.rating }, (_, index) => index + 1);

  const handleHover = (isHovered) => {
    setHover(isHovered);
  };


  return (
    <div className="cart-container w-full max-w-sm overflow-hidden bg-white border rounded-md shadow-md transition-transform duration-300 transform hover:shadow-lg">
      <div
        className="image-container relative cursor-pointer overflow-hidden rounded-t-md"
        onMouseOver={() => handleHover(true)}
        onMouseOut={() => handleHover(false)}
      >
        <Link to={`${product.id}`} className="image-link block">
          <animated.img className="product-image w-full h-auto" src={product.image} style={imageSpring} alt={product.name} />
          {!hover && (
            <img className="hover-image w-full h-auto absolute top-0 left-0" src={product.hoverimage} alt={`${product.name} hover`} />
          )}
        </Link>
      </div>
      <div className="cart-details p-5">
        <h5 className="product-name text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.name} 
        </h5>
        <div className="rating-container flex items-center mt-2.5 mb-5">
          <div className="star-container flex items-center space-x-1 rtl:space-x-reverse">
            {newArray.map((star) => (
              <svg key={star} className="star-icon w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
          <span className="rating-count bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {product.rating}
          </span>
        </div>
        <div className="price-action-container flex items-center justify-between">
          <span className="product-price text-3xl font-bold text-gray-900 dark:text-white">
            {product.price} azn
          </span>
          <div className="action-buttons flex items-center space-x-4">
            <button
              onClick={() => GoBasket(product.id)}
              className="add-to-cart-button border border-gray-500 text-black px-4 py-2 rounded-lg hover:bg-red-700 hover:text-white transition-all duration-300"
            >
              Add to Cart
            </button>
            <button  onClick={() =>GoWish(product.id)} 
              className={`wishlist-button bg-white ${product.wish_or_not ? 'text-red-700' : 'text-black'} px-4 py-2 rounded-lg border border-gray-500 hover:bg-white hover:text-red-700 transition-all duration-300`}
            >
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
