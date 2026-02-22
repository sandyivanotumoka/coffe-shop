import AdminLayout from "../layouts/AdminLayout";

const Admin = () => {
  return (
    <AdminLayout>
      <div className="space-y-4">
        <h1 className="font-display text-4xl">Dashboard</h1>
        <p className="text-gray-600">Welcome back, admin ☕</p>
      </div>
    </AdminLayout>
  );
};

export default Admin;
