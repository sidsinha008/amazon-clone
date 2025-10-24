import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import HeroSlider from "@/components/HeroSlider";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <CategoryNav />
        <HeroSlider />
        <ProductGrid />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
