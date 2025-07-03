import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const TechLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sticky Sidebar */}
      <aside className="w-[250px] bg-white shadow-md sticky top-0 h-screen">
        <Sidebar  />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Sticky Header */}
        <header className="h-[90px] bg-teal-500 flex items-center justify-between px-6 shadow text-white sticky top-0 z-50">
          <Navbar />
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>

        {/* Sticky Footer */}
        <footer className="h-[50px] bg-teal-500 text-white text-center flex items-center justify-center sticky bottom-0 z-40">
          Helpdesk &copy; 2025
        </footer>
      </div>
    </div>
  );
};

export default TechLayout;
