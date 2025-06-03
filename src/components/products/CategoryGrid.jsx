import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Medical Instruments',
    image: 'https://media.istockphoto.com/id/1264460895/photo/blood-pressure-meter-sphygmomanomete.jpg?s=612x612&w=0&k=20&c=kB5fwnZqeju_WMRwG50Ur5adkxvIHxyRsSC0wGQNV5A=',
    link: '/products/medical-instruments'
  },
  {
    name: 'Surgical Equipment',
    image: 'https://media.istockphoto.com/id/2212397156/photo/embryo-transfer-procedure-for-ivf-3d-illustration.jpg?s=612x612&w=0&k=20&c=m6aXAvE1a2B51xyUY9dkCRUuivQq9Da-Q6PdF3PEWgs=',
    link: '/products/surgical-equipment'
  },
  {
    name: 'Orthopedic Tools',
    image: 'https://media.istockphoto.com/id/1370095638/photo/doctor-check-and-diagnose-the-human-spine-on-blurred-background.jpg?s=612x612&w=0&k=20&c=OiJ-9mSOI-lr2iHJ2g4FwVL_403ZJioR50Ti_88G_p4=',
    link: '/products/orthopedic-tools'
  },
  {
    name: 'Hospital Furniture',
    image: 'https://media.istockphoto.com/id/2157412421/photo/dental-chair-medical-background.jpg?s=612x612&w=0&k=20&c=2NiLZ1m689rP7ktVqh291-cWQbN2oE3_KE2wFgYNID0=',
    link: '/products/hospital-furniture'
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-20 bg-gray-50" id="categories">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Top Categories
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore our wide range of high-quality medical equipment categories.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link to={category.link}>
                <div
                  className="relative h-48 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 group cursor-pointer"
                  style={{
                    backgroundImage: `url(${category.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-opacity-40 group-hover:bg-blue-600 group-hover:bg-opacity-50 transition duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-black text-lg md:text-xl font-semibold group-hover:text-white group-hover:scale-105 transition-transform duration-300">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
