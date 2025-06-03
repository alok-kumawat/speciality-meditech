import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Overview */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Speciality Meditech</h2>
          <p className="text-sm leading-relaxed">
            Enhancing healthcare with innovative and reliable medical technologies. We specialize in high-quality medical devices crafted for precision and performance.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/products" className="hover:text-white transition">Products</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="/media" className="hover:text-white transition">Media</a></li>
            <li><a href="/blogs" className="hover:text-white transition">Blogs</a></li>
            <li><a href="/careers" className="hover:text-white transition">Careers</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Products</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="products/medical-instruments" className="hover:text-white transition">Medical Instruments</a></li>
            <li><a href="products/surgical-equipment" className="hover:text-white transition">Surgical Equipment</a></li>
            <li><a href="products/orthopedic-tools" className="hover:text-white transition">Orthopedic Tools</a></li>
            <li><a href="products/hospital-furniture" className="hover:text-white transition">Hospital Furniture</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>📞 +91-9876543210</li>
            <li>📍 Jaipur, Rajasthan, India</li>
            <li>✉️ info@specialitymeditech.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Speciality Meditech. Developed by: Alok kumawat.
      </div>
    </footer>
  );
};

export default Footer;
