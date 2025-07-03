// frontend/src/pages/auth/Signup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (form.password !== form.confirmPassword) {
    //   alert("Passwords do not match");
    //   return;
    // }

    try {
      await signup(form);

      const username = form.username;
      let role = "user";
      if (username === "admin") role = "admin";
      else if (username === "ops") role = "ops";
      else if (username === "tech") role = "techsupport";

      localStorage.setItem("role", role);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("username", username);

      if (role === "admin") navigate("/admin/dashboard");
      else if (role === "ops") navigate("/ops/dashboard");
      else if (role === "techsupport") navigate("/techsupport/dashboard");
      else navigate("/user/dashboard");
    } catch (err) {
      alert("Signup failed: " + err.response?.data?.msg || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
       
        
        <div className="bg-gradient-to-br from-teal-400 to-teal-500 p-8 rounded-lg shadow-lg">
          <div className="bg-teal-200 bg-opacity-60 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2 italic">
              Helpdesk System
            </h2>
            <p className="text-center text-gray-700 text-sm mb-8">Sign up here</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={form.username}
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
                  value={form.password}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>
              
              {/* <div className="hidden">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div> */}
              
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded transition-colors duration-200"
              >
                Sign Up
              </button>
            </form>
            
           
            
            <p className="mt-4 text-sm text-center text-gray-700">
              Already have an account?{" "}
              <span
                className="underline cursor-pointer font-medium"
                onClick={() => navigate("/")}
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;