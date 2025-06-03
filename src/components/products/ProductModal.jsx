const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative animate-fadeInUp">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-blue-500 hover:text-red-500"
        >
          ✕
        </button>
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <p className="text-gray-700 mt-2">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductModal;
