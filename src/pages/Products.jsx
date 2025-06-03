// === FILE: src/pages/Products.jsx ===
import { useState } from 'react';
import { motion } from 'framer-motion';
import productsData from '../data/products';
import ProductCard from '../components/products/ProductCard';
import ProductModal from '../components/products/ProductModal';
import CategoryGrid from '../components/products/CategoryGrid';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Products = () => {
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [submittedSearch, setSubmittedSearch] = useState('');
  
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(submittedSearch.toLowerCase())
  );

  const handleSearch = () => {
    setSubmittedSearch(search);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
    <motion.div
      className="pt-24 px-4 md:px-12 lg:px-24"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.h2
        variants={fadeInUp}
        className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8"
      >
        All Products
      </motion.h2>

      <motion.div
        variants={fadeInUp}
        className="mb-8 flex justify-center"
      >
        <>
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 border-2 mb-4 w-1/3 max-w-md shadow"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          />
        <button
          onClick={handleSearch}
          className='bg-blue-800 text-white px-4 py-2 border-black border-t-2 border-r-2 border-b-2 mb-4 w-1/4 max-w-md shadow'
        >
          SEARCH
        </button>
        </>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProductCard
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            </motion.div>
          ))
        ) : submittedSearch ? (
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center text-blue-500 col-span-full"
          >
            No products found for "{submittedSearch}"
          </motion.p>
        ) : null}
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

    </motion.div>
    <CategoryGrid />
    </>
  );
};

export default Products;
