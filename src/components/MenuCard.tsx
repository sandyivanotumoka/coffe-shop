import { useCart } from "../context/CartContext";
import type { Menu } from "../types/menu";

const MenuCard = ({ item }: { item: Menu }) => {
  const { addToCart } = useCart();

  return (
    <div className="group overflow-hidden rounded-3xl bg-surface shadow-sm hover:shadow-xl transition-all duration-500">
      {/* Image */}
      <div className="h-64 overflow-hidden">
        <img
          src={
            item.image && item.image.trim() !== ""
              ? item.image
              : "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          }
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold text-main">{item.name}</h3>

        <p className="text-primary font-medium">
          Rp {item.price.toLocaleString()}
        </p>

        <button
          onClick={() => addToCart(item)}
          className="mt-3 w-full py-2 rounded-full text-white btn-primary transition hover:scale-105 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
