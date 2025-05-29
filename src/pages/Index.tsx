
import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SupplierCard from '../components/SupplierCard';
import { sampleProducts, sampleSuppliers } from '../data/sampleData';

const Index = () => {
  const [searchType, setSearchType] = useState<'products' | 'suppliers'>('products');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const filteredProducts = sampleProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSuppliers = sampleSuppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    supplier.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const handleSupplierClick = (supplierId: string) => {
    navigate(`/supplier/${supplierId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Global Marketplace</h1>
          
          {/* Search Section */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Type Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors min-w-[140px] justify-between"
              >
                <span className="capitalize">{searchType}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[140px]">
                  <button
                    onClick={() => {
                      setSearchType('products');
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                  >
                    Products
                  </button>
                  <button
                    onClick={() => {
                      setSearchType('suppliers');
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                  >
                    Suppliers
                  </button>
                </div>
              )}
            </div>

            {/* Search Input */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={`Search for ${searchType}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            {searchType === 'products' ? 'Products Found' : 'Suppliers Found'}
          </h2>
          <p className="text-gray-600">
            {searchType === 'products' 
              ? `${filteredProducts.length} products available`
              : `${filteredSuppliers.length} suppliers available`
            }
          </p>
        </div>

        {/* Results Grid */}
        {searchType === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSuppliers.map(supplier => (
              <SupplierCard
                key={supplier.id}
                supplier={supplier}
                onClick={() => handleSupplierClick(supplier.id)}
              />
            ))}
          </div>
        )}

        {((searchType === 'products' && filteredProducts.length === 0) || 
          (searchType === 'suppliers' && filteredSuppliers.length === 0)) && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No {searchType} found. Try a different search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
