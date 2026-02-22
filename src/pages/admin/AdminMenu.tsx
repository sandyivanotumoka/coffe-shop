import AdminLayout from "../../layouts/AdminLayout";
// import type { Menu } from "../../types/menu";
import { useMenu } from "../../context/MenuContext.js";
import { deleteMenu } from "../../services/menu.service.js";
import Swal from "sweetalert2";

const AdminMenu = () => {
  const { menus, refreshMenus } = useMenu();

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Delete Menu?",
      text: "Menu yang dihapus tidak bisa dikembalikan.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6F4E37",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    await deleteMenu(id);
    await refreshMenus();

    await Swal.fire({
      title: "Deleted!",
      text: "Menu berhasil dihapus.",
      icon: "success",
      confirmButtonColor: "#6F4E37",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="font-display text-4xl">Manage Menu</h1>

          <button
            onClick={() => (window.location.href = "/admin/menu/new")}
            className="px-5 py-2 rounded-lg text-white btn-primary"
          >
            + Add Menu
          </button>
        </div>

        <table className="w-full border border-primary/20 rounded-xl overflow-hidden">
          <thead className="bg-primary text-white">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Price</th>
              <th className="text-left p-3">Description</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {menus.map((item) => (
              <tr key={item.id} className="border-t border-primary/10">
                <td className="p-3">{item.name}</td>
                <td className="p-3">Rp {item.price.toLocaleString()}</td>
                <td className="p-3">{item.description}</td>
                <td className="p-3">
                  <button
                    onClick={() =>
                      (window.location.href = `/admin/menu/${item.id}/edit`)
                    }
                    className="px-3 py-1 rounded bg-primary text-white text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1 rounded bg-red-500 text-white text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default AdminMenu;
