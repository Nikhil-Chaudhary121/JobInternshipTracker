const StatCard = ({ title, value, icon, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-xs text-gray-400">
            {title}
          </p>

          <p className="text-2xl font-semibold text-gray-900 mt-2">
            {value}
          </p>
        </div>

        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
          {icon}
        </div>

      </div>

      {description && (
        <p className="text-[11px] text-gray-400 mt-3">
          {description}
        </p>
      )}

    </div>
  );
};

export default StatCard;