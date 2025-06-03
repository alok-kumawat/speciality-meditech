import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-50 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-3xl font-bold font-mono text-blue-700">Speciality Meditech</Link>

          <div className="hidden md:flex font-semibold space-x-6 relative">
            {/* Home */}
            <Link
              to="/"
              className={`px-3 py-2 rounded-md transition ${isActive("/") ? "bg-blue-200" : "hover:bg-blue-200"}`}
            >
              Home
            </Link>

            {/* About */}
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md transition ${isActive("/about") ? "bg-blue-200" : "hover:bg-blue-200"}`}
            >
              About
            </Link>

            {/* Products with Dropdown */}
            <div
              className="relative group mt-2"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <Link
                to="/products"
                className={`px-3 py-2 rounded-md transition ${isActive("/products") ? "bg-blue-200" : "hover:bg-blue-200"}`}
              >
                Products
              </Link>
              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 8 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-full mt-1 bg-white shadow-lg py-2 w-64 z-50 border border-gray-700"
                  >
                    <Link to="/products/medical-instruments" className="block px-4 py-2 hover:bg-blue-100">Surface & Environment</Link>
                    <Link to="/products/disinfectants" className="block px-4 py-2 hover:bg-blue-100">Disinfectants</Link>
                    <Link to="/products/anesthesia" className="block px-4 py-2 hover:bg-blue-100">Anesthesia Segment / Injectable Range</Link>
                    <Link to="/products/antibiotics" className="block px-4 py-2 hover:bg-blue-100">Anti Infective / Antibiotics</Link>
                    <Link to="/products/antacid" className="block px-4 py-2 hover:bg-blue-100">Antacid / P.P.I’s / Laxatives</Link>
                    <Link to="/products/supplements" className="block px-4 py-2 hover:bg-blue-100">Vitamins, Supplements & Immunoboosters</Link>
                    <Link to="/products/antiseptics" className="block px-4 py-2 hover:bg-blue-100">Hand, Skin & Oral Antiseptics</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact */}
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md transition ${isActive("/contact") ? "bg-blue-200" : "hover:bg-blue-200"}`}
            >
              Contact
            </Link>
            {/* Media */}
            <Link
              to="/media"
              className={`px-3 py-2 rounded-md transition ${isActive("/media") ? "bg-blue-200" : "hover:bg-blue-200"}`}
            >
              Media
            </Link>{/* Blogs */}
            <Link
              to="/blogs"
              className={`px-3 py-2 rounded-md transition ${isActive("/blogs") ? "bg-blue-200" : "hover:bg-blue-200"}`}
            >
              Blogs
            </Link>{/* Careers */}
            <Link
              to="/careers"
              className={`px-3 py-2 rounded-md transition ${isActive("/careers") ? "bg-blue-200" : "hover:bg-blue-200"}`}
            >
              Careers
            </Link>
          </div>

          {/* Hamburger menu */}
          <div className="md:hidden">
            <button onClick={toggleNav} className="text-2xl text-gray-700">
              {navOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link to="/" onClick={toggleNav} className={`px-4 py-2 rounded-md ${isActive("/") ? "text-blue-700 bg-blue-300" : "hover:bg-blue-300"}`}>Home</Link>
            <Link to="/about" onClick={toggleNav} className="px-4 py-2 rounded-md hover:bg-blue-300">About</Link>
            <div className="relative">
              <button className="px-4 py-2 rounded-md hover:bg-blue-300">Products</button>
              <div className="flex flex-col items-start pl-4">
                <Link to="/products/medical-instruments" onClick={toggleNav} className="py-1 hover:text-blue-700">Medical Instruments</Link>
                <Link to="/products/surgical-equipment" onClick={toggleNav} className="py-1 hover:text-blue-700">Surgical Equipment</Link>
                <Link to="/products/orthopedic-tools" onClick={toggleNav} className="py-1 hover:text-blue-700">Orthopedic Tools</Link>
                <Link to="/products/hospital-furniture" onClick={toggleNav} className="py-1 hover:text-blue-700">Hospital Furniture</Link>
              </div>
            </div>
            <Link to="/contact" onClick={toggleNav} className="px-4 py-2 rounded-md hover:bg-blue-300">Contact</Link>
            <Link to="/media" onClick={toggleNav} className="px-4 py-2 rounded-md hover:bg-blue-300">Media</Link>
            <Link to="/blogs" onClick={toggleNav} className="px-4 py-2 rounded-md hover:bg-blue-300">Blogs</Link>
            <Link to="/careers" onClick={toggleNav} className="px-4 py-2 rounded-md hover:bg-blue-300">Careers</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
