import { useState } from "react";

const jobsData = [
  {
    id: 1,
    company: "Google",
    role: "Frontend Developer",
    location: "Bangalore, India",
    status: "Interview",
    appliedDate: "Sep 12, 2026",
    updated: "2 days ago",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "React Developer",
    location: "Hyderabad, India",
    status: "Applied",
    appliedDate: "Sep 10, 2026",
    updated: "4 days ago",
  },
  {
    id: 3,
    company: "Apple",
    role: "Software Engineer",
    location: "Bangalore, India",
    status: "Rejected",
    appliedDate: "Sep 5, 2026",
    updated: "1 week ago",
  },
  {
    id: 4,
    company: "Amazon",
    role: "Frontend Engineer",
    location: "Bangalore, India",
    status: "Offer",
    appliedDate: "Aug 28, 2026",
    updated: "3 days ago",
  },
  {
    id: 5,
    company: "Razorpay",
    role: "UI Engineer",
    location: "Bangalore, India",
    status: "Applied",
    appliedDate: "Aug 25, 2026",
    updated: "2 weeks ago",
  },
];

const statusStyles = {
  Applied: "bg-blue-50 text-blue-700 border-blue-100",
  Interview: "bg-yellow-50 text-yellow-700 border-yellow-100",
  Offer: "bg-green-50 text-green-700 border-green-100",
  Rejected: "bg-red-50 text-red-700 border-red-100",
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`px-2.5 py-1 rounded-md border text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
};

const Stat = ({ title, value }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl px-5 py-4">
      <p className="text-xs text-gray-400">{title}</p>
      <p className="text-2xl font-semibold text-gray-900 mt-1">
        {value}
      </p>
    </div>
  );
};

const HomePage = () => {
  const [jobs, setJobs] = useState(jobsData);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [newJob, setNewJob] = useState({
    company: "",
    role: "",
    location: "",
    status: "Applied",
  });

  const changeStatus = (id, status) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id ? { ...job, status } : job
      )
    );
  };

  const addJob = (e) => {
    e.preventDefault();

    if (!newJob.company || !newJob.role) return;

    const job = {
      id: Date.now(),
      ...newJob,
      appliedDate: "Today",
      updated: "Just now",
    };

    setJobs((prev) => [job, ...prev]);

    setNewJob({
      company: "",
      role: "",
      location: "",
      status: "Applied",
    });

    setShowModal(false);
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase())
  );

  const applied = jobs.filter((j) => j.status === "Applied").length;
  const interviews = jobs.filter((j) => j.status === "Interview").length;
  const offers = jobs.filter((j) => j.status === "Offer").length;
  const rejected = jobs.filter((j) => j.status === "Rejected").length;

  return (
    <div className="min-h-screen bg-[#f5f5f4] text-gray-900">

      {/* Main */}
      <main className="max-w-7xl mx-auto px-5 py-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">

          <div>
            <h1 className="text-2xl font-semibold">
              Job Tracker
            </h1>

            <p className="text-sm text-gray-400 mt-1">
              Keep track of your job applications.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="h-10 px-4 bg-[#111111] text-white rounded-lg
            text-sm font-medium hover:bg-black transition
            flex items-center gap-2"
          >
            <span className="text-lg leading-none">+</span>
            Add New Job
          </button>

        </div>


        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">

          <Stat title="Applied" value={applied} />

          <Stat title="Interviews" value={interviews} />

          <Stat title="Offers" value={offers} />

          <Stat title="Rejected" value={rejected} />

        </div>


        {/* Table Card */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

          {/* Toolbar */}
          <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 justify-between">

            {/* Search */}
            <div className="relative w-full sm:w-72">

              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3-3" />
              </svg>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search jobs..."
                className="w-full h-9 pl-9 pr-3 rounded-lg border
                border-gray-200 text-sm outline-none
                focus:border-gray-400"
              />

            </div>


            {/* Filters */}
            <div className="flex gap-2">

              <button className="h-9 px-3 border border-gray-200 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-50">
                <span>☷</span>
                Filter
              </button>

              <button className="h-9 px-3 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                Export
              </button>

            </div>

          </div>


          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full min-w-[850px]">

              <thead>
                <tr className="border-b border-gray-100 text-left">

                  <th className="px-5 py-3 text-xs font-medium text-gray-400">
                    Company
                  </th>

                  <th className="px-5 py-3 text-xs font-medium text-gray-400">
                    Job Title
                  </th>

                  <th className="px-5 py-3 text-xs font-medium text-gray-400">
                    Location
                  </th>

                  <th className="px-5 py-3 text-xs font-medium text-gray-400">
                    Status
                  </th>

                  <th className="px-5 py-3 text-xs font-medium text-gray-400">
                    Applied
                  </th>

                  <th className="px-5 py-3 text-xs font-medium text-gray-400">
                    Updated
                  </th>

                </tr>
              </thead>


              <tbody>

                {filteredJobs.map((job) => (

                  <tr
                    key={job.id}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-50/70 transition"
                  >

                    {/* Company */}
                    <td className="px-5 py-4">

                      <div className="flex items-center gap-3">

                        <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center font-semibold text-sm">
                          {job.company.charAt(0)}
                        </div>

                        <span className="font-medium text-sm">
                          {job.company}
                        </span>

                      </div>

                    </td>


                    {/* Role */}
                    <td className="px-5 py-4 text-sm">
                      {job.role}
                    </td>


                    {/* Location */}
                    <td className="px-5 py-4 text-sm text-gray-500">
                      {job.location}
                    </td>


                    {/* Status */}
                    <td className="px-5 py-4">

                      <select
                        value={job.status}
                        onChange={(e) =>
                          changeStatus(job.id, e.target.value)
                        }
                        className="appearance-none bg-transparent
                        outline-none cursor-pointer"
                      >
                        {["Applied", "Interview", "Offer", "Rejected"].map(
                          (status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          )
                        )}
                      </select>

                      <StatusBadge status={job.status} />

                    </td>


                    {/* Date */}
                    <td className="px-5 py-4 text-sm text-gray-500">
                      {job.appliedDate}
                    </td>


                    {/* Updated */}
                    <td className="px-5 py-4 text-sm text-gray-500">
                      {job.updated}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          {/* Footer */}
          <div className="px-5 py-3 border-t border-gray-100 flex justify-between items-center">

            <p className="text-xs text-gray-400">
              Showing {filteredJobs.length} applications
            </p>

            <div className="flex gap-1">

              <button className="w-8 h-8 rounded-md border border-gray-200 text-sm text-gray-400">
                ‹
              </button>

              <button className="w-8 h-8 rounded-md bg-[#111] text-white text-sm">
                1
              </button>

              <button className="w-8 h-8 rounded-md border border-gray-200 text-sm">
                2
              </button>

              <button className="w-8 h-8 rounded-md border border-gray-200 text-sm">
                3
              </button>

              <button className="w-8 h-8 rounded-md border border-gray-200 text-sm">
                ›
              </button>

            </div>

          </div>

        </div>

      </main>


      {/* Add Job Modal */}
      {showModal && (

        <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50">

          <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-xl">

            <div className="flex justify-between items-center mb-6">

              <div>
                <h2 className="text-lg font-semibold">
                  Add New Job
                </h2>

                <p className="text-xs text-gray-400 mt-1">
                  Add a job application to your tracker.
                </p>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="w-8 h-8 rounded-md hover:bg-gray-100"
              >
                ×
              </button>

            </div>


            <form onSubmit={addJob} className="space-y-4">

              <div>
                <label className="text-sm font-medium">
                  Company
                </label>

                <input
                  value={newJob.company}
                  onChange={(e) =>
                    setNewJob({
                      ...newJob,
                      company: e.target.value,
                    })
                  }
                  placeholder="e.g. Google"
                  className="w-full h-10 mt-2 px-3 border
                  border-gray-200 rounded-lg text-sm outline-none
                  focus:border-gray-400"
                />
              </div>


              <div>
                <label className="text-sm font-medium">
                  Job Title
                </label>

                <input
                  value={newJob.role}
                  onChange={(e) =>
                    setNewJob({
                      ...newJob,
                      role: e.target.value,
                    })
                  }
                  placeholder="e.g. Frontend Developer"
                  className="w-full h-10 mt-2 px-3 border
                  border-gray-200 rounded-lg text-sm outline-none
                  focus:border-gray-400"
                />
              </div>


              <div>
                <label className="text-sm font-medium">
                  Location
                </label>

                <input
                  value={newJob.location}
                  onChange={(e) =>
                    setNewJob({
                      ...newJob,
                      location: e.target.value,
                    })
                  }
                  placeholder="e.g. Bangalore, India"
                  className="w-full h-10 mt-2 px-3 border
                  border-gray-200 rounded-lg text-sm outline-none
                  focus:border-gray-400"
                />
              </div>


              <div>
                <label className="text-sm font-medium">
                  Status
                </label>

                <select
                  value={newJob.status}
                  onChange={(e) =>
                    setNewJob({
                      ...newJob,
                      status: e.target.value,
                    })
                  }
                  className="w-full h-10 mt-2 px-3 border
                  border-gray-200 rounded-lg text-sm outline-none"
                >
                  <option>Applied</option>
                  <option>Interview</option>
                  <option>Offer</option>
                  <option>Rejected</option>
                </select>

              </div>


              <button
                type="submit"
                className="w-full h-10 bg-[#111] text-white
                rounded-lg text-sm font-medium mt-2
                hover:bg-black transition"
              >
                Add Job
              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default HomePage;