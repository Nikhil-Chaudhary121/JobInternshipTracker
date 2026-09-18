import { useEffect, useMemo, useState } from "react";


import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import MobileNav from "../components/layout/MobileNav";

import StatCard from "../components/dashboard/StatCard";
import SearchBar from "../components/dashboard/SearchBar";
import ApplicationTable from "../components/dashboard/ApplicationTable";

import AddJobModal from "../components/modals/AddJobModal";
import DeleteJobModal from "../components/modals/DeleteJobModal";

import { ToastContainer, toast  } from 'react-toastify';
import LogoutModal from "../components/modals/LogoutModal";
import { useNavigate } from "react-router-dom";

const HomePage = ({setIsLoggedIn }) => {

  let user = localStorage.getItem("user")
  user = JSON.parse(user)



  // console.log(user.id);
  const navigate = useNavigate()
  
  const [jobs, setJobs] = useState([]);

  const [search, setSearch] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);

  const [jobToDelete, setJobToDelete] = useState(null);
  
  const [logout, setLogout] = useState(null);

  const [newJob, setNewJob] = useState({
    company: "",
    role: "",
    status: "Applied",
  });

  // fetching posts
  useEffect(()=>{
   try {
    
    
     const getData = async()=>{
      const res =  await fetch("https://jobinternshiptracker.onrender.com/item/", {
        method : "POST",
        headers :{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({userId : user.id}),
      })
      const data = await res.json()
      if(data.error){
         toast.warn(data.error, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        console.log("Error while fetching item list in frontend : " , data.error)
        return
      }
      // console.log(data)
      localStorage.setItem('posts' , data)
      setJobs(data);
      return
    }
    getData()
   } catch (error) {
    console.log("Error in fetching applications : " , error)
   }
  } , [setJobs])

  const handleLogout = async() =>{
    try {
      localStorage.removeItem('user')
       toast.success("Logged Out", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        setLogout(null)
          localStorage.removeItem('user')
          localStorage.removeItem('posts  ')
          setIsLoggedIn(false)
          navigate("/")
       
        
    } catch (error) {
      console.log("Error in loggin out : " , error)
    }
  }

  // =========================
  // CHANGE STATUS
  // =========================

  const changeStatus = async(id, status) => {
    try {
      let lowerStatus = status.toLowerCase()

    const res =  await fetch("https://jobinternshiptracker.onrender.com/item/update", {
        method : "PUT",
        headers :{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status : lowerStatus , itemId : id}),
      })
      // console.log(id);
      

      const data = await res.json()
      if(data.error){
          toast.warn(data.error, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        console.log("Error in updating Post frontend : " , data.error)
        return
      }
      
    // console.log(data);
     toast.success("Status Changed", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job._id === id
          ? {
              ...job,
              status,
            }
          : job
      )
    );

    } catch (error) {
      console.log("Error in changing status frontend :" , error) 
    }
  };


  // =========================
  // DELETE JOB
  // =========================

  const deleteJob = async (id) => {
    try {

      const res =  await fetch("https://jobinternshiptracker.onrender.com/item/delete/", {
        method : "DELETE",
        headers :{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({userId : user.id , itemId :id}),
      })

      const data = await res.json() 
      if(data.error){
          toast.warn('Application Deleted Successfully', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        console.log("Error in deleting Applicaion trycatch : " , data.error)
      }

      // console.log(data)
        toast.success('Application Deleted Successfully', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

        setJobs((prevJobs) =>
        prevJobs.filter((job) => job._id !== id)
      );

      setJobToDelete(null);
      
    } catch (error) {
       console.log("Error in deleting applicalion frontend : " , error);
      return
    }
  };


  // =========================
  // ADD JOB
  // =========================

  const addJob = async(e) => {
    try {
      let newStatus = newJob.status.toLowerCase()
    console.log(newStatus);
    

    e.preventDefault();

    const res =  await fetch("https://jobinternshiptracker.onrender.com/item/create", {
        method : "POST",
        headers :{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({company : newJob.company , role: newJob.role , status : newStatus , user : user.id}),
      })
      

      const data = await res.json()
      if(data.error){ 
        toast.warn(data.error, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        
        console.log("Error in creating new post frontend :" , data.error);
        setNewJob({
          company: "",
          role: "",
          status: "Applied",
        });
        setShowAddModal(false);
        return
      }
    // console.log(data);
     toast.success("Application Created", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

    const job = {
      id: Date.now(),
      company: newJob.company,
      role: newJob.role,
      status: newJob.status,
      appliedDate: "Today",
    };

    setJobs((prevJobs) => [
      job,
      ...prevJobs,
    ]);

    setNewJob({
      company: "",
      role: "",
      status: "Applied",
    });

    setShowAddModal(false);
    } catch (error) {
      console.error("Error in creating application frontend : " , error)
    }

  };

  //================
  // HandleUselessButtons
  //================

  const handleClick = async()=>{
    toast.info("Comming Soon it's Early Version", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
      });
  }


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
        job.role
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

        <Sidebar handleClick={()=> {handleClick()}} />


        {/* =========================
            MAIN
        ========================= */}

        <div  className="flex-1 min-w-0" >
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          <Header
            onAddJob={() => setShowAddModal(true)}
            onLogout={()=> setLogout(true)}
            handleClick={()=> {handleClick()}}
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
                     onClick={()=> {handleClick()}}
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
       {/* =========================
          LOGOUT MODAL
      ========================= */}
      <LogoutModal
        logout={logout}
        onClose={() => setLogout(null)}
        onConfirm={handleLogout}
      />

    </div>
  );
};

export default HomePage;