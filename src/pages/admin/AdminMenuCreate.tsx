import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { createMenu } from "../../services/menu.service.js";
import { useNavigate } from "react-router-dom";
import { useMenu } from "../../context/MenuContext.js";
import Swal from "sweetalert2";

const AdminMenuCreate = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { refreshMenus } = useMenu();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !price) {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Name dan price wajib diisi!",
        confirmButtonColor: "#6F4E37",
      });
      return;
    }

    await createMenu({
      name,
      price: Number(price),
      description,
    });

    await refreshMenus();

    await Swal.fire({
      icon: "success",
      title: "Menu Added!",
      text: "Menu berhasil ditambahkan.",
      confirmButtonColor: "#6F4E37",
    });

    navigate("/admin/menu");
  };

  return (
    <AdminLayout>
      <div className="max-w-xl space-y-6">
        <h1 className="font-display text-4xl">Add New Menu</h1>

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
            Save Menu
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AdminMenuCreate;
