import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-[var(--color-bg)]">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-primary/20 p-6 space-y-6">
        <h2 className="font-display text-2xl text-primary">Admin</h2>

        <nav className="flex flex-col gap-3 text-main">
          <button onClick={() => navigate("/admin")} className="text-left">
            Dashboard
          </button>
          <button onClick={() => navigate("/admin/menu")} className="text-left">
            Menu
          </button>
        </nav>

        <button
          onClick={logout}
          className="mt-10 px-4 py-2 rounded-lg text-white btn-primary"
        >
          Logout
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
};

export default AdminLayout;
