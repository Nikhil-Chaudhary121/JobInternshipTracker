import { useState } from "react";

const ActionMenu = ({
  job,
  onStatusChange,
  onDelete,
}) => {
  const [open, setOpen] = useState(false);

  const statuses = [
    "Applied",
    "Interview",
    "Offer",
    "Rejected",
  ];

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400"
      >
        ⋮
      </button>

      {open && (
        <>
          {/* Outside click */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 top-9 z-20 w-40 bg-white border border-gray-200 rounded-lg shadow-lg p-1">

            <p className="px-3 py-2 text-[10px] text-gray-400 uppercase">
              Change status
            </p>

            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => {
                  onStatusChange(job._id, status);
                  setOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-xs hover:bg-gray-50 ${
                  job.status === status
                    ? "text-blue-600 font-medium"
                    : "text-gray-600"
                }`}
              >
                {status}
              </button>
            ))}

            <div className="h-px bg-gray-100 my-1" />

            <button
              onClick={() => {
                // console.log(job._id);
                
                onDelete(job._id);
                setOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-md text-xs text-red-500 hover:bg-red-50"
            >
              Delete application
            </button>

          </div>
        </>
      )}

    </div>
  );
};

export default ActionMenu;