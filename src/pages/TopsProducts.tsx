
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';

const topsProducts = [
  {
    id: 301,
    name: "Ribbed Crop Tee",
    price: 25,
    image: "photo-1517841905240-472988babdf9",
    category: "Tops",
    isNew: true,
  },
  {
    id: 302,
    name: "Mesh Long Sleeve",
    price: 39,
    image: "photo-1512436991641-6745cdb1723f",
    category: "Tops",
    isNew: false,
  },
  {
    id: 303,
    name: "Tattoo Graphic Mesh Top",
    price: 29,
    image: "photo-1465101046530-73398c7f28ca",
    category: "Tops",
    isSale: true,
    originalPrice: 47,
  },
  {
    id: 304,
    name: "Oversized Vintage Tee",
    price: 32,
    image: "photo-1521572163474-6864f9cf17ab",
    category: "Tops",
  },
];

const TopsProducts = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
    <Header />
    <div className="py-16 px-4 text-center">
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Tops 👚
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Top up your style with the freshest statement pieces.
      </p>
    </div>
    <ProductGrid
      products={topsProducts}
      activeFilter="Tops"
      showFilters={true}
    />
  </div>
);

export default TopsProducts;
