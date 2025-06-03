// === FILE: src/pages/CategoryPage.jsx ===
import { useParams } from 'react-router-dom';
import productsData from '../data/products';
import ProductCard from '../components/products/ProductCard';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const CategoryPage = () => {
  const { category } = useParams();

  const filteredProducts = productsData.filter((product) =>
    product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <motion.div
      className="pt-24 pb-24 px-4 md:px-12 lg:px-24"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.h2
        variants={fadeInUp}
        className="text-3xl text-blue-800 md:text-4xl font-bold text-center mb-8 capitalize"
      >
        {category.replace(/-/g, ' ')}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
        {filteredProducts.length === 0 && (
          <p className="text-center col-span-full text-gray-600">No products found in this category.</p>
        )}
      </div>
    </motion.div>
  );
};

export default CategoryPage;
