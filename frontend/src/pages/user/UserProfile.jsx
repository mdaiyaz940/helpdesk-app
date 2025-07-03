import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { logoutUser, submitFeedback, getUserProfile } from "../../api"; // Create these in your API utils

const UserProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Fetch profile from backend
    const fetchProfile = async () => {
      try {
        const res = await getUserProfile();
        setProfile(res.data);
      } catch (err) {
        alert("Error fetching profile");
      }
    };
    fetchProfile();
  }, []);

  const handleFeedbackSubmit = async () => {
    if (!feedback || rating === 0) return alert("Please give feedback and rating");

    try {
      await submitFeedback({ feedback, rating });
      alert("Feedback submitted!");
      setFeedback("");
      setRating(0);
    } catch (err) {
      alert("Error submitting feedback");
    }
  };

  const handleLogout = () => {
    logoutUser(); // Clears token/localStorage
    navigate("/"); // Redirect to login
  };

  return (
    <div className="p-6 bg-teal-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">User Profile</h2>
        <button onClick={handleLogout} title="Logout" className="text-xl hover:text-red-500">
          🔒
        </button>
      </div>

      <div className="flex gap-8">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded shadow w-1/2 flex items-center gap-4">
          <FaUserCircle className="text-6xl text-gray-400" />
          <div>
            <p><strong>Username:</strong> {profile.name}</p>
            <p><strong>Contact:</strong> {profile.contact || "N/A"}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Department:</strong> {profile.department || "N/A"}</p>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="bg-white p-6 rounded shadow w-1/2">
          <h3 className="text-lg font-semibold mb-2">Give Your Feedback</h3>
          <textarea
            placeholder="Your feedback..."
            className="w-full p-2 border rounded mb-2"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <div className="flex items-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-2xl cursor-pointer ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
          <button
            onClick={handleFeedbackSubmit}
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
