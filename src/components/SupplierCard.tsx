
import { MapPin, Star, ArrowRight, Award } from 'lucide-react';

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
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-stone-100"
    >
      <div className="p-6">
        {/* Supplier Header */}
        <div className="flex items-start gap-4 mb-5">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center flex-shrink-0 border-2 border-orange-200/50">
            <div className="w-10 h-10 bg-orange-300/70 rounded-lg"></div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-stone-800 mb-2 truncate group-hover:text-orange-700 transition-colors text-lg">{supplier.name}</h3>
            <div className="flex items-center gap-1 text-sm text-stone-600 mb-2">
              <MapPin className="w-4 h-4 text-orange-600" />
              <span className="truncate">{supplier.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-semibold text-stone-700">{supplier.rating}</span>
                <span className="text-sm text-stone-500">({supplier.reviewCount})</span>
              </div>
              <div className="flex items-center gap-1 text-orange-600">
                <Award className="w-3 h-3" />
                <span className="text-xs font-medium">Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-5">
          {supplier.categories.slice(0, 3).map(category => (
            <span key={category} className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs font-medium border border-stone-200">
              {category}
            </span>
          ))}
          {supplier.categories.length > 3 && (
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
              +{supplier.categories.length - 3} more
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm border-t border-stone-100 pt-4">
          <div className="flex items-center gap-4">
            <span className="text-stone-600">
              <span className="font-semibold text-orange-600">{supplier.products.length}</span> products
            </span>
            <span className="text-stone-600">
              <span className="font-semibold text-orange-600">{supplier.yearsActive}+</span> years
            </span>
          </div>
          <div className="flex items-center gap-2 text-stone-400 group-hover:text-orange-600 transition-colors">
            <span className="text-sm font-medium">View Profile</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierCard;
