// Performance.jsx (UI-matching update only)
import { useState } from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";

const Performance = () => {
  const [ratings] = useState([
    { id: "TS001", name: "Technical Support 1" },
    { id: "TS002", name: "Technical Support 2" },
    { id: "TS003", name: "Technical Support 3" },
  ]);

  const user = {
    name: "Technical Support Name",
    contact: "0123456789",
    department: "ABC",
    total: 5,
    solved: 2,
    pending: 1,
    inProgress: 2,
    rating: 4,
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      <h2 className="text-2xl font-semibold">Performance</h2>

      <div className="flex gap-6">
        {/* Left section: User card */}
        <div className="w-1/2 border rounded p-4 shadow-sm bg-gray-50">
          <div className="flex items-center gap-4 mb-4">
            <FaUserCircle className="text-6xl text-gray-600" />
            <div>
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-sm">Contact No: {user.contact}</p>
              <p className="text-sm">Department: {user.department}</p>
            </div>
          </div>
          <div className="text-sm border-t pt-4 space-y-1">
            <p>Total Ticket Handle: {user.total}</p>
            <p>Ticket Solved: {user.solved}</p>
            <p>Ticket Pending: {user.pending}</p>
            <p>Ticket in progress: {user.inProgress}</p>
            <div className="flex items-center">
              Rating:
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={`ml-1 ${i < user.rating ? "text-yellow-500" : "text-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right section: Technical Support team list */}
        <div className="w-1/2 flex flex-col gap-4">
          {ratings.map((staff) => (
            <div
              key={staff.id}
              className="flex items-center justify-between border rounded p-4 shadow-sm bg-gray-100"
            >
              <div className="flex items-center gap-3">
                <FaUserCircle className="text-3xl text-gray-600" />
                <span className="font-medium">{staff.name}</span>
              </div>
              <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
                View details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performance;
