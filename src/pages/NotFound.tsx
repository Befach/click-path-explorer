
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center b2b-gradient">
      <div className="text-center bg-white rounded-xl shadow-lg p-12 max-w-md mx-4 border border-stone-100">
        <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-orange-600">404</span>
        </div>
        <h1 className="text-3xl font-bold text-stone-800 mb-4">Page Not Found</h1>
        <p className="text-stone-600 text-lg mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          Return to Marketplace
        </a>
      </div>
    </div>
  );
};

export default NotFound;
