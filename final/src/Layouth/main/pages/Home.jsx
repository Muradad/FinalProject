// Home.jsx

import React from 'react';
import Slider from '../components/Slider';
import Cart from './Cart';
import { motion } from 'framer-motion';
import ModuleHome from '../components/ModuleHome';

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Slider />
      <ModuleHome/>
      <div className='flex justify-center md:space-x-10  mt-20 mb-20 flex-wrap'>
        <Cart />
        <Cart />
        <Cart />
      </div>
    </motion.div>
  );
}

export default Home;
