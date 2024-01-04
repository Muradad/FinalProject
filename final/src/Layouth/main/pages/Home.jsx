// Home.jsx

import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import Cart from './Cart';
import { motion } from 'framer-motion';
import ModuleHome from '../components/ModuleHome';

function Home() {
  const [product,setProduct] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('http://38.242.233.112:399/api/products');
      const data = await response.json();
     setProduct(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
useEffect(()=>{
  fetchData()
},[])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Slider />
      <ModuleHome/>
      <div className='flex justify-center md:space-x-10 mt-20 mb-20 flex-wrap'>
      {product.map((item) => (
        <Cart key={item.id} product={item} />
      ))}
    </div>
    </motion.div>
  );
}

export default Home;
