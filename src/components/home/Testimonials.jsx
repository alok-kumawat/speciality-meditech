import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Dr. Asha Patel',
    designation: 'Senior Surgeon',
    feedback: 'Speciality Meditech provides top-notch medical furniture that enhances patient care immensely.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Mr. Rajesh Kumar',
    designation: 'Hospital Administrator',
    feedback: 'Their hospital beds and OT tables are of unmatched quality and durability.',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
  },
  {
    name: 'Dr. Meena Joshi',
    designation: 'Healthcare Consultant',
    feedback: 'Reliable and innovative, Speciality Meditech is our go-to partner for medical equipment.',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section className="bg-white py-15" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-800 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>

        <Slider {...settings}>
          {testimonials.map(({ name, designation, feedback, avatar }, i) => (
            <motion.div
              key={i}
              className="max-w-xl mx-auto px-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <p className="text-gray-700 italic mb-6">"{feedback}"</p>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={avatar}
                    alt={name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{name}</p>
                    <p className="text-sm text-gray-500">{designation}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
