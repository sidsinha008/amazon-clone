import { Search, ShoppingCart, User, MapPin } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className="bg-[hsl(var(--header-dark))] text-white sticky top-0 z-50">
      {/* Top Header */}
      <div className="bg-[hsl(var(--header-light))] px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Deliver to Your Location</span>
          </div>
          <div className="flex items-center gap-4">
            {/* 
              TO ADD YOUR PHOTO: 
              1. Save your photo as 'my-photo.jpg' in the src/assets/ folder
              2. Uncomment the lines below and update the import at the top
              
              import myPhoto from "@/assets/my-photo.jpg";
              <img src={myPhoto} alt="Your Name" className="w-8 h-8 rounded-full object-cover border-2 border-primary" />
            */}
            <button className="hover:text-primary transition-colors">Returns & Orders</button>
            <button className="hover:text-primary transition-colors">Customer Service</button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">ShopHub</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-3xl">
            <div className="relative flex">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                className="w-full px-4 py-2.5 rounded-l-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary px-6 py-2.5 rounded-r-md hover:bg-[hsl(var(--primary-hover))] transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 hover:text-primary transition-colors">
              <User className="w-6 h-6" />
              <span className="text-sm">Account</span>
            </button>

            <button className="flex items-center gap-2 hover:text-primary transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="text-sm">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-scale-in">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
