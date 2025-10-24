export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  // Electronics
  {
    id: 1,
    title: "Premium Wireless Headphones with Noise Cancellation",
    price: 4999,
    originalPrice: 7999,
    rating: 4.5,
    reviews: 234,
    image: "/src/assets/product-1.jpg",
    category: "electronics",
  },
  {
    id: 2,
    title: "Smart Watch with Fitness Tracking",
    price: 3499,
    originalPrice: 5999,
    rating: 4.3,
    reviews: 189,
    image: "/src/assets/product-2.jpg",
    category: "electronics",
  },
  // Fashion
  {
    id: 3,
    title: "Designer Cotton T-Shirt for Men",
    price: 799,
    originalPrice: 1299,
    rating: 4.2,
    reviews: 432,
    image: "/src/assets/product-3.jpg",
    category: "fashion",
  },
  {
    id: 4,
    title: "Women's Casual Denim Jacket",
    price: 2499,
    originalPrice: 3999,
    rating: 4.6,
    reviews: 287,
    image: "/src/assets/product-4.jpg",
    category: "fashion",
  },
  // Home & Kitchen
  {
    id: 5,
    title: "Stainless Steel Cookware Set",
    price: 3999,
    rating: 4.4,
    reviews: 156,
    image: "/src/assets/product-5.jpg",
    category: "home-&-kitchen",
  },
  {
    id: 6,
    title: "Electric Rice Cooker 1.8L",
    price: 1899,
    originalPrice: 2499,
    rating: 4.1,
    reviews: 312,
    image: "/src/assets/product-6.jpg",
    category: "home-&-kitchen",
  },
  // Sports & Outdoors
  {
    id: 7,
    title: "Yoga Mat with Carrying Strap",
    price: 899,
    originalPrice: 1499,
    rating: 4.3,
    reviews: 198,
    image: "/src/assets/product-7.jpg",
    category: "sports-&-outdoors",
  },
  {
    id: 8,
    title: "Professional Basketball",
    price: 1299,
    rating: 4.5,
    reviews: 223,
    image: "/src/assets/product-8.jpg",
    category: "sports-&-outdoors",
  },
  // Books
  {
    id: 9,
    title: "Bestselling Fiction Novel Collection",
    price: 599,
    originalPrice: 999,
    rating: 4.7,
    reviews: 445,
    image: "/src/assets/product-1.jpg",
    category: "books",
  },
  {
    id: 10,
    title: "Self-Help and Motivation Book",
    price: 399,
    rating: 4.4,
    reviews: 367,
    image: "/src/assets/product-2.jpg",
    category: "books",
  },
  // Beauty
  {
    id: 11,
    title: "Organic Face Care Gift Set",
    price: 1499,
    originalPrice: 2299,
    rating: 4.6,
    reviews: 289,
    image: "/src/assets/product-3.jpg",
    category: "beauty",
  },
  {
    id: 12,
    title: "Hair Styling Tool Kit",
    price: 2999,
    rating: 4.3,
    reviews: 178,
    image: "/src/assets/product-4.jpg",
    category: "beauty",
  },
  // Toys & Games
  {
    id: 13,
    title: "Educational Building Blocks Set",
    price: 1299,
    originalPrice: 1999,
    rating: 4.8,
    reviews: 512,
    image: "/src/assets/product-5.jpg",
    category: "toys-&-games",
  },
  {
    id: 14,
    title: "Remote Control Car",
    price: 2499,
    rating: 4.5,
    reviews: 234,
    image: "/src/assets/product-6.jpg",
    category: "toys-&-games",
  },
  // Automotive
  {
    id: 15,
    title: "Car Dashboard Camera HD",
    price: 3499,
    originalPrice: 4999,
    rating: 4.4,
    reviews: 156,
    image: "/src/assets/product-7.jpg",
    category: "automotive",
  },
  {
    id: 16,
    title: "Car Vacuum Cleaner Portable",
    price: 1799,
    rating: 4.2,
    reviews: 289,
    image: "/src/assets/product-8.jpg",
    category: "automotive",
  },
];
