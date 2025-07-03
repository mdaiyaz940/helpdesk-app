import { useState } from "react";
import { FiPaperclip } from "react-icons/fi";
import axios from "axios";

const CreateTicket = () => {
  const [formData, setFormData] = useState({
    ticketNo: "",
    date: new Date().toISOString().split("T")[0],
    name: "",
    department: "",
    subject: "",
    category: "",
    type: "",
    priority: "Low",
    description: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) =>
        form.append(key, value)
      );

      const token = localStorage.getItem("token");
console.log("Sending token:", token);

      const res = await axios.post(`${VITE_BACKEND_URL}/tickets/new-ticket`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert(`Ticket created! Ticket No: ${formData.ticketNo}`);

      // Reset form
      setFormData({
        ticketNo: "",
        date: new Date().toISOString().split("T")[0],
        name: "",
        department: "",
        subject: "",
        category: "",
        type: "",
        priority: "Low",
        description: "",
        attachment: null,
      });
    } catch (err) {
      alert("Error creating ticket: " + (err.response?.data?.msg || err.message));
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-semibold mb-6 text-center">Create New Ticket</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Ticket No & Date */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Ticket No.</label>
            <input
              type="text"
              name="ticketNo"
              value={formData.ticketNo}
              onChange={handleChange}
              required
              placeholder="e.g. TCKT-00123"
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        </div>

        {/* Name & Department */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              required
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block mb-1 font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>

        {/* Category, Type, Priority */}
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Type</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </div>

        {/* Description + Attachment */}
        <div className="relative">
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={6}
            className="w-full border px-4 py-2 pr-10 rounded"
            required
          />
          <label className="absolute bottom-3 right-3 cursor-pointer">
            <FiPaperclip className="text-gray-500 hover:text-black w-5 h-5" />
            <input
              type="file"
              name="attachment"
              onChange={handleChange}
              className="hidden"
            />
          </label>
        </div>

        {/* reCAPTCHA Box */}
        <div className="border border-gray-300 px-6 py-4 rounded w-fit">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-sm">I'm not a robot</span>
          </div>
          <div className="mt-2">
            <img
              src={"https://www.gstatic.com/recaptcha/api2/logo_48.png"}
              alt="reCAPTCHA"
              className="w-[70px]"
            />
            <p className="text-[10px] text-gray-500">Privacy - Terms</p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-right mt-4">
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTicket;
