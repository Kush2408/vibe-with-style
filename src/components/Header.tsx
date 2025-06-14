
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

// Removed "Tops" and "Bottoms" from navLinks array
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Shop' },
  { to: '/products/new', label: 'New In' },
  { to: '/products/sale', label: 'Sale' },
  { to: '/products/accessories', label: 'Accessories' },
];

const Header = () => {
  const [cartCount] = useState(3);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            VIBE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={
                  "text-gray-700 hover:text-purple-600 transition-colors font-medium" +
                  (location.pathname === link.to
                    ? " underline underline-offset-8 decoration-2 decoration-pink-500"
                    : "")
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search for trendy fits..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="p-2 text-gray-700 hover:text-purple-600 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </Link>
            {/* Mobile menu button with Sheet */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2 text-gray-700 hover:text-purple-600 transition-colors" aria-label="Open navigation menu">
                    <Menu className="w-5 h-5" />
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="pr-0 pl-0 w-72 flex flex-col gap-0">
                  <div className="pt-7 px-6 pb-2 flex items-center justify-between border-b border-gray-200">
                    <Link
                      to="/"
                      className="text-xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                    >
                      VIBE
                    </Link>
                  </div>
                  <nav className="flex flex-col gap-1 px-6 mt-4 w-full">
                    {navLinks.map(link => (
                      <Link
                        to={link.to}
                        key={link.to}
                        className={
                          "w-full py-3 text-lg text-gray-700 font-medium hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 rounded transition-colors" +
                          (location.pathname === link.to ? " bg-gradient-to-r from-purple-50 to-pink-50 font-bold" : "")
                        }
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="flex items-center gap-3 px-6 mt-6 mb-2">
                    <div className="relative w-full">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50"
                      />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
