// frontend/src/pages/user/Dashboard.jsx
const Dashboard = () => {
  const stats = [
    {
      title: "Total Tickets",
      count: 12,
      bg: "bg-blue-500",
    },
    {
      title: "Total Solved",
      count: 8,
      bg: "bg-green-400",
    },
    {
      title: "Total Awaiting Approval",
      count: 2,
      bg: "bg-red-400",
    },
    {
      title: "Total in Progress",
      count: 2,
      bg: "bg-yellow-300",
    },
  ];

  return (
    <div
      className="w-[1190px] h-[884px] bg-white p-6"
      style={{ boxSizing: "border-box" }}
    >
      <h1 className="text-2xl font-semibold text-center mb-8">Dashboard</h1>

      <div className="grid grid-cols-4 gap-6 justify-items-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`w-48 h-32 ${stat.bg} text-white rounded-md shadow-md flex flex-col items-center justify-center`}
          >
            <h3 className="text-sm font-medium">{stat.title}</h3>
            <p className="text-4xl font-bold mt-2">{stat.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
