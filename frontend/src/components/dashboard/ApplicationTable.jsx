import ApplicationRow from "./ApplicationRow";
import ApplicationCard from "./ApplicationCard";

const ApplicationTable = ({
  jobs,
  onStatusChange,
  onDelete,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

      {/* Desktop */}
      <div className="hidden md:block overflow-x-auto">

        <table className="w-full">

          <thead>
            <tr className="border-b border-gray-100 text-left">

              <th className="px-5 py-3 text-[10px] uppercase tracking-wide font-medium text-gray-400">
                Company
              </th>

              <th className="px-5 py-3 text-[10px] uppercase tracking-wide font-medium text-gray-400">
                Role
              </th>

              <th className="px-5 py-3 text-[10px] uppercase tracking-wide font-medium text-gray-400">
                Status
              </th>

              <th className="px-5 py-3 text-[10px] uppercase tracking-wide font-medium text-gray-400">
                Applied
              </th>

              <th className="px-5 py-3 text-right text-[10px] uppercase tracking-wide font-medium text-gray-400">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {jobs.length > 0 ? (
              jobs.map((job) => (
                <ApplicationRow
                  key={job.company}
                  job={job}
                  role={job.role}
                  onStatusChange={onStatusChange}
                  onDelete={onDelete}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-12 text-sm text-gray-400"
                >
                  No applications found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>


      {/* Mobile */}
      <div className="md:hidden">

        {jobs.length > 0 ? (
          jobs.map((job) => (
            <ApplicationCard
              key={job.company}
              job={job}
              onStatusChange={onStatusChange}
              onDelete={onDelete}
            />
          ))
        ) : (
          <div className="py-12 text-center text-sm text-gray-400">
            No applications found
          </div>
        )}

      </div>

    </div>
  );
};

export default ApplicationTable;