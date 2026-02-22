import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6 space-y-6">
        <h1 className="font-display text-5xl md:text-6xl text-white drop-shadow-lg">
          Crafted Coffee,
          <br /> Made With Passion
        </h1>

        <p className="text-gray-200 text-lg">
          Experience the perfect balance of flavor, aroma, and comfort in every
          cup.
        </p>

        <button className="px-8 py-3 rounded-full text-white btn-primary">
          Explore Menu
        </button>
      </div>
    </motion.section>
  );
};

export default HeroSection;
