// frontend/src/pages/user/ViewTicket.jsx
import { useState } from "react";
import { FaSearch, FaStar, FaRegStar } from "react-icons/fa";

const sampleTickets = [
  {
    id: "1234",
    subject: "Login issue",
    status: "In Progress",
    support: "Tech support",
    date: "13/08/21",
    rating: 0,
  },
  {
    id: "1124",
    subject: "New ticket issue",
    status: "On hold",
    support: "Operation Team",
    date: "14/08/21",
    rating: 0,
  },
  {
    id: "1224",
    subject: "New request",
    status: "Closed",
    support: "Tech support",
    date: "13/08/21",
    rating: 3.5,
  },
  {
    id: "1244",
    subject: "Ticket submission",
    status: "In Progress",
    support: "Operation Team",
    date: "14/08/21",
    rating: 0,
  },
  {
    id: "1114",
    subject: "Login issue",
    status: "In Progress",
    support: "Tech support",
    date: "03/08/21",
    rating: 0,
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "In Progress":
      return "bg-green-500";
    case "On hold":
      return "bg-blue-900";
    case "Closed":
      return "bg-gray-700";
    default:
      return "bg-gray-400";
  }
};

const ViewTickets = () => {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);

  const filteredTickets = sampleTickets.filter((ticket) =>
    ticket.subject.toLowerCase().includes(search.toLowerCase()) ||
    ticket.id.includes(search)
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold text-center mb-6">List of Ticket</h2>

      {/* Search and Entries */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2 border px-2 py-1 rounded">
          <input
            type="text"
            placeholder="Find ticket"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none"
          />
          <FaSearch className="text-gray-500" />
        </div>

        <div className="flex items-center space-x-2">
          <span>Show:</span>
          <select
            value={entries}
            onChange={(e) => setEntries(Number(e.target.value))}
            className="border px-2 py-1 rounded"
          >
            <option>5</option>
            <option>10</option>
            <option>20</option>
          </select>
          <span>Entries</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr className="text-sm text-gray-700">
              <th className="py-2 px-4">Ticket No.</th>
              <th className="py-2 px-4">Subject</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Support by</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Rate</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.slice(0, entries).map((ticket, index) => (
              <tr key={index} className="border-t text-sm hover:bg-gray-50">
                <td className="py-2 px-4 text-blue-600 underline cursor-pointer">{ticket.id}</td>
                <td className="py-2 px-4">{ticket.subject}</td>
                <td className="py-2 px-4">
                  <span
                    className={`text-white px-2 py-1 rounded text-xs ${getStatusColor(
                      ticket.status
                    )}`}
                  >
                    {ticket.status}
                  </span>
                </td>
                <td className="py-2 px-4">{ticket.support}</td>
                <td className="py-2 px-4">{ticket.date}</td>
                <td className="py-2 px-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) =>
                    i < Math.floor(ticket.rating) ? (
                      <FaStar key={i} className="text-yellow-500" />
                    ) : i < ticket.rating ? (
                      <FaStar key={i} className="text-yellow-300" />
                    ) : (
                      <FaRegStar key={i} className="text-gray-400" />
                    )
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="text-sm text-right mt-2">
        <span className="mr-2">&laquo; &lt;</span>
        <span>1</span>
        <span className="ml-2">&gt; &raquo;</span>
      </div>
    </div>
  );
};

export default ViewTickets;
