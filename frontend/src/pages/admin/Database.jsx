import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const dummyData = {
  user: [
    { id: "ABC123", name: "Abu", department: "IT", speciality: "Software" },
    { id: "ABC124", name: "Ahmad", department: "Software", speciality: "Networking" },
    { id: "ABC125", name: "Ali", department: "Technical", speciality: "Hardware" },
  ],
  ops: [],
  tech: [],
};

const Database = () => {
  const [activeTab, setActiveTab] = useState("user");
  const data = dummyData[activeTab];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Database</h2>

      {/* Tabs */}
      <div className="flex border border-gray-300 rounded-md overflow-hidden w-fit mb-4">
        {["user", "ops", "tech"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 capitalize ${
              activeTab === tab
                ? "bg-teal-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "user" ? "User" : tab === "ops" ? "Operation Team" : "Technical Support"}
          </button>
        ))}
      </div>

      {/* Search + Dropdown */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <label htmlFor="entries" className="text-sm">
            Show:
          </label>
          <select
            id="entries"
            className="border border-gray-300 rounded px-2 py-1 text-sm"
            defaultValue={10}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
          </select>
          <span className="text-sm">Entries</span>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Find ticket"
            className="border border-gray-300 rounded px-3 py-1 text-sm pr-8"
          />
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-300 rounded-md">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">#</th>
              <th className="p-2 border">Staff ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Department</th>
              <th className="p-2 border">Speciality</th>
              <th className="p-2 border">Setting</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  No records found
                </td>
              </tr>
            ) : (
              data.map((staff, index) => (
                <tr key={staff.id} className={index % 2 === 1 ? "bg-gray-50" : ""}>
                  <td className="p-2 border text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="p-2 border text-center">{staff.id}</td>
                  <td className="p-2 border text-center">{staff.name}</td>
                  <td className="p-2 border text-center">{staff.department}</td>
                  <td className="p-2 border text-center">{staff.speciality}</td>
                  <td className="p-2 border text-center space-x-3">
                    <button>
                      <FaEdit className="inline text-gray-600 hover:text-blue-600" />
                    </button>
                    <button>
                      <FaTrash className="inline text-gray-600 hover:text-red-600" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="text-xs text-gray-600 p-2">
          Showing 1 to {data.length} of {data.length} entries
        </div>
      </div>
    </div>
  );
};

export default Database;
