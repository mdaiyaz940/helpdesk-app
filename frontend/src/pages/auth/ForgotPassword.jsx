// frontend/src/pages/auth/Forgot.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../api";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      alert(`Password reset link sent to: ${email}`);
      setEmail("");
    } catch (err) {
      alert("Error: " + err.response?.data?.msg || err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-400 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-teal-200 p-8 rounded shadow-lg w-full max-w-md border border-blue-500 text-center"
      >
        <p className="mb-6 text-sm text-black">
          Don't worry, Enter your email below and we will <br />
          send you a link to change password.
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 mb-6 border border-black rounded focus:outline-none"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-2 rounded mb-4 hover:bg-green-600"
        >
          Submit
        </button>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;