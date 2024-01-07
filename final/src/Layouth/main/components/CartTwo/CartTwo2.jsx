import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CartTwo2() {
    const [cartTwo, setCartTwo] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/products2');
                const data = await response.json();
                setCartTwo(data);
                console.log(data, '9999999999999999999999');
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(cartTwo, '2039102391029301293')
    return (
        <div className='flex flex-col'>
              <div className='flex justify-center items-center mb-10'>
              <h1 className='text-3xl font-bold'>Featured Product</h1>
            
            </div>
            {cartTwo.map((dt) => (
                <div key={dt.id} className=" flex justify-center items-center ">
                    <div className="w-full max-w-sm">
                        <div className="flex">
                            <Link to={".detail"} href="#">
                                <img className="w-32" src={dt.image} />
                            </Link>
                            <div className="w-full max-w-sm">
                                <div className="px-10 pb-14">
                                    <a href="#">
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{dt.name}</h5>
                                    </a>
                                    <div className="flex items-center mt-2.5 mb-5">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            {/* Yıldızlar */}
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{dt.rating}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">1azn</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ))}

        </div>
    )
}
export default CartTwo2
