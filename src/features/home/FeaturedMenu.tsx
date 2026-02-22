import { useEffect, useState } from "react";
import MenuCard from "../../components/MenuCard";
// import type { Menu } from "../../types/menu";
import MenuCardSkeleton from "../../components/MenuCardSkeleton";
import { useMenu } from "../../context/MenuContext.js";

const FeaturedMenu = () => {
  const { menus } = useMenu();

  if (!menus.length) {
    return (
      <section className="py-20 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="font-display text-4xl">Popular Menu</h2>
          <p className="text-gray-600">
            Our customers favorite coffee selection
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <MenuCardSkeleton key={i} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 space-y-10">
      <div className="text-center space-y-3">
        <h2 className="font-display text-4xl">Popular Menu</h2>
        <p className="text-gray-600">Our customers favorite coffee selection</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {menus.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedMenu;
