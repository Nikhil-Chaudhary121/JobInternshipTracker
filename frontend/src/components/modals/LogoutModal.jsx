const LogoutModal = ({
  logout,
  onClose,
  onConfirm,
}) => {
  if (!logout) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="bg-white w-full max-w-sm rounded-xl shadow-xl p-5">

        <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-4">
          !
        </div>

        <h2 className="text-base font-semibold">
          Logout?
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          Are you sure you want to Logout
        </p>

        <div className="flex gap-2 mt-6">

          <button
            onClick={onClose}
            className="flex-1 h-10 border border-gray-200 rounded-lg text-sm hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onConfirm()}}
            className="flex-1 h-10 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
};

export default LogoutModal;