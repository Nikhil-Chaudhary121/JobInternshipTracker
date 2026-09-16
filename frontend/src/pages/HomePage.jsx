import { useMemo, useState } from "react";

import jobsData from "../data/jobsData";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import MobileNav from "../components/layout/MobileNav";

import StatCard from "../components/dashboard/StatCard";
import SearchBar from "../components/dashboard/SearchBar";
import ApplicationTable from "../components/dashboard/ApplicationTable";

import AddJobModal from "../components/modals/AddJobModal";
import DeleteJobModal from "../components/modals/DeleteJobModal";


const HomePage = () => {

  const [jobs, setJobs] = useState(jobsData);

  const [search, setSearch] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);

  const [jobToDelete, setJobToDelete] = useState(null);

  const [newJob, setNewJob] = useState({
    company: "",
    position: "",
    status: "Applied",
  });


  // =========================
  // CHANGE STATUS
  // =========================

  const changeStatus = (id, status) => {

    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id
          ? {
              ...job,
              status,
            }
          : job
      )
    );

  };


  // =========================
  // DELETE JOB
  // =========================

  const deleteJob = (id) => {

    setJobs((prevJobs) =>
      prevJobs.filter((job) => job.id !== id)
    );

    setJobToDelete(null);

  };


  // =========================
  // ADD JOB
  // =========================

  const addJob = (e) => {

    e.preventDefault();

    const job = {
      id: Date.now(),
      company: newJob.company,
      position: newJob.position,
      status: newJob.status,
      appliedDate: "Today",
    };

    setJobs((prevJobs) => [
      job,
      ...prevJobs,
    ]);

    setNewJob({
      company: "",
      position: "",
      status: "Applied",
    });

    setShowAddModal(false);

  };


  // =========================
  // SEARCH
  // =========================

  const filteredJobs = useMemo(() => {

    const query = search.toLowerCase().trim();

    if (!query) {
      return jobs;
    }

    return jobs.filter(
      (job) =>
        job.company
          .toLowerCase()
          .includes(query) ||
        job.position
          .toLowerCase()
          .includes(query) ||
        job.status
          .toLowerCase()
          .includes(query)
    );

  }, [jobs, search]);


  // =========================
  // STATS
  // =========================

  const stats = useMemo(() => {

    return {
      total: jobs.length,

      applied: jobs.filter(
        (job) => job.status === "Applied"
      ).length,

      interviews: jobs.filter(
        (job) => job.status === "Interview"
      ).length,

      offers: jobs.filter(
        (job) => job.status === "Offer"
      ).length,

      rejected: jobs.filter(
        (job) => job.status === "Rejected"
      ).length,
    };

  }, [jobs]);


  return (
    <div className="min-h-screen bg-[#f7f8fa] text-gray-900">

      <div className="flex min-h-screen">

        {/* =========================
            SIDEBAR
        ========================= */}

        <Sidebar />


        {/* =========================
            MAIN
        ========================= */}

        <div className="flex-1 min-w-0">

          <Header
            onAddJob={() => setShowAddModal(true)}
          />


          <main className="max-w-[1400px] mx-auto px-4 sm:px-6 py-5 pb-24 lg:pb-8">


            {/* =========================
                PAGE TITLE
            ========================= */}

            <div className="mb-5">

              <h2 className="text-xl font-semibold">
                Applications
              </h2>

              <p className="text-xs text-gray-400 mt-1">
                Track and manage your job applications.
              </p>

            </div>


            {/* =========================
                STATS
            ========================= */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">

              <StatCard
                title="Total Applications"
                value={stats.total}
                description="All applications"
              />

              <StatCard
                title="Applied"
                value={stats.applied}
                description="Waiting for response"
              />

              <StatCard
                title="Interviews"
                value={stats.interviews}
                description="Active interviews"
              />

              <StatCard
                title="Offers"
                value={stats.offers}
                description="Job offers"
              />

            </div>


            {/* =========================
                APPLICATION SECTION
            ========================= */}

            <div className="bg-white border border-gray-200 rounded-xl">


              {/* Toolbar */}

              <div className="p-4 border-b border-gray-100">

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">

                  <SearchBar
                    search={search}
                    setSearch={setSearch}
                  />


                  <div className="flex gap-2">

                    <button
                      onClick={() => setShowAddModal(true)}
                      className="h-9 px-3 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 transition flex items-center gap-2"
                    >
                      <span className="text-base">
                        +
                      </span>

                      Add application
                    </button>

                    <button
                      className="h-9 px-3 border border-gray-200 rounded-lg text-xs hover:bg-gray-50"
                    >
                      Export
                    </button>

                  </div>

                </div>

              </div>


              {/* Table / Cards */}

              <ApplicationTable
                jobs={filteredJobs}
                onStatusChange={changeStatus}
                onDelete={(job) =>
                  setJobToDelete(job)
                }
              />


              {/* Footer */}

              <div className="px-4 py-3 border-t border-gray-100 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">

                <p className="text-[11px] text-gray-400">
                  Showing {filteredJobs.length} of {jobs.length} applications
                </p>

                <div className="flex gap-1">

                  <button className="w-8 h-8 rounded-md border border-gray-200 text-xs text-gray-400">
                    ‹
                  </button>

                  <button className="w-8 h-8 rounded-md bg-gray-900 text-white text-xs">
                    1
                  </button>

                  <button className="w-8 h-8 rounded-md border border-gray-200 text-xs">
                    2
                  </button>

                  <button className="w-8 h-8 rounded-md border border-gray-200 text-xs">
                    3
                  </button>

                  <button className="w-8 h-8 rounded-md border border-gray-200 text-xs">
                    ›
                  </button>

                </div>

              </div>

            </div>

          </main>

        </div>

      </div>


      {/* =========================
          MOBILE NAV
      ========================= */}

      <MobileNav />


      {/* =========================
          ADD JOB MODAL
      ========================= */}

      <AddJobModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        newJob={newJob}
        setNewJob={setNewJob}
        onSubmit={addJob}
      />


      {/* =========================
          DELETE MODAL
      ========================= */}

      <DeleteJobModal
        job={jobToDelete}
        onClose={() => setJobToDelete(null)}
        onConfirm={deleteJob}
      />

    </div>
  );
};

export default HomePage;