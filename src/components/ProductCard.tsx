
import { ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image?: string;
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
    >
      {/* Product Image */}
      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center">
        <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{product.category}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">${product.price}</span>
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
