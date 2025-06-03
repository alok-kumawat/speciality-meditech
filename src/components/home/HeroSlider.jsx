import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://specialitymeditech.com/wp-content/uploads/2023/04/s1.jpeg',
    title: 'Delivering Innovation in Medical Technology',
    description: 'We provide cutting-edge medical equipment and solutions tailored for modern healthcare institutions.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1668600372311-66950b110d64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGl0bGUlM0ElMjAnVHJhbnNmb3JtaW5nJTIwSGVhbHRoY2FyZSUyMHdpdGglMjBQcmVjaXNpb24nJTJDJTIwJTIwJTIwJTIwJTIwZGVzY3JpcHRpb24lM0ElMjAnSW5ub3ZhdGl2ZSUyMHRlY2hub2xvZ2llcyUyMHRoYXQlMjBzdXBwb3J0JTIwYWNjdXJhdGUlMjBkaWFnbm9zaXMlMjBhbmQlMjBwYXRpZW50JTIwY2FyZS4nJTJDfGVufDB8fDB8fHww',
    title: 'Transforming Healthcare with Precision',
    description: 'Innovative technologies that support accurate diagnosis and patient care.',
  },
  {
    id: 3,
    image: 'https://media.istockphoto.com/id/1414046964/photo/chicago-skyline-butler-field-towards-financial-district-skyscrapers-day-time-illinois-usa.webp?a=1&b=1&s=612x612&w=0&k=20&c=l4K7H0PpEB4agdAAHZjrrZ2f9nGnXvJmm8NNzzPCoHQ=',
    title: 'Trusted by Hospitals Nationwide',
    description: 'Experience and reliability that serve medical professionals around the country.',
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          {index === current && (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.13 }}
              className="absolute top-1/8 left-10 md:left-20 max-w-xl text-white z-20"
            >
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-2xl md:text-5xl font-bold mb-4"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-200 mb-9"
              >
                {slide.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Link to="/products">
                  <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition">
                    Explore Products
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </div>
      ))}

      {/* Prev/Next buttons */}
      <motion.button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full z-30"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full z-30"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? 'bg-blue-500' : 'bg-white/70'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
