import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-slate-200 p-4 lg:p-5 col-span-2 h-screen sticky top-0 left-0 overflow-auto">
      <nav className="flex flex-col">
        <NavLink
          className={({ isActive }) =>
            cn(
              "p-3 bg-slate-400 rounded-md hover:bg-slate-500 hover:text-white transition-all duration-300 ease-in-out  text-white font-bold mb-3 text-center flex items-center gap-2",
              {
                "bg-slate-800": isActive,
              }
            )
          }
          to="/admin/dashboard"
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "p-3 bg-slate-400 rounded-md hover:bg-slate-500 hover:text-white transition-all duration-300 ease-in-out  text-white font-bold mb-3 text-center flex items-center gap-2",
              {
                "bg-slate-800": isActive,
              }
            )
          }
          to="/admin/serviceList"
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>
          <span className="truncate">Service List</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "p-3 bg-slate-400 rounded-md hover:bg-slate-500 hover:text-white transition-all duration-300 ease-in-out  text-white font-bold mb-3 text-center flex items-center gap-2",
              {
                "bg-slate-800": isActive,
              }
            )
          }
          to="/admin/add-service"
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>
          <span className="truncate">Add service</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
