// Home.jsx

import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import Cart from './Cart';
import { motion } from 'framer-motion';
import ModuleHome from '../components/ModuleHome';
import CartTwo1 from '../components/CartTwo/CartTwo1';
import CartTwo2 from '../components/CartTwo/CartTwo2';
import CartTwp3 from '../components/CartTwo/CartTwp3';

function Home() {
  const [cartTwo, setCartTwo] = useState([]);


  const [product, setProduct] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/products');
      const data = await response.json();
      setProduct(data.results)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData()
  }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://127.0.0.1:8000/api/products2');
  //       const data = await response.json();
  //       setCartTwo(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Slider />
      <ModuleHome />
      <div className='flex justify-center md:space-x-10 mt-20 mb-20 flex-wrap'>
        {product.map((item) => (
          <Cart key={item.id} product={item} />

        ))}
      </div>

      {/* two */}
      {/* <div className='flex justify-evenly items-center text-3xl font-serif font-bold mb-10'>
          <button>New Arrival</button>
          <button>Featured Product</button>
          <button>Best Sellter</button>
        </div>
      <div className='flex justify-center   flex-wrap'>
       
  {cartTwo.map((it) => (
    <CartTwo key={it.id} cartTwo={it} />
  ))}
</div> */}
<div className='flex items-center flex-wrap justify-evenly'>
<CartTwo1/>
<CartTwo2/>
<CartTwp3/>
</div>


    </motion.div>
  );
}

export default Home;
