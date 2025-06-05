import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-16 px-8 bg-gray-50">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Let's Work Together
      </motion.h2>

      <motion.div
        className="max-w-screen bg-white p-8 rounded-xl shadow"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-semibold mb-6 text-center">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div className="lg:flex md:flex items-center justify-center gap-7">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border rounded p-3 w-full bg-blue-50 mb-4 lg:mb-0 md:mb-0"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border rounded p-3 w-full bg-blue-50 mb-4 lg:mb-0 md:mb-0"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="border rounded p-3 w-full bg-blue-50 mb-4 lg:mb-0 md:mb-0"
            required
            value={formData.subject}
            onChange={handleChange}
          />
          </div>
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="border rounded p-3 bg-blue-50"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 lg:w-40 md:w-40 sm:w-30 flex-col-1 items-center justify-self-center rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
