// === FILE: src/pages/Careers.jsx ===
import React, {useRef} from 'react';
import { motion } from 'framer-motion';
import CareersHero from '../components/careers/CareersHero';
import WhyJoinUs from '../components/careers/WhyJoinUs';
import JobList from '../components/careers/JobList';
import ApplicationCTA from '../components/careers/ApplicationCTA';

const Careers = () => {

  const jobListRef = useRef(null);

  const scrollToJobList = () => {
    jobListRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      className="pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <CareersHero onExploreClick={scrollToJobList} />
      <WhyJoinUs />
      <div ref={jobListRef}>
        <JobList />
      </div>
      <ApplicationCTA />
    </motion.div>
  );
};

export default Careers;
