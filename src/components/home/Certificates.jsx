import { motion } from 'framer-motion';

const certificates = [
  {
    id: 1,
    image: 'https://medisafe.com/wp-content/uploads/2022/10/ISO-13485-2016-1024x723.png',
    title: 'ISO 13485:2016 Certification',
  },
  {
    id: 2,
    image: 'https://2.wlimg.com/product_images/bc-full/2022/4/3677467/ce-mark-for-all-directives-by-eu-notified-bodies-1650272398-6294531.jpeg',
    title: 'CE Mark Certification',
  },
  {
    id: 3,
    image: 'https://embassy-legalization.abrodex.in/gmp-certificate-embassy-attestation/gmp-certificate-attestation.jpg',
    title: 'GMP Compliance Certification',
  },
  {
    id: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANVLMf0mDsHeN_aUzCAjFkvhvSYmeGTXHPQ&s',
    title: 'Export Excellence Award',
  },
];

// Animation variants for section and cards
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const Certificates = () => {
  return (
    <motion.section
      id="certificates"
      className="py-20 bg-gray-100"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div className="text-center mb-12" variants={sectionVariant}>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8">
            Our Certifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognized globally for quality and safety. Our certifications reflect our dedication to world-class standards.
          </p>
        </motion.div>

        {/* Certificate cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 text-center"
              variants={cardVariant}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">{cert.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certificates;
