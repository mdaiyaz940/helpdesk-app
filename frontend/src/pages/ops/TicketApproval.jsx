// TicketApproval.jsx (Updated UI only, per screenshot)
import { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaSearch } from "react-icons/fa";

const TicketApproval = () => {
  const [tickets] = useState([
    {
      id: "1234",
      subject: "Login issue",
      category: "Access issue",
      priority: "High",
      date: "13/08/21",
    },
    {
      id: "1124",
      subject: "New ticket issue",
      category: "Access issue",
      priority: "Medium",
      date: "14/08/21",
    },
    {
      id: "1224",
      subject: "New request",
      category: "Feedback",
      priority: "Low",
      date: "13/08/21",
    },
    {
      id: "1244",
      subject: "Ticket submission",
      category: "Ticketing",
      priority: "High",
      date: "14/08/21",
    },
    {
      id: "1114",
      subject: "Login issue",
      category: "Access issue",
      priority: "High",
      date: "13/08/21",
      highlight: false, // visually selected row
    },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Ticket Approval</h2>

      {/* Top controls */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center border rounded px-2 py-1 w-64 bg-white">
          <input
            type="text"
            placeholder="Find ticket"
            className="outline-none flex-1 text-sm px-1"
          />
          <FaSearch className="text-gray-600" />
        </div>

        <div className="flex items-center text-sm">
          <label className="mr-2">Show:</label>
          <select className="border rounded px-2 py-1">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span className="ml-2">Entries</span>
        </div>
      </div>

      {/* Ticket table */}
      <table className="w-full text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Ticket No.</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Priority</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Action</th>
            <th className="border p-2">Assign to</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr
              key={ticket.id}
              className={ticket.highlight ? "border-2 border-blue-500" : ""}
            >
              <td className="border p-2 text-center">{ticket.id}</td>
              <td className="border p-2 text-center">{ticket.subject}</td>
              <td className="border p-2 text-center">{ticket.category}</td>
              <td className="border p-2 text-center">{ticket.priority}</td>
              <td className="border p-2 text-center">{ticket.date}</td>
              <td className="border p-2 text-center space-x-2">
                <button>
                  <FaCheckCircle className="text-green-500" />
                </button>
                <button>
                  <FaTimesCircle className="text-red-500" />
                </button>
              </td>
              <td className="border p-2 text-center">
                <select className="border rounded px-1 py-0.5 text-sm">
                  <option value="">--</option>
                  <option value="aditya">Aditya Pundir</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-sm mt-2">Showing 1 to 5 of 5 entries</div>
    </div>
  );
};

export default TicketApproval;
