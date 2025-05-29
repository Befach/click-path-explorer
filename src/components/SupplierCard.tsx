
import { MapPin, Star, ArrowRight } from 'lucide-react';

interface Supplier {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  categories: string[];
  products: string[];
  yearsActive: number;
}

interface SupplierCardProps {
  supplier: Supplier;
  onClick: () => void;
}

const SupplierCard = ({ supplier, onClick }: SupplierCardProps) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
    >
      <div className="p-6">
        {/* Supplier Logo */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center flex-shrink-0">
            <div className="w-10 h-10 bg-blue-300 rounded-lg"></div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 mb-1 truncate">{supplier.name}</h3>
            <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
              <MapPin className="w-3 h-3" />
              <span className="truncate">{supplier.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">{supplier.rating}</span>
              <span className="text-sm text-gray-500">({supplier.reviewCount})</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1 mb-4">
          {supplier.categories.slice(0, 3).map(category => (
            <span key={category} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
              {category}
            </span>
          ))}
          {supplier.categories.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
              +{supplier.categories.length - 3}
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">{supplier.products.length} products</span>
          <span className="text-gray-600">{supplier.yearsActive}+ years</span>
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default SupplierCard;
