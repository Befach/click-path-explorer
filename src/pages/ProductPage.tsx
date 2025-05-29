
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { sampleProducts, sampleSuppliers } from '../data/sampleData';
import SupplierCard from '../components/SupplierCard';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = sampleProducts.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
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

  // Get suppliers for this product
  const productSuppliers = sampleSuppliers.filter(supplier =>
    supplier.products.includes(product.id)
  );

  // Get related products (same category)
  const relatedProducts = sampleProducts.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 6);

  const handleSupplierClick = (supplierId: string) => {
    navigate(`/supplier/${supplierId}`);
  };

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
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
            <span>Products</span>
            <ChevronRight className="w-4 h-4" />
            <span>{product.category}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                <p className="text-gray-500">Product Image</p>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {product.category}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  ${product.price}
                </span>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  High-quality {product.name.toLowerCase()} designed for professional use. 
                  This product meets industry standards and is available from multiple verified suppliers.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Available Suppliers</h3>
                  <p className="text-2xl font-bold text-blue-600">{productSuppliers.length}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Category</h3>
                  <p className="text-lg text-gray-700">{product.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Suppliers Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Suppliers Found ({productSuppliers.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productSuppliers.map(supplier => (
              <SupplierCard
                key={supplier.id}
                supplier={supplier}
                onClick={() => handleSupplierClick(supplier.id)}
              />
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  onClick={() => handleProductClick(relatedProduct.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
