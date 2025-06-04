import { motion } from "framer-motion";

const AboutHero = () => (
  <section className="pt-24 pb-20 px-8 bg-gray-50">
    <motion.div
      className="flex flex-col-reverse md:flex-row items-center gap-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <img
          src="https://specialitymeditech.com/wp-content/uploads/2022/07/PPB-PHOTO-4-500x700.jpg"
          alt="About us"
          className="rounded-xl shadow-md w-full"
        />
      </motion.div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-blue-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          About Our Company
        </motion.h1>
        <motion.div
          className=""
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
        <p className="text-gray-600 text-lg mb-4">
          At Speciality Meditech, we specialize in delivering high-quality medical equipment and 
          healthcare solutions designed to improve and save lives.
        </p>
        <p className="text-gray-600 text-lg mb-4">
          With decades of experience and a deep understanding of clinical needs, we provide 
          innovative products that meet international standards and ensure exceptional performance.
        </p>
        <p className="text-gray-600 text-lg mb-4">
          We specialize in providing high-quality medical furniture, hospital beds, and other 
          healthcare essentials.
        </p>
        <p className="text-gray-600 text-lg mb-4">
          Our Company have decades of experience and a deep understanding of clinical needs, we provide 
          innovative products that meet international standards and ensure exceptional performance.
        </p>
        <p className="text-gray-600 text-lg mb-4">
          <strong>Our Vision:</strong> To be a global leader in medical technology through continuous 
          innovation and excellence.
        </p>
        <p className="text-gray-600 text-lg mb-4">
          <strong>Our Mission:</strong> Empower healthcare professionals and institutions by offering 
          advanced, reliable, and affordable solutions that improve patient outcomes.
        </p>
        <ul className="list-disc list-inside text-gray-600 text-lg space-y-2 mb-4">
          <li>Cutting-edge manufacturing facilities with quality control.</li>
          <li>Customer-centric approach with 24/7 support and services.</li>
          <li>Wide range of surgical, orthopedic, and hospital products.</li>
          <li>Commitment to ethical practices and sustainable growth.</li>
        </ul>
        <p className="text-gray-600 text-lg">
          Join us on our journey to revolutionize healthcare delivery—one innovation at a time.
        </p>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default AboutHero;
