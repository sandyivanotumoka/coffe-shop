import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

type Props = {
  open: boolean;
  onClose: () => void;
};

const CartDrawer = ({ open, onClose }: Props) => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-[998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-[999] p-6 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-display mb-6">Your Cart</h2>

            <div className="flex-1 overflow-y-auto space-y-4">
              {cart.length === 0 && (
                <p className="text-gray-500">Cart is empty</p>
              )}

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-surface border border-primary/10 rounded-xl p-4 flex justify-between items-start hover:shadow-sm transition"
                >
                  <div>
                    <h3 className="font-medium text-main">{item.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.quantity} × Rp {item.price.toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-xs hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-primary/10 pt-6 space-y-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>Rp {total.toLocaleString()}</span>
              </div>

              <button
                onClick={clearCart}
                className="w-full py-2 border border-primary/30 rounded-lg hover:bg-primary/5 transition"
              >
                Clear Cart
              </button>

              <button className="w-full py-3 rounded-lg text-white btn-primary hover:scale-[1.02] transition">
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
