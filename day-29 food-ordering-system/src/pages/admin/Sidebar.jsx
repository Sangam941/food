import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="h-screen w-64 border-r bg-white p-6">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-orange-500">
          Foodie Admin
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your menu
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <NavLink
          to="/admin/all-products"
          className={({ isActive }) =>
            `block rounded-xl px-4 py-3 font-medium transition ${
              isActive
                ? "bg-orange-500 text-white"
                : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
            }`
          }
        >
          📋 All Products
        </NavLink>

        <NavLink
          to="/admin/add"
          className={({ isActive }) =>
            `block rounded-xl px-4 py-3 font-medium transition ${
              isActive
                ? "bg-orange-500 text-white"
                : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
            }`
          }
        >
          ➕ Add Product
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;