import React, { useState } from 'react';
import { IoHeartOutline } from "react-icons/io5";

function Detail() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabData = [
    {
      id: 0,
      imgUrl: 'https://eme-2.myshopify.com/cdn/shop/products/6_e5f93193-cfdc-4f66-9e72-aec7de1dba78_360x.jpg?v=1655288184',
    },
    {
      id: 1,
      imgUrl: 'https://eme-2.myshopify.com/cdn/shop/products/12_6391fdff-3c7b-4651-92c3-4f80e20f591e_360x.jpg?v=1655357786',
    },
    {
      id: 2,
      imgUrl: 'https://eme-2.myshopify.com/cdn/shop/products/13_243f89db-aea3-487c-a504-b6d3060c86e8_360x.jpg?v=1655357424',
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <div className="relative mb-6 lg:mb-10 lg:full">
              <img
                src={tabData[activeTab].imgUrl}
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="hidden lg:flex space-x-4">
              {tabData.map((tab, index) => (
                <button
                  key={tab.id}
                  className={`flex-1 p-2 border-2 border-transparent focus:outline-none hover:border-blue-500 transition-all ${index === activeTab
                      ? 'border-blue-500'
                      : ''
                    }`}
                  onClick={() => handleTabClick(index)}
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={tab.imgUrl}
                      alt=""
                      className="object-cover w-full  mb-2 rounded-md h-full"
                    />
                  </div>
                </button>
              ))}
            </div>
            <div className="lg:hidden">
              <button
                className="w-full p-3 text-white bg-blue-950 hover:bg-blue-900 rounded-lg"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? 'Geyimlere baxin' : 'Geyimlere baxin'}
              </button>
              <div className={`mt-4 ${isMobileMenuOpen ? 'grid grid-cols-3 gap-2' : 'hidden'}`}>
                {tabData.map((tab, index) => (
                  <button
                    key={tab.id}
                    className={`w-full p-2 border-2 border-transparent focus:outline-none hover:border-blue-500 transition-all ${index === activeTab
                        ? 'border-blue-500'
                        : ''
                      }`}
                    onClick={() => handleTabClick(index)} x
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src={tab.imgUrl}
                        alt=""
                        className="object-cover w-full h-full mb-2 rounded-md"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-4">{tabData[activeTab].title}</h2>
              <p className="text-gray-700">{tabData[activeTab].description}</p>
            </div>
            <div className="lg:pl-20">
              <div className="mb-8 ">
                <span className="text-lg font-medium text-rose-500 dark:text-rose-200">New</span>
                <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                  Shoes</h2>
                <div className="flex items-center mb-6">
                  <ul className="flex mr-2">
                    <li>
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <p className="text-xs dark:text-gray-400 ">(2 customer reviews)</p>
                </div>
                <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                  Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                  Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                </p>
                <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                  <span>$100.99</span>
                  <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">$150.99</span>
                </p>
                <p className="text-green-600 dark:text-green-300 ">7 in stock</p>
              </div>
              <div className="flex items-center mb-8">
                <h2 className="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                  Colors:</h2>
                <div className="flex flex-wrap -mx-2 -mb-2">
                  <button className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                    <div className="w-6 h-6 bg-cyan-300" />
                  </button>
                  <button className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                    <div className="w-6 h-6 bg-green-300 " />
                  </button>
                  <button className="p-1 mb-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                    <div className="w-6 h-6 bg-red-200 " />
                  </button>
                </div>
              </div>
              <div className="flex items-center mb-8">
                <h2 className="w-16 text-xl font-bold dark:text-gray-400">
                  Size:</h2>
                <div className="flex flex-wrap -mx-2 -mb-2">
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">XL
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">S
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">M
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">XS
                  </button>
                </div>
              </div>
              <div className="w-32 mb-8 ">
                <label htmlFor className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                  <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                    <span className="m-auto text-2xl font-thin">-</span>
                  </button>
                  <input type="number" className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black" placeholder={1} />
                  <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap items-center -mx-4 ">
                <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                  <button className="flex items-center p-3 border rounded-md  text-black border-black text-3xl  hover:text-white hover:bg-black duration-500">
                    Add to Cart
                  </button>
                </div>
                <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                  <button className="flex items-center p-3 border rounded-md bg-blue-950 text-white text-4xl hover:bg-white hover:text-black hover:border-black duration-300">
                  <IoHeartOutline />

                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
