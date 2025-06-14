import ProductCard from './ProductCard';
import { Link, useLocation } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductGridProps {
  products?: Product[];
  activeFilter?: string;
  showFilters?: boolean;
}

// Default main site products (for /products route)
const defaultProducts: Product[] = [
  {
    id: 1,
    name: "Oversized Vintage Tee",
    price: 29,
    originalPrice: 45,
    image: "photo-1521572163474-6864f9cf17ab",
    category: "Tops",
    isNew: false,
    isSale: true,
  },
  {
    id: 2,
    name: "Y2K Cargo Pants",
    price: 65,
    image: "photo-1594633312681-425c7b97ccd1",
    category: "Bottoms",
    isNew: true,
    isSale: false,
  },
  {
    id: 3,
    name: "Cropped Puffer Jacket",
    price: 120,
    image: "photo-1551028719-00167b16eac5",
    category: "Outerwear",
    isNew: true,
    isSale: false,
  },
  {
    id: 4,
    name: "Platform Sneakers",
    price: 89,
    originalPrice: 120,
    image: "photo-1549298916-b41d501d3772",
    category: "Shoes",
    isNew: false,
    isSale: true,
  },
  {
    id: 5,
    name: "Holographic Mini Skirt",
    price: 55,
    image: "photo-1515372039744-b8f02a3ae446",
    category: "Bottoms",
    isNew: true,
    isSale: false,
  },
  {
    id: 6,
    name: "Butterfly Hair Clips Set",
    price: 15,
    image: "photo-1492447273231-0f8fecec1e3a",
    category: "Accessories",
    isNew: false,
    isSale: false,
  },
  {
    id: 7,
    name: "Neon Mesh Top",
    price: 35,
    image: "photo-1434389677669-e08b4cac3105",
    category: "Tops",
    isNew: true,
    isSale: false,
  },
  {
    id: 8,
    name: "Retro Sunglasses",
    price: 25,
    originalPrice: 40,
    image: "photo-1508296695146-257a814070b4",
    category: "Accessories",
    isNew: false,
    isSale: true,
  },
];

const FILTERS = ['All', 'New In', 'Sale', 'Tops', 'Bottoms', 'Accessories'];

const ProductGrid = ({
  products,
  activeFilter,
  showFilters = true,
}: ProductGridProps) => {
  const location = useLocation();
  // Use provided products array, or default export
  const productList = products || defaultProducts;

  // Determine active filter based on prop or route
  let currentActiveFilter: string = activeFilter || "All";
  if (!activeFilter && location.pathname === "/products/new") {
    currentActiveFilter = "New In";
  } else if (!activeFilter && location.pathname === "/products") {
    currentActiveFilter = "All";
  }

  // Filtering logic (only for demo, not for dedicated /products/new route)
  const getFilteredProducts = () => {
    if (currentActiveFilter === 'All') return productList;
    if (currentActiveFilter === 'New In') return productList.filter(p => p.isNew);
    if (currentActiveFilter === 'Sale') return productList.filter(p => p.isSale);
    return productList.filter((p) => p.category === currentActiveFilter);
  };
  const filteredProducts = getFilteredProducts();

  // When on /products/new and products are explicitly passed, skip pills' filtering (just render all)
  const isDedicatedNewIn = location.pathname === "/products/new" && !!products;

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Trending Now
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Curated pieces that are absolutely slaying right now. Get them before they're gone! ✨
        </p>
      </div>

      {/* Filter Pills */}
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTERS.map((filter) => {
            const isActive = currentActiveFilter === filter;
            // Route for filter
            let filterRoute = '/products';
            if (filter === 'New In') filterRoute = '/products/new';
            else if (filter !== 'All') filterRoute = `/products?filter=${encodeURIComponent(filter)}`;
            // Only New In and All get routes, others keep anchor for demo
            return filter === 'New In' || filter === 'All' ? (
              <Link
                to={filterRoute}
                key={filter}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </Link>
            ) : (
              <button
                key={filter}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                // For demo, other filters just set location/href or trigger more complex logic if needed
              >
                {filter}
              </button>
            );
          })}
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {(isDedicatedNewIn ? productList : filteredProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
          Load More Vibes
        </button>
      </div>
    </section>
  );
};

export default ProductGrid;
