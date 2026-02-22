import { createContext, useContext, useEffect, useState } from "react";
import type { Menu } from "../types/menu";
import { getMenus } from "../services/menu.service";

type MenuContextType = {
  menus: Menu[];
  refreshMenus: () => Promise<void>;
};

const MenuContext = createContext<MenuContextType | null>(null);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [menus, setMenus] = useState<Menu[]>([]);

  const refreshMenus = async () => {
    const data = await getMenus();
    setMenus(data);
  };

  useEffect(() => {
    refreshMenus();
  }, []);

  return (
    <MenuContext.Provider value={{ menus, refreshMenus }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used inside MenuProvider");
  }
  return context;
};
