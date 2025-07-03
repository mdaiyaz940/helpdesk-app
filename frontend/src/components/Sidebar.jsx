import {
  FaTachometerAlt,
  FaPlusCircle,
  FaTicketAlt,
  FaUsers,
  FaDatabase,
  FaTasks,
  FaTools,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  // Auto-detect role from localStorage
  const role = localStorage.getItem("role") || "user";

  const links = {
    user: [
      { name: "Dashboard", path: "/user/dashboard", icon: <FaTachometerAlt /> },
      { name: "New Ticket", path: "/user/create-ticket", icon: <FaPlusCircle /> },
      { name: "My Ticket", path: "/user/view-tickets", icon: <FaTicketAlt /> },
    ],
    admin: [
      { name: "Dashboard", path: "/admin/dashboard", icon: <FaTachometerAlt /> },
      { name: "Database", path: "/admin/database", icon: <FaDatabase /> },
      
    ],
    ops: [
      { name: "Dashboard", path: "/ops/dashboard", icon: <FaTachometerAlt /> },
      { name: "Ticket Approval", path: "/ops/ticket-approval", icon: <FaTasks /> },
    ],
    techsupport: [
      { name: "Dashboard", path: "/techsupport/dashboard", icon: <FaTachometerAlt /> },
      { name: "Performance", path: "/techsupport/performance", icon: <FaTools /> },
    ],
  };

  return (
    <div className="h-full p-4">
      <h2 className="text-2xl font-bold text-teal-600 mb-8">Helpdesk</h2>
      <nav className="flex flex-col gap-4">
        {links[role]?.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 text-sm font-medium px-3 py-2 rounded-md hover:bg-teal-100 ${
                isActive ? "bg-teal-200 text-teal-700" : "text-gray-700"
              }`
            }
          >
            {link.icon}
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
