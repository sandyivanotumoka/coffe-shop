import { createContext, useContext, useEffect, useState } from "react";
import type { Menu } from "../types/menu";

type CartItem = Menu & {
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Menu) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  bounce: boolean;
};

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = "coffee_cart";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Menu) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);

      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c,
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });

    setBounce(true);
    setTimeout(() => setBounce(false), 300);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, bounce }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
