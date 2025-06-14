
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Header />
      <div className="py-16 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Shop the Collection
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Every piece tells a story. What's yours? 💫
        </p>
      </div>
      <ProductGrid showFilters={true} />
    </div>
  );
};

export default Products;
