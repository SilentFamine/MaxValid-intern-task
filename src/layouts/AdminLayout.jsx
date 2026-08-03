import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="flex flex-col flex-1">

        {/* Header */}
        <Header />

        {/* Main */}
        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;