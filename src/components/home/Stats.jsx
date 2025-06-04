import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const statsData = [
  { id: 1, label: 'Years of Experience', value: 20 },
  { id: 2, label: 'No. of Products', value: 70, suffix: '+' },
  { id: 3, label: 'Brand Extensions', value: 25, suffix: '+' },
  { id: 4, label: "Our Director's Experience", value: 40 },
  { id: 5, label: 'Satisfied Clients', value: 1270 },
];

const AnimatedCounter = ({ value, inView, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView && count === 0) {
      let start = 0;
      const end = value;
      const duration = 1500;
      const incrementTime = 30;
      const step = Math.ceil(end / (duration / incrementTime));

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, incrementTime);
    }
  }, [inView, value, count]);

  return (
    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
      {count.toLocaleString()}
      {count === value && suffix}
    </span>
  );
};

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Our Achievements
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proud numbers that reflect our commitment and growth over the years.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {statsData.map(({ id, label, value, suffix }) => (
            <motion.div
              key={id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: id * 0.1 }}
            >
              <AnimatedCounter value={value} inView={inView} suffix={suffix} />
              <p className="mt-2 text-black font-medium">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
