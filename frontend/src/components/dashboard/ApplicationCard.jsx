import StatusBadge from "./StatusBadge";
import ActionMenu from "./ActionMenu";

const ApplicationCard = ({
  job,
  onStatusChange,
  onDelete,
}) => {
  return (
    <div className="p-4 border-b border-gray-100 last:border-0">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-semibold">
            {job.company.charAt(0)}
          </div>

          <div>
            <p className="text-sm font-medium text-gray-900">
              {job.company}
            </p>

            <p className="text-xs text-gray-500 mt-0.5">
              {job.position}
            </p>
          </div>

        </div>

        <ActionMenu
          job={job}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />

      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-4 mt-5">

        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">
            Status
          </p>

          <StatusBadge status={job.status} />
        </div>

        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">
            Applied
          </p>

          <p className="text-xs text-gray-600">
            {job.appliedDate}
          </p>
        </div>

      </div>

    </div>
  );
};

export default ApplicationCard;