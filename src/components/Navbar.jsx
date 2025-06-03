import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNestedDropdown, setShowNestedDropdown] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setShowDropdown(false);
    setShowNestedDropdown(false);
  }, [location.pathname]);


  const isActive = (path) => location.pathname === path;

  const navLinkClass = (path) =>
    `px-3 py-2 transition font-semibold ${
      isActive(path)
        ? 'text-blue-700 font-bold border-b-2 border-blue-700'
        : 'hover:text-blue-600'
    }`;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-50 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-2xl pt-1 font-bold text-black"
          >
            SPECIALITY<br /><span className="font-thin px-2">MEDITECH</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6 relative">
            {/* Home */}
            <Link
              to="/"
              className={navLinkClass('/')}
            >
              Home
            </Link>

            {/* About */}
            <Link
              to="/about"
              className={navLinkClass('/about')}
            >
              About
            </Link>

            {/* Products with Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => {
                setShowDropdown(false);
                setShowNestedDropdown(false);
              }}
            >
              <Link
                to="/products"
                className={navLinkClass('/products')}
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
                    className="absolute left-0 top-full mt-3 bg-white shadow-lg py-2 w-64 z-50 border border-gray-700"
                  >
                    {/* Top Categories with Nested Dropdown on Hover */}
                    <div 
                      className="relative group"
                      onMouseEnter={() => setShowNestedDropdown(true)}
                      onMouseLeave={() => setShowNestedDropdown(false)}
                    >
                      <span className="px-4 py-2 hover:bg-blue-100 cursor-pointer flex justify-between items-center">
                        Top Categories
                      </span>

                      <AnimatePresence>
                      {showNestedDropdown && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute left-full top-0 w-50 bg-white shadow-lg border border-gray-700 z-50"
                        >
                          <Link to="/products/medical-instruments" className="block px-4 py-2 hover:bg-blue-100">
                            Medical Instruments
                          </Link>
                          <Link to="/products/surgical-equipment" className="block px-4 py-2 hover:bg-blue-100">
                            Surgical Equipment
                          </Link>
                          <Link to="/products/orthopedic-tools" className="block px-4 py-2 hover:bg-blue-100">
                            Orthopedic Tools
                          </Link>
                          <Link to="/products/hospital-furniture" className="block px-4 py-2 hover:bg-blue-100">
                            Hospital Furniture
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    </div>

                    {/* Other Dropdown Items */}
                    <Link to="/products/disinfectants" className="block px-4 py-2 hover:bg-blue-100">
                      Disinfectants
                    </Link>
                    <Link to="/products/anesthesia" className="block px-4 py-2 hover:bg-blue-100">
                      Anesthesia Segment / Injectable Range
                    </Link>
                    <Link to="/products/antibiotics" className="block px-4 py-2 hover:bg-blue-100">
                      Anti Infective / Antibiotics
                    </Link>
                    <Link to="/products/antacid" className="block px-4 py-2 hover:bg-blue-100">
                      Antacid / P.P.I’s / Laxatives
                    </Link>
                    <Link to="/products/supplements" className="block px-4 py-2 hover:bg-blue-100">
                      Vitamins, Supplements & Immunoboosters
                    </Link>
                    <Link to="/products/antiseptics" className="block px-4 py-2 hover:bg-blue-100">
                      Hand, Skin & Oral Antiseptics
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact */}
            <Link
              to="/contact"
              className={navLinkClass('/contact')}
            >
              Contact
            </Link>
            {/* Media */}
            <Link
              to="/media"
              className={navLinkClass('/media')}
            >
              Media
            </Link>{/* Blogs */}
            <Link
              to="/blogs"
              className={navLinkClass('/blogs')}
            >
              Blogs
            </Link>{/* Careers */}
            <Link
              to="/careers"
              className={navLinkClass('/careers')}
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
          <div className="flex flex-col items-center space-y-0.5 py-4">
            <Link to="/" onClick={toggleNav} className={navLinkClass('/')}>Home</Link>
            <Link to="/about" onClick={toggleNav} className={navLinkClass('/about')}>About</Link>
            <div className="relative w-full flex flex-col items-center">
              <button className="px-4 py-2 rounded-md font-semibold">Products</button>
              <div className="flex flex-col items-start pl-8">
                <Link to="/products/medical-instruments" onClick={toggleNav} className="py-1 hover:text-blue-700">Medical Instruments</Link>
                <Link to="/products/surgical-equipment" onClick={toggleNav} className="py-1 hover:text-blue-700">Surgical Equipment</Link>
                <Link to="/products/orthopedic-tools" onClick={toggleNav} className="py-1 hover:text-blue-700">Orthopedic Tools</Link>
                <Link to="/products/hospital-furniture" onClick={toggleNav} className="py-1 hover:text-blue-700">Hospital Furniture</Link>
              </div>
            </div>
            <Link to="/contact" onClick={toggleNav} className={navLinkClass('/contact')}>Contact</Link>
            <Link to="/media" onClick={toggleNav} className={navLinkClass('/media')}>Media</Link>
            <Link to="/blogs" onClick={toggleNav} className={navLinkClass('/blogs')}>Blogs</Link>
            <Link to="/careers" onClick={toggleNav} className={navLinkClass('/careers')}>Careers</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
