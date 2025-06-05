import { useState } from 'react';
import { motion } from 'framer-motion';

const MediaItem = ({ media }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="rounded overflow-hidden shadow hover:scale-105 transition cursor-pointer"
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.02 }}
      >
        {media.type === 'image' ? (
          <img src={media.url} alt={media.title} className="w-full h-48 object-cover" />
        ) : (
          <div className="relative pt-[56.25%]">
            <iframe
              src={media.url}
              title={media.title}
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded"
            />
          </div>
        )}
        <div className="p-2 text-sm text-center">{media.title}</div>
      </motion.div>

      {open && media.type === 'image' && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <img src={media.url} alt={media.title} className="max-w-3xl max-h-[80vh]" />
        </div>
      )}
    </>
  );
};

export default MediaItem;
