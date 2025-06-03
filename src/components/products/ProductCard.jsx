const ProductCard = ({ product, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 cursor-pointer group animate-fadeInUp"
      onClick={onClick}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
