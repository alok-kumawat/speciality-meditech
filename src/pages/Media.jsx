import { useState } from 'react';
import { motion } from 'framer-motion';
import MediaTabs from '../components/media/MediaTabs';
import MediaGallery from '../components/media/MediaGallery';

const Media = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <motion.section
      className="pt-24 pb-20 px-8 bg-gray-50 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Media Gallery
      </motion.h1>

      <MediaTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <MediaGallery activeTab={activeTab} />
    </motion.section>
  );
};

export default Media;
