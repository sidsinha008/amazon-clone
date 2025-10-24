import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

const products = [
  {
    image: product1,
    title: "Premium Wireless Headphones - Noise Cancelling",
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 1243,
  },
  {
    image: product2,
    title: "Smart Watch - Fitness Tracker with Heart Rate Monitor",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 856,
  },
  {
    image: product3,
    title: "Leather Backpack - Premium Quality for Travel & Work",
    price: 89.99,
    originalPrice: 120.00,
    rating: 4.6,
    reviews: 542,
  },
  {
    image: product4,
    title: "RGB Mechanical Gaming Keyboard - Cherry MX Switches",
    price: 119.99,
    originalPrice: 159.99,
    rating: 4.9,
    reviews: 2104,
  },
  {
    image: product5,
    title: "Running Shoes - Lightweight Athletic Footwear",
    price: 69.99,
    originalPrice: 99.99,
    rating: 4.4,
    reviews: 687,
  },
  {
    image: product6,
    title: "Stainless Steel Coffee Maker - Programmable Brewer",
    price: 59.99,
    originalPrice: 89.99,
    rating: 4.3,
    reviews: 423,
  },
  {
    image: product7,
    title: "Professional Camera Lens - 24-70mm f/2.8",
    price: 899.99,
    originalPrice: 1199.99,
    rating: 4.9,
    reviews: 312,
  },
  {
    image: product8,
    title: "Tablet Device - 10.5 inch Display, 256GB Storage",
    price: 449.99,
    originalPrice: 599.99,
    rating: 4.7,
    reviews: 1567,
  },
];

const ProductGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-foreground">Featured Products</h2>
        <button className="text-primary hover:underline font-semibold">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
        {products.map((product, index) => (
          <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
