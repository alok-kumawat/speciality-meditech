import mediaData from '../../data/mediaData';
import MediaItem from './MediaItem';

const MediaGallery = ({ activeTab }) => {
  const filtered = mediaData.filter((item) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Images') return item.type === 'image';
    if (activeTab === 'Videos') return item.type === 'video';
    return item.type === activeTab.toLowerCase();
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filtered.map((media) => (
        <MediaItem key={media.id} media={media} />
      ))}
    </div>
  );
};

export default MediaGallery;
