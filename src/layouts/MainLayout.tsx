import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import { Instagram, Facebook, Twitter } from "lucide-react";
import type { form } from "framer-motion/client";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="flex-1 container mx-auto px-4 py-24 md:py-28 bg-[var(--color-bg)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative mt-32 bg-gradient-to-b from-black to-neutral-900 text-gray-400 overflow-hidden">
        <div className="container mx-auto px-6 py-20 space-y-16">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/20 blur-3xl rounded-full" />
          {/* Top Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <h2 className="font-display text-3xl text-white">CoffeeShop</h2>
              <p>Crafted with passion. Brewed to perfection.</p>
            </div>

            <div className="flex gap-6 mt-8">
              <a
                href="#"
                className="group w-14 h-14 flex items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:bg-primary hover:scale-110"
              >
                <Instagram
                  size={24}
                  className="transition group-hover:text-white"
                />
              </a>

              <a
                href="#"
                className="group w-14 h-14 flex items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:bg-primary hover:scale-110"
              >
                <Facebook
                  size={24}
                  className="transition group-hover:text-white"
                />
              </a>

              <a
                href="#"
                className="group w-14 h-14 flex items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:bg-primary hover:scale-110"
              >
                <Twitter
                  size={24}
                  className="transition group-hover:text-white"
                />
              </a>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Explore</h3>
              <div className="flex flex-col gap-2">
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
                <a href="/menu" className="hover:text-white transition">
                  Menu
                </a>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Contact</h3>
              <p>Kota Poso, Indonesia</p>
              <p>hello@coffeeshop.com</p>
              <p>+62 812 3456 7890</p>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} CoffeeShopSandy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
