import { FaChartBar, FaHeadset, FaTools, FaStar } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-blue-500 text-white shadow-md rounded p-4">
          <p>Total Tickets</p>
          <h3 className="text-3xl font-bold text-center mt-2">12</h3>
        </div>
        <div className="bg-green-500 text-white shadow-md rounded p-4">
          <p>Total Solved</p>
          <h3 className="text-3xl font-bold text-center mt-2">8</h3>
        </div>
        <div className="bg-red-500 text-white shadow-md rounded p-4">
          <p>Total Awaiting Approval</p>
          <h3 className="text-3xl font-bold text-center mt-2">2</h3>
        </div>
        <div className="bg-yellow-300 text-black shadow-md rounded p-4">
          <p>Total In Progress</p>
          <h3 className="text-3xl font-bold text-center mt-2">2</h3>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Chart Area */}
        <div className="bg-teal-300 h-48 flex items-center justify-center rounded shadow-md">
          <FaChartBar className="text-6xl text-teal-800" />
        </div>

        {/* Support Team Count */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded shadow-md p-4 text-center">
            <FaHeadset className="mx-auto text-3xl text-gray-700" />
            <p className="text-lg mt-2">3</p>
            <p className="text-sm text-gray-600">Technical Supports</p>
          </div>
          <div className="bg-white rounded shadow-md p-4 text-center">
            <FaTools className="mx-auto text-3xl text-gray-700" />
            <p className="text-lg mt-2">4</p>
            <p className="text-sm text-gray-600">Operation Team</p>
          </div>
        </div>

        {/* Feedback */}
        <div className="bg-teal-200 rounded shadow-md p-4 text-center flex flex-col justify-center">
          <p className="text-lg mb-2">Customer Feedback</p>
          <div className="flex justify-center text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
