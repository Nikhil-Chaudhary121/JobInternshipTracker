const statusStyles = {
  Applied: "bg-blue-50 text-blue-600",
  Interview: "bg-yellow-50 text-yellow-600",
  Offer: "bg-green-50 text-green-600",
  Rejected: "bg-red-50 text-red-500",
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`inline-flex px-2 py-1 rounded-md text-[10px] font-medium ${
        statusStyles[status] || "bg-gray-50 text-gray-500"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;