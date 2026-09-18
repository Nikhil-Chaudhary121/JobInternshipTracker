import StatusBadge from "./StatusBadge";
import ActionMenu from "./ActionMenu";

const ApplicationRow = ({
  job,
  onStatusChange,
  onDelete,
}) => {
  return (
    <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition">

      {/* Company */}
      <td className="px-5 py-4">

        <div className="flex items-center gap-3">

          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-xs font-semibold">
            {job.company.charAt(0)}
          </div>

          <span className="text-xs font-medium text-gray-900">
            {job.company}
          </span>

        </div>

      </td>

      {/* Position */}
      <td className="px-5 py-4 text-xs text-gray-600">
        {job.role}
      </td>

      {/* Status */}
      <td className="px-5 py-4">
        <StatusBadge status={job.status} />
      </td>

      {/* Applied */}
      <td className="px-5 py-4 text-xs text-gray-500">
        {job.appliedDate}
      </td>

      {/* Action */}
      <td className="px-5 py-4 text-right">

        <ActionMenu
          job={job}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />

      </td>

    </tr>
  );
};

export default ApplicationRow;