// src/components/about/TeamSection.jsx
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

const team = [
  { name: 'Dr. Priya Sharma', role: 'Medical Advisor', image: 'https://randomuser.me/api/portraits/women/43.jpg' },
  { name: 'Aman Verma', role: 'Operations Head', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Nisha Gupta', role: 'Product Manager', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'Avinash Chauhan', role: 'Medicines Distributor', image: 'https://randomuser.me/api/portraits/men/69.jpg' }
];

const TeamSection = () => {
  return (
    <motion.section
      id="team"
      className="py-20 bg-white"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div className="text-center mb-12" variants={sectionVariant}>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated professionals bring passion and experience to drive innovation and excellence in healthcare.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl text-center transition-transform transform hover:-translate-y-2 duration-300"
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              custom={index}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-blue-100 shadow-sm"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TeamSection;
