// frontend/src/pages/auth/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = formData;

    try {
      await login(formData);

      //  Mock role assignment logic
      let role = "user";
      if (username === "admin") role = "admin";
      else if (username === "ops") role = "ops";
      else if (username === "tech") role = "techsupport";

      // Store role and login session
      localStorage.setItem("role", role);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("username", username);

      // Redirect based on role
      if (role === "admin") navigate("/admin/dashboard");
      else if (role === "ops") navigate("/ops/dashboard");
      else if (role === "techsupport") navigate("/techsupport/dashboard");
      else navigate("/user/dashboard");
    } catch (err) {
      alert("Login failed: " + err.response?.data?.msg || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        
        
        <div className="bg-gradient-to-br from-teal-400 to-teal-500 p-8 rounded-lg shadow-lg">
          <div className="bg-teal-200 bg-opacity-60 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 italic">
              Helpdesk System
            </h2>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>
              
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded transition-colors duration-200"
              >
                Sign In
              </button>
            </form>
            
            <div className="flex justify-between items-center mt-6">
              <a 
                href="/forgot-password" 
                className="text-red-500 text-sm hover:underline"
              >
                Forgot password?
              </a>
              <a 
                href="/signup" 
                className="text-gray-700 text-sm hover:underline font-medium"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;