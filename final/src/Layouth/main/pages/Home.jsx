import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import Cart from './Cart';
import { motion } from 'framer-motion';
import ModuleHome from '../components/ModuleHome';
import CartTwo1 from '../components/CartTwo/CartTwo1';
import CartTwo2 from '../components/CartTwo/CartTwo2';
import CartTwp3 from '../components/CartTwo/CartTwp3';
import SliderTwo from '../components/SliderTwo';

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

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Slider />
      <ModuleHome />
      <div className='flex justify-center md:space-x-10 mt-20 mb-20 flex-wrap'>
        {product.map((item) => (
          <Cart key={item.id} product={item} />

        ))}
      </div>

<div className='flex items-center flex-wrap justify-evenly'>
<CartTwo1/>
<CartTwo2/>
<CartTwp3/>
</div>
<div>
<SliderTwo/>

</div>


    </motion.div>
  );
}

export default Home;
