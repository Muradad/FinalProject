import { motion } from 'framer-motion';

function Shop() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Shop
    </motion.div>
  );
}

export default Shop;
