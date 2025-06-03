import { FaAward, FaMicroscope, FaUsers, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Animation variants
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

const reasons = [
  {
    icon: <FaAward className="text-4xl text-yellow-500 mb-4" />,
    title: 'Award-Winning Quality',
    description: 'Certified excellence with multiple industry accolades and international standards.',
  },
  {
    icon: <FaMicroscope className="text-4xl text-blue-500 mb-4" />,
    title: 'Innovative R&D',
    description: 'In-house research drives innovation and brings the latest technology to market.',
  },
  {
    icon: <FaUsers className="text-4xl text-green-500 mb-4" />,
    title: 'Customer-Centric',
    description: 'Built around your needs with 24/7 support and customized product offerings.',
  },
  {
    icon: <FaShieldAlt className="text-4xl text-red-500 mb-4" />,
    title: 'Safety & Compliance',
    description: 'Strict adherence to regulatory and safety norms to protect users and patients.',
  },
];

const WhyChooseUs = () => {
  return (
    <motion.section
      id="why-choose-us"
      className="py-20 bg-white"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          variants={sectionVariant}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With years of expertise and a customer-first approach, Speciality Meditech is the trusted partner for high-quality medical equipment.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl text-center transition-transform transform hover:-translate-y-2 duration-300"
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              custom={index}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex justify-center">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
