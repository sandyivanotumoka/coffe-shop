import type { Menu } from "../types/menu";

const STORAGE_KEY = "coffee_menus";

function loadMenus(): Menu[] {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    return [
      {
        id: "1",
        name: "Cappuccino",
        price: 28000,
        description: "Rich espresso with steamed milk foam",
        image:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: "2",
        name: "Caramel Latte",
        price: 32000,
        description: "Sweet caramel blended with creamy milk",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: "3",
        name: "Americano",
        price: 22000,
        description: "Bold espresso diluted with hot water",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
      },
    ];
  }

  return JSON.parse(data);
}

function saveMenus(menus: Menu[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(menus));
}

export async function getMenus(): Promise<Menu[]> {
  await new Promise((r) => setTimeout(r, 200));
  return loadMenus();
}

export async function createMenu(data: Omit<Menu, "id">): Promise<Menu> {
  await new Promise((r) => setTimeout(r, 200));

  const menus = loadMenus();

  const newMenu: Menu = {
    id: crypto.randomUUID(),
    ...data,
  };

  const updated = [...menus, newMenu];

  saveMenus(updated);

  return newMenu;
}

export async function updateMenu(
  id: string,
  data: Omit<Menu, "id">,
): Promise<Menu | null> {
  await new Promise((r) => setTimeout(r, 200));

  const menus = loadMenus();

  const index = menus.findIndex((m) => m.id === id);
  if (index === -1) return null;

  const updatedMenu: Menu = {
    id,
    ...data,
  };

  menus[index] = updatedMenu;

  saveMenus(menus);

  return updatedMenu;
}

export async function deleteMenu(id: string): Promise<boolean> {
  await new Promise((r) => setTimeout(r, 200));

  const menus = loadMenus();

  const filtered = menus.filter((m) => m.id !== id);

  saveMenus(filtered);

  return true;
}
