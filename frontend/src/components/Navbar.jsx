import { FaBell, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="flex items-center gap-6 ml-auto">
      <span className="bg-white text-teal-600 font-semibold px-2 py-1 rounded">BM</span>
      <FaBell className="text-xl cursor-pointer" />

      <FaUser
        className="text-xl cursor-pointer hover:text-teal-600"
        onClick={() => navigate("/user/profile")}
        title="User Profile"
      />

      <FaSignOutAlt
        className="text-xl cursor-pointer hover:text-red-600"
        onClick={handleLogout}
        title="Logout"
      />
    </div>
  );
};

export default Navbar;
