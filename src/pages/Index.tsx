
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
    <div className="min-h-screen b2b-gradient">
      {/* Professional B2B Header */}
      <div className="b2b-nav shadow-sm border-b border-orange-900/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white mb-6">Global B2B Marketplace</h1>
          
          {/* Search Section */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Type Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-200 min-w-[140px] justify-between shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="capitalize font-medium">{searchType}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-stone-200 rounded-lg shadow-xl z-50 min-w-[140px] overflow-hidden">
                  <button
                    onClick={() => {
                      setSearchType('products');
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-orange-50 transition-colors text-stone-700 border-b border-stone-100 last:border-b-0"
                  >
                    Products
                  </button>
                  <button
                    onClick={() => {
                      setSearchType('suppliers');
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-orange-50 transition-colors text-stone-700"
                  >
                    Suppliers
                  </button>
                </div>
              )}
            </div>

            {/* Search Input */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
              <input
                type="text"
                placeholder={`Search for ${searchType}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-stone-700 placeholder-stone-500 shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-stone-800 mb-3">
            {searchType === 'products' ? 'Products Available' : 'Verified Suppliers'}
          </h2>
          <p className="text-stone-600 text-lg">
            {searchType === 'products' 
              ? `${filteredProducts.length} products from trusted suppliers`
              : `${filteredSuppliers.length} verified suppliers worldwide`
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
          <div className="text-center py-16">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
              <p className="text-stone-600 text-xl mb-4">No {searchType} found</p>
              <p className="text-stone-500">Try adjusting your search terms or browse our categories</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
