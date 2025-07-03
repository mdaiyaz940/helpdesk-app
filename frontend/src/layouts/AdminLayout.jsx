// /src/layouts/AdminLayout.jsx

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - Sticky */}
      <aside className="w-[250px] h-screen sticky top-0 bg-white shadow-md">
        <Sidebar  />
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar - Sticky */}
        <header className="h-[90px] sticky top-0 z-50 bg-teal-500 flex items-center justify-between px-6 shadow text-white">
          <Navbar />
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>

        {/* Footer - Sticky width */}
        <footer className="h-[50px] bg-teal-500 text-white text-center flex items-center justify-center sticky bottom-0 z-40">
          Helpdesk Admin © 2025
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
