import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import { useMenu } from "../../context/MenuContext";
import { updateMenu } from "../../services/menu.service";
import Swal from "sweetalert2";

const AdminMenuEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { menus, refreshMenus } = useMenu();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const menu = menus.find((m) => m.id === id);
    if (menu) {
      setName(menu.name);
      setPrice(String(menu.price));
      setDescription(menu.description);
    }
  }, [id, menus]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id) return;

    await updateMenu(id, {
      name,
      price: Number(price),
      description,
    });

    await refreshMenus();

    await Swal.fire({
      icon: "success",
      title: "Menu Updated!",
      text: "Perubahan berhasil disimpan.",
      confirmButtonColor: "#6F4E37",
    });

    navigate("/admin/menu");
  };

  return (
    <AdminLayout>
      <div className="max-w-xl space-y-6">
        <h1 className="font-display text-4xl">Edit Menu</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Menu name"
            className="w-full border border-primary/30 rounded-lg px-4 py-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price"
            className="w-full border border-primary/30 rounded-lg px-4 py-3"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <textarea
            placeholder="Description"
            className="w-full border border-primary/30 rounded-lg px-4 py-3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="px-6 py-3 rounded-lg text-white btn-primary">
            Save Changes
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AdminMenuEdit;
