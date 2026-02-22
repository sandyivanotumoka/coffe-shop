import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-[var(--color-bg)]">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image with slow zoom */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 space-y-6"
        >
          <h1 className="font-display text-6xl md:text-7xl text-white tracking-wide">
            Our Story
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            More than coffee. It’s about passion, craft, and the moments we
            share together.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop"
              alt="Coffee shop interior"
              className="rounded-3xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display text-4xl text-primary">
              Brewing Excellence Since 2020
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We believe coffee is more than just a drink. It is an experience,
              a moment of comfort, and a connection between people.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Every cup we serve is crafted from premium beans, carefully
              selected and roasted to perfection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 space-y-16 text-center">
          <h2 className="font-display text-4xl text-primary">Why Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 rounded-3xl border border-primary/10 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Premium Beans</h3>
              <p className="text-gray-600">
                Sourced from the finest coffee farms worldwide.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-primary/10 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Expert Baristas</h3>
              <p className="text-gray-600">
                Skilled professionals passionate about coffee.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-primary/10 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Cozy Atmosphere</h3>
              <p className="text-gray-600">
                A warm and welcoming space to relax and connect.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
