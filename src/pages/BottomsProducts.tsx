
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';

const bottomsProducts = [
  {
    id: 401,
    name: "Baggy Cargo Pants",
    price: 60,
    image: "photo-1594633312681-425c7b97ccd1",
    category: "Bottoms",
    isNew: true,
  },
  {
    id: 402,
    name: "Rave Mini Skirt",
    price: 37,
    image: "photo-1515372039744-b8f02a3ae446",
    category: "Bottoms",
  },
  {
    id: 403,
    name: "Graffiti Flare Pants",
    price: 80,
    image: "photo-1469398715555-76331a00aeb1",
    originalPrice: 99,
    isSale: true,
    category: "Bottoms",
  },
  {
    id: 404,
    name: "Patchwork Denim Shorts",
    price: 28,
    image: "photo-1488590528505-98d2b5aba04b",
    category: "Bottoms",
    isNew: false,
  },
];

const BottomsProducts = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
    <Header />
    <div className="py-16 px-4 text-center">
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Bottoms 👖
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        From cargo to mini, slay your look from the ground up!
      </p>
    </div>
    <ProductGrid
      products={bottomsProducts}
      activeFilter="Bottoms"
      showFilters={true}
    />
  </div>
);

export default BottomsProducts;
