
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Star, MapPin, Award } from 'lucide-react';
import { sampleProducts, sampleSuppliers } from '../data/sampleData';
import SupplierCard from '../components/SupplierCard';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = sampleProducts.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center b2b-gradient">
        <div className="text-center bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-stone-800 mb-4">Product not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            Return to marketplace
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
    <div className="min-h-screen b2b-gradient">
      {/* Professional Header */}
      <div className="b2b-nav shadow-sm border-b border-orange-900/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-orange-200 hover:text-white transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to marketplace
          </button>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-orange-200">
            <span className="hover:text-white cursor-pointer">Products</span>
            <ChevronRight className="w-4 h-4" />
            <span className="hover:text-white cursor-pointer">{product.category}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Product Details */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-stone-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Product Image */}
            <div className="aspect-square bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <div className="w-40 h-40 bg-orange-200/70 rounded-xl mx-auto mb-6 border-2 border-orange-300/50"></div>
                <p className="text-stone-600 font-medium">Product Image</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                  {product.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-stone-600">4.8 (124 reviews)</span>
                </div>
              </div>
              
              <h1 className="text-4xl font-bold text-stone-800 mb-6">{product.name}</h1>
              
              <div className="prose max-w-none mb-8">
                <p className="text-stone-600 leading-relaxed text-lg">
                  Premium quality {product.name.toLowerCase()} manufactured to international standards. 
                  Sourced from verified suppliers with comprehensive quality assurance and competitive pricing for bulk orders.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                  <h3 className="font-bold text-stone-800 mb-2">Available Suppliers</h3>
                  <p className="text-3xl font-bold text-orange-600">{productSuppliers.length}</p>
                  <p className="text-sm text-stone-600 mt-1">Verified partners</p>
                </div>
                <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                  <h3 className="font-bold text-stone-800 mb-2">Starting Price</h3>
                  <p className="text-3xl font-bold text-stone-700">${product.price}</p>
                  <p className="text-sm text-stone-600 mt-1">Per unit (MOQ apply)</p>
                </div>
              </div>

              <button className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all duration-200 font-semibold text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Request Quotation
              </button>
            </div>
          </div>
        </div>

        {/* Suppliers Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-2">
                Verified Suppliers
              </h2>
              <p className="text-stone-600">
                {productSuppliers.length} suppliers offering this product with verified credentials
              </p>
            </div>
            <div className="flex items-center gap-2 text-orange-600">
              <Award className="w-5 h-5" />
              <span className="font-medium">All suppliers verified</span>
            </div>
          </div>
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
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-stone-800 mb-2">Related Products</h2>
              <p className="text-stone-600">Other products in the {product.category} category</p>
            </div>
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
