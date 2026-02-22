import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu.js";
import About from "../pages/About.js";
import Login from "../pages/Login.js";
import Admin from "../pages/Admin";
import ProtectedRoute from "./ProtectedRoute";
import AdminMenu from "../pages/admin/AdminMenu";
import AdminMenuCreate from "../pages/admin/AdminMenuCreate";
import AdminMenuEdit from "../pages/admin/AdminMenuEdit.js";

const RootLayout = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/admin/login",
        element: <Login />,
      },
      {
        path: "/admin",
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
      },

      {
        path: "/admin/menu",
        element: (
          <ProtectedRoute>
            <AdminMenu />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/menu/new",
        element: (
          <ProtectedRoute>
            <AdminMenuCreate />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/menu/:id/edit",
        element: (
          <ProtectedRoute>
            <AdminMenuEdit />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
