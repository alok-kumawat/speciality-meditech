import { motion } from "framer-motion";
import { FaDotCircle } from "react-icons/fa";

const milestones = [
  { year: "2015", title: "Company Founded", desc: "Started with a mission to modernize healthcare equipment." },
  { year: "2017", title: "First 100 Clients", desc: "Built strong partnerships with local hospitals." },
  { year: "2020", title: "Pan-India Expansion", desc: "Began operations across multiple states." },
  { year: "2024", title: "R&D Division Launched", desc: "Innovating smarter diagnostic tools." },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CompanyTimeline = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-50">
      {/* Section Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Journey
      </motion.h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Center vertical line */}
        <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>

        <div className="space-y-16">
          {milestones.map((item, index) => {
            const isEven = (index + 1) % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:justify-start" : "md:justify-end"
                }`}
                custom={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {/* Card Container */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={`w-full md:w-1/2 px-4 sm:px-6 relative z-10`}
                >
                  {/* Connecting Line */}
                  <span
                    className={`hidden md:block absolute top-6 h-1 w-6 bg-blue-600 ${
                      isEven
                        ? "left-1/2 -translate-x-full"
                        : "right-1/2 translate-x-full"
                    }`}
                  ></span>

                  {/* Card Content */}
                  <div className="bg-white shadow-lg rounded-xl p-6 transition duration-300 ease-in-out hover:shadow-xl">
                    <div className="text-blue-600 font-bold text-sm mb-1">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <FaDotCircle className="text-blue-600 text-xl" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
