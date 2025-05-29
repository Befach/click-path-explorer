
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, MapPin, Star } from 'lucide-react';
import { sampleSuppliers, sampleProducts } from '../data/sampleData';
import ProductCard from '../components/ProductCard';
import SupplierCard from '../components/SupplierCard';

const SupplierPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const supplier = sampleSuppliers.find(s => s.id === id);
  
  if (!supplier) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Supplier not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700"
          >
            Return to search
          </button>
        </div>
      </div>
    );
  }

  // Get products by this supplier
  const supplierProducts = sampleProducts.filter(product =>
    supplier.products.includes(product.id)
  );

  // Get related suppliers (same categories)
  const relatedSuppliers = sampleSuppliers.filter(s => 
    s.categories.some(cat => supplier.categories.includes(cat)) && s.id !== supplier.id
  ).slice(0, 6);

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
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to search
          </button>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Suppliers</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">{supplier.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Supplier Profile */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Supplier Logo */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
              </div>
            </div>

            {/* Supplier Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{supplier.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{supplier.rating}</span>
                  <span className="text-gray-500">({supplier.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{supplier.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {supplier.categories.map(category => (
                  <span key={category} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {category}
                  </span>
                ))}
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {supplier.name} is a trusted supplier specializing in {supplier.categories.join(', ')}. 
                  With years of experience in the industry, we provide high-quality products and reliable service 
                  to customers worldwide.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Products</h3>
                  <p className="text-2xl font-bold text-blue-600">{supplierProducts.length}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Rating</h3>
                  <p className="text-2xl font-bold text-yellow-500">{supplier.rating}/5</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Years Active</h3>
                  <p className="text-2xl font-bold text-green-600">{supplier.yearsActive}+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Products by {supplier.name} ({supplierProducts.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {supplierProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product.id)}
              />
            ))}
          </div>
        </div>

        {/* Related Suppliers */}
        {relatedSuppliers.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Suppliers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedSuppliers.map(relatedSupplier => (
                <SupplierCard
                  key={relatedSupplier.id}
                  supplier={relatedSupplier}
                  onClick={() => handleSupplierClick(relatedSupplier.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplierPage;
