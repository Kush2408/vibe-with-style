
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';

const newInProducts = [
  {
    id: 101,
    name: "Wavy Metallic Puffer",
    price: 139,
    image: "photo-1465101046530-73398c7f28ca",
    category: "Outerwear",
    isNew: true,
    isSale: false,
  },
  {
    id: 102,
    name: "Patchwork Denim Vest",
    price: 69,
    image: "photo-1512436991641-6745cdb1723f",
    category: "Tops",
    isNew: true,
    isSale: false,
  },
  {
    id: 103,
    name: "Graffiti Flare Pants",
    price: 80,
    originalPrice: 99,
    image: "photo-1469398715555-76331a00aeb1",
    category: "Bottoms",
    isNew: true,
    isSale: true,
  },
  {
    id: 104,
    name: "Neon Chunky Sandals",
    price: 55,
    image: "photo-1484516388703-cd1873f2432e",
    category: "Shoes",
    isNew: true,
    isSale: false,
  },
  {
    id: 105,
    name: "Tattoo Sleeve Mesh Top",
    price: 39,
    image: "photo-1517841905240-472988babdf9",
    category: "Tops",
    isNew: true,
    isSale: false,
  },
  {
    id: 106,
    name: "Subtle Bling Crystal Choker",
    price: 25,
    image: "photo-1438761681033-6461ffad8d80",
    category: "Accessories",
    isNew: true,
    isSale: false,
  },
  {
    id: 107,
    name: "Cyber Cat-Eye Sunglasses",
    price: 30,
    originalPrice: 38,
    image: "photo-1502720705749-3cfa9258b15c",
    category: "Accessories",
    isNew: true,
    isSale: true,
  },
  {
    id: 108,
    name: "Digital Age Mini Dress",
    price: 77,
    image: "photo-1508214751196-bcfd4ca60f91",
    category: "Dresses",
    isNew: true,
    isSale: false,
  },
];

const NewInProducts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Header />
      <div className="py-16 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          New In 🔥
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Fresh drops for your next slay. Discover this week's hottest arrivals.
        </p>
      </div>
      <ProductGrid
        products={newInProducts}
        activeFilter="New In"
        showFilters={true}
      />
    </div>
  );
};

export default NewInProducts;
