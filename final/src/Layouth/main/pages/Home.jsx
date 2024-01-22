import React, { useContext, useEffect, useState } from 'react';
import Slider from '../components/Slider';
import Cart from './Cart';
import { motion } from 'framer-motion';
import ModuleHome from '../components/ModuleHome';
import CartTwo1 from '../components/CartTwo/CartTwo1';
import CartTwo2 from '../components/CartTwo/CartTwo2';
import CartTwp3 from '../components/CartTwo/CartTwp3';
import SliderTwo from '../components/SliderTwo';
import Blog from './Blog';
import FeaturedCollectionsCart from './FeaturedCollectionsCart';
import FollowInstagram from './FollowInstagram';
import { CartContext, CartProvider } from '../../../context/CartHomeContext';

function Home() {
  const [cartTwo, setCartTwo] = useState([]);

  const { product,fetchData } = useContext(CartContext);
//Featured
  const [FeaturedCollectionsproduct, setFeaturedCollectionsproduct] = useState([])
  const FeaturedData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/FeaturedCollection',
      {});
      const data = await response.json();
      setFeaturedCollectionsproduct(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    FeaturedData()
  }, [])
  console.log(product,'-------------------------------ssssssssss--------------------')
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
<div className='flex justify-center md:space-x-10 mt-20 mb-20 flex-wrap'>
        {FeaturedCollectionsproduct.map((feat) => (
          <FeaturedCollectionsCart key={feat.id} FeaturedCollectionsproduct={feat} />

        ))}
      </div>
<Blog/>
<FollowInstagram/>

</div>


    </motion.div>
  );
}

export default Home;
