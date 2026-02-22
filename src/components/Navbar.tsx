import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext.js";
import CartDrawer from "./CartDrawer.js";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart, bounce } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[999] md:top-6 md:flex md:justify-center">
      <div
        className="
  w-full md:w-auto
  md:min-w-[720px]
  h-16 px-4 md:px-6
  flex items-center justify-between
  backdrop-blur-md bg-surface/80
  border border-primary/20
  md:rounded-full
  shadow-sm
"
      >
        {/* Logo */}
        <Link to="/" className="font-display text-2xl text-primary">
          CoffeeShop
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition ${isActive ? "text-primary" : "text-main hover:text-primary"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `transition ${isActive ? "text-primary" : "text-main hover:text-primary"}`
            }
          >
            Menu
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition ${isActive ? "text-primary" : "text-main hover:text-primary"}`
            }
          >
            About
          </NavLink>
        </nav>

        {/* Cart */}
        <div className="relative ml-4">
          <button
            onClick={() => setCartOpen(true)}
            className="text-2xl text-primary"
          >
            🛒
          </button>

          {/* Badge */}
          <motion.span
            animate={bounce ? { scale: [1, 1.4, 1] } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full"
          >
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </motion.span>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute left-0 top-0 w-6 border-t-2 border-[var(--color-primary)] transition-all duration-300 ${
                open ? "rotate-45 top-2" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-2 w-6 border-t-2 border-[var(--color-primary)] transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />

            <span
              className={`absolute left-0 bottom-0 w-6 border-t-2 border-[var(--color-primary)] transition-all duration-300 ${
                open ? "-rotate-45 bottom-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-3 mt-3 rounded-2xl backdrop-blur-xl bg-surface/70 border border-primary/20 shadow-lg">
            <div className="flex flex-col p-4 gap-4 text-main">
              <Link onClick={() => setOpen(false)} to="/">
                Home
              </Link>
              <Link onClick={() => setOpen(false)} to="/menu">
                Menu
              </Link>
              <Link onClick={() => setOpen(false)} to="/about">
                About
              </Link>
            </div>
          </div>
        </div>
      )}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
};

export default Navbar;
