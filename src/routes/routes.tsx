import App from "@/App";
import AddService from "@/admin/AddService";
import Dashboard from "@/admin/Dashboard";
import ServiceList from "@/admin/ServiceList";
import AdminLayout from "@/components/layouts/AdminLayout";
import About from "@/pages/About";
import Home from "@/pages/home";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard"></Navigate>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "serviceList",
        element: <ServiceList></ServiceList>,
      },
      {
        path: "add-service",
        element: <AddService></AddService>,
      },
    ],
  },
]);

export default router;
