
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';

const accessoriesProducts = [
  {
    id: 501,
    name: "Butterfly Clips Set",
    price: 15,
    image: "photo-1492447273231-0f8fecec1e3a",
    category: "Accessories",
  },
  {
    id: 502,
    name: "Cyber Cat-Eye Sunglasses",
    price: 28,
    originalPrice: 38,
    image: "photo-1502720705749-3cfa9258b15c",
    category: "Accessories",
    isSale: true,
  },
  {
    id: 503,
    name: "Crystal Choker",
    price: 19,
    image: "photo-1438761681033-6461ffad8d80",
    category: "Accessories",
    isNew: true,
  },
  {
    id: 504,
    name: "Matrix Sunnies",
    price: 23,
    image: "photo-1526374965328-7f61d4dc18c5",
    category: "Accessories",
  },
];

const AccessoriesProducts = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
    <Header />
    <div className="py-16 px-4 text-center">
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Accessories 🕶️
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        All the fixings for your fit—add a little sparkle, a little edge.
      </p>
    </div>
    <ProductGrid
      products={accessoriesProducts}
      activeFilter="Accessories"
      showFilters={true}
    />
  </div>
);

export default AccessoriesProducts;
