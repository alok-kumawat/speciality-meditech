import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const contactDetails = [
  { icon: <Mail />, label: "Email", value: "info@specilitymeditech.com" },
  { icon: <Phone />, label: "Phone", value: "+91-9876543210" },
  { icon: <MapPin />, label: "Address", value: "Jaipur, Rajasthan, India" },
];

const ContactInfo = () => (
  <section className="py-12 px-8 bg-white">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {contactDetails.map((item, index) => (
        <motion.div
          key={index}
          className="bg-gray-50 rounded-xl p-6 shadow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4 text-blue-600">{item.icon}</div>
          <h3 className="font-semibold text-lg mb-2">{item.label}</h3>
          <p className="text-gray-700">{item.value}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ContactInfo;
