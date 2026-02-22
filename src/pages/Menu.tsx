import { motion } from "framer-motion";
import FeaturedMenu from "../features/home/FeaturedMenu";

const Menu = () => {
  return (
    <section className="py-24 bg-[var(--color-bg)]">
      <div className="container mx-auto px-6 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="font-display text-5xl md:text-6xl text-primary">
            Our Coffee Menu
          </h1>

          <p className="text-gray-500 max-w-xl mx-auto">
            Carefully crafted beverages made from premium beans and fresh
            ingredients.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <FeaturedMenu />
      </div>
    </section>
  );
};

export default Menu;
