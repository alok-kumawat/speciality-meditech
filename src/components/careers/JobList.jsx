// === FILE: src/components/careers/JobList.jsx ===
import React, { useState } from 'react';
import jobOpenings from '../../data/jobOpenings';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const JobList = () => {
  const [filter, setFilter] = useState('All');

  const filteredJobs =
    filter === 'All'
      ? jobOpenings
      : jobOpenings.filter((job) => job.type === filter);

  return (
    <section className="py-16 px-8 bg-gray-50">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
         className="text-3xl md:text-4xl font-bold text-blue-800 mb-6"
         initial={{ y: 20, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.6 }}
         viewport={{ once: true }}
        >
            Current Openings
        </motion.h2>
        <motion.p
         className="text-gray-600 max-w-xl mx-auto"
         initial={{ y: 30, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.2, duration: 0.6 }}
         viewport={{ once: true }}
        >
          We’re always looking for talented individuals to join our growing team.
        </motion.p>
      </motion.div>

      {/* Filters */}
      <motion.div
       className="flex flex-wrap justify-center gap-4 mb-8"
         initial={{ y: 30, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.2, duration: 0.6 }}
         viewport={{ once: true }}
       >
        {['All', 'Full-time', 'Part-time', 'Internship'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-5 py-2 rounded-full border transition ${
              filter === type
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            {type}
          </button>
        ))}
      </motion.div>

      {/* Job Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, i) => (
            <motion.div
              key={job.id}
              custom={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 border rounded-xl hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-1">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{job.type} • {job.location}</p>
              <Link
                to={`/careers/apply/${job.id}`}
                className="inline-flex items-center text-blue-600 hover:underline font-medium mt-2"
              >
                Apply Now <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No jobs found.</p>
        )}
      </div>
    </section>
  );
};

export default JobList;
