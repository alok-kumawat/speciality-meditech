// === FILE: src/pages/JobApplicationForm.jsx ===
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import jobOpenings from '../data/jobOpenings';
import { motion } from 'framer-motion';

const JobApplicationForm = () => {
  const { jobId } = useParams();
  const location = useLocation();
  const isDirectResume = !jobId;

  const selectedJob = jobOpenings.find(job => job.id === Number(jobId));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: selectedJob?.title || '',
    coverLetter: '',
    resume: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    console.log(formData);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({
       name: "",
       email: "", phone: "",
       role: isDirectResume ? '' : selectedJob?.title || '',
       coverLetter: "",
       resume: null 
    });
  };
  console.log("jobId:", jobId);
  console.log("selectedJob:", selectedJob);


  return (
    <motion.div
      className="max-w-3xl mx-auto py-20 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
        Job Application Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md bg-white"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md bg-white"
          />
          {isDirectResume ? (
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md bg-white"
          >
            <option value="">Select Role</option>
            {jobOpenings.map(job => (
              <option key={job.id} value={job.title}>{job.title}</option>
            ))}
          </select>
          ) : (
            <input
              type="text"
              name="role"
              value={formData.role}
              disabled
              className="p-3 border border-gray-300 rounded-md bg-white text-gray-700 cursor-not-allowed"
            />
          )}
        </div>
        <textarea
          name="coverLetter"
          rows="5"
          placeholder="Cover Letter"
          value={formData.coverLetter}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md bg-white"
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-md w-full bg-white"
          />
        </div>
        <div className='flex items-center justify-center'>
        <button
          type="submit"
          className="w-45 bg-blue-800 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition cursor-pointer"
        >
          Submit Application
        </button>
        </div>

        {submitted && (
          <motion.p
            className="text-green-600 font-medium text-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Application submitted successfully!
          </motion.p>
        )}
      </form>
    </motion.div>
  );
};

export default JobApplicationForm;
