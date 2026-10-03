import { Outlet } from "react-router-dom"
import AdminSidebar from "./Sidebar"

const AdminLayout = () => {
  return (
    <div className="flex gap-2 p-4">
        <AdminSidebar/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout
