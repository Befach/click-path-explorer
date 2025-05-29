
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
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-stone-100 overflow-hidden"
    >
      {/* Product Image */}
      <div className="aspect-square bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center relative overflow-hidden">
        <div className="w-24 h-24 bg-orange-200/50 rounded-xl border-2 border-orange-300/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
      </div>
      
      {/* Product Info */}
      <div className="p-5">
        <h3 className="font-semibold text-stone-800 mb-2 line-clamp-2 group-hover:text-orange-700 transition-colors">{product.name}</h3>
        <div className="flex items-center mb-3">
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
            {product.category}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-stone-500 mb-1">Starting from</span>
            <span className="text-xl font-bold text-orange-600">${product.price}</span>
          </div>
          <div className="flex items-center gap-2 text-stone-400 group-hover:text-orange-600 transition-colors">
            <span className="text-sm font-medium">View Details</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
