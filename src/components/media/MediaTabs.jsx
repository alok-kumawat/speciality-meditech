const MediaTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['All', 'Images', 'Videos'];

  return (
    <div className="flex justify-center mb-8 space-x-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-md transition ${
            activeTab === tab
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default MediaTabs;
