import { motion } from "framer-motion";

const ContactHero = () => (
  <section className="pt-24 pb-12 bg-gray-50 px-4 md:px-12 lg:px-24">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8">Get In Touch</h1>
      <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
        Have a question or need support? Reach out to our team — we’re here to help you.
      </p>
    </motion.div>
  </section>
);

export default ContactHero;
