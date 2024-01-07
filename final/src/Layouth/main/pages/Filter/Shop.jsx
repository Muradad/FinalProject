import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import { TfiLayoutGrid4Alt, TfiLayoutGrid3 } from "react-icons/tfi";
function Shop() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mt-20 p-2 bg-gray-100 w-full ">
        <div className="text-3xl mx-8 pb-4 font-bold">Products</div>
        <div className="flex items-center space-x-3 mx-8 mb-4">
          <Link to="/">Home</Link>
          <span><FaArrowRight /></span>
          <span className="text-gray-500">Products</span>
        </div>
      
      </div>
     <div className="border-b-4">
         <div className='flex space-x-10 mx-10 pt-10 pb-10'>
         <TfiLayoutGrid4Alt />
          <TfiLayoutGrid3 />
          <LuLayoutGrid />
          <LuLayoutList />
          <div >
          </div>
         </div>
        </div>
    </motion.div>
  );
}

export default Shop;

