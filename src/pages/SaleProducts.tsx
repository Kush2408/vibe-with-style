
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';

const saleProducts = [
  {
    id: 201,
    name: "Electric Pink Hoodie",
    price: 44,
    originalPrice: 69,
    image: "photo-1488590528505-98d2b5aba04b",
    category: "Tops",
    isSale: true,
    isNew: false,
  },
  {
    id: 202,
    name: "Rave Cargo Pants",
    price: 55,
    originalPrice: 80,
    image: "photo-1594633312681-425c7b97ccd1",
    category: "Bottoms",
    isSale: true,
    isNew: false,
  },
  {
    id: 203,
    name: "Chunky Platform Sneakers",
    price: 69,
    originalPrice: 110,
    image: "photo-1549298916-b41d501d3772",
    category: "Shoes",
    isSale: true,
    isNew: false,
  },
  {
    id: 204,
    name: "Matrix Sunglasses",
    price: 20,
    originalPrice: 36,
    image: "photo-1526374965328-7f61d4dc18c5",
    category: "Accessories",
    isSale: true,
    isNew: false,
  },
];

const SaleProducts = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
    <Header />
    <div className="py-16 px-4 text-center">
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
        Sale 🤑
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Score the best deals on your fave items—don’t sleep on these steals!
      </p>
    </div>
    <ProductGrid
      products={saleProducts}
      activeFilter="Sale"
      showFilters={true}
    />
  </div>
);

export default SaleProducts;
