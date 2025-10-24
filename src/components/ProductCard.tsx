import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
}

const ProductCard = ({
  image,
  title,
  price,
  originalPrice,
  rating,
  reviews,
}: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart();
    toast.success("Added to cart!", {
      description: title,
      duration: 2000,
    });
  };

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="bg-card rounded-lg shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden bg-secondary/30">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {discount > 0 && (
          <span className="absolute top-4 left-4 bg-destructive text-white px-3 py-1 rounded-full text-sm font-bold">
            -{discount}%
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "fill-primary text-primary"
                    : "fill-muted text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({reviews})</span>
        </div>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-foreground">${price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-[hsl(var(--primary-hover))] text-white py-2.5 rounded-md font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
