const AddJobModal = ({
  open,
  onClose,
  newJob,
  setNewJob,
  onSubmit,
}) => {
  if (!open) return null;

  const handleChange = (field, value) => {
    setNewJob((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-xl shadow-xl">

        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">

          <div>
            <h2 className="text-base font-semibold">
              Add application
            </h2>

            <p className="text-xs text-gray-400 mt-1">
              Add a new job application.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-500"
          >
            ×
          </button>

        </div>


        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="p-5 space-y-4"
        >

          {/* Company */}
          <div>

            <label className="text-xs font-medium text-gray-700">
              Company
            </label>

            <input
              required
              value={newJob.company}
              onChange={(e) =>
                handleChange("company", e.target.value)
              }
              placeholder="Google"
              className="w-full h-10 mt-1.5 px-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500"
            />

          </div>


          {/* role */}
          <div>

            <label className="text-xs font-medium text-gray-700">
              Job role
            </label>

            <input
              required
              value={newJob.role}
              onChange={(e) =>
                handleChange("role", e.target.value)
              }
              placeholder="Frontend Developer"
              className="w-full h-10 mt-1.5 px-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500"
            />

          </div>


          {/* Status */}
          <div>

            <label className="text-xs font-medium text-gray-700">
              Status
            </label>

            <select
              value={newJob.status}
              onChange={(e) =>
                handleChange("status", e.target.value)
              }
              className="w-full h-10 mt-1.5 px-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500"
            >
              <option value="Applied">
                Applied
              </option>

              <option value="Interview">
                Interview
              </option>

              <option value="Offer">
                Offer
              </option>

              <option value="Rejected">
                Rejected
              </option>

            </select>

          </div>


          {/* Buttons */}
          <div className="flex gap-2 pt-2">

            <button
              type="button"
              onClick={onClose}
              className="flex-1 h-10 border border-gray-200 rounded-lg text-sm hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 h-10 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              Add application
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddJobModal;