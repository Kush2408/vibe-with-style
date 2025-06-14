
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import NewInProducts from "./pages/NewInProducts";
import SaleProducts from "./pages/SaleProducts";
import TopsProducts from "./pages/TopsProducts";
import BottomsProducts from "./pages/BottomsProducts";
import AccessoriesProducts from "./pages/AccessoriesProducts";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/new" element={<NewInProducts />} />
          <Route path="/products/sale" element={<SaleProducts />} />
          <Route path="/products/tops" element={<TopsProducts />} />
          <Route path="/products/bottoms" element={<BottomsProducts />} />
          <Route path="/products/accessories" element={<AccessoriesProducts />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
