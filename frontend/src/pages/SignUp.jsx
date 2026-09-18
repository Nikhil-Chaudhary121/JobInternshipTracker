import AuthLayout from "../components/AuthLayout.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


const Signup = ({setIsLoggedIn}) => {

  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    username: "",
    name : "",
    email : "",
    password: "",
  })

  const handleSignup = async () =>{
    try {
      // console.log("here");
      
      const res = await fetch("https://jobinternshiptracker.onrender.com/user/register", {
        method : "POST",
        headers :{
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        
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
        console.log("error while fetching data after signup : " , data.error)
        return ;
      }
       toast.success("Account Created", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      localStorage.setItem("user" , JSON.stringify(data))
      setIsLoggedIn(true)
      navigate("/")
      // console.log(data);
    } catch (error) {
      console.log("Error in signup Frontend : ", error.message)
      return
    }
  }


  return (
    <AuthLayout>
      <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          
          />
      <div className="mb-7">
        <div className="text-3xl text-orange-400 mb-4">
          *
        </div>

        <h2 className="text-3xl font-semibold text-black">
          Create an account
        </h2>

        <p className="text-sm text-gray-400 mt-2">
          Manage job and internship applications, track your progress, and keep every opportunity organized in one place.
        </p>
      </div>

      {/* form */}
      <div className="space-y-4">

      <div className="space-y-2">
      <label className="text-sm font-medium text-gray-800">
       name
      </label>

      <input
        type='text'
        placeholder='Enter Name'
        className="w-full h-11 px-4 rounded-md border border-gray-200
        bg-white text-sm outline-none
        focus:border-black focus:ring-1 focus:ring-black
        placeholder:text-gray-400 transition"
        onChange={(e) =>{
                setInputs({ ...inputs, name: e.target.value })
  }}
        value={inputs.name}
      />
    </div>

        <div className="space-y-2">
      <label className="text-sm font-medium text-gray-800">
       username
      </label>

      <input
        type='text'
        placeholder='Choose a username'
        className="w-full h-11 px-4 rounded-md border border-gray-200
        bg-white text-sm outline-none
        focus:border-black focus:ring-1 focus:ring-black
        placeholder:text-gray-400 transition"
        onChange={(e) =>{
                setInputs({ ...inputs, username: e.target.value })
  }}
        value={inputs.username}
      />
    </div>

      <div className="space-y-2">
      <label className="text-sm font-medium text-gray-800">
       email
      </label>

      <input
        type='email'
        placeholder='Enter your email'
        className="w-full h-11 px-4 rounded-md border border-gray-200
        bg-white text-sm outline-none
        focus:border-black focus:ring-1 focus:ring-black
        placeholder:text-gray-400 transition"
        onChange={(e) =>{
                setInputs({ ...inputs, email: e.target.value })
  }}
        value={inputs.email}
      />
    </div>

        <div className="space-y-2">
      <label className="text-sm font-medium text-gray-800">
       password
      </label>

      <input
        type='text'
        placeholder='Create Password'
        className="w-full h-11 px-4 rounded-md border border-gray-200
        bg-white text-sm outline-none
        focus:border-black focus:ring-1 focus:ring-black
        placeholder:text-gray-400 transition"
        onChange={(e) =>{
                setInputs({ ...inputs, password: e.target.value })
  }}
        value={inputs.password}
      />
    </div>

        <button
          type=""
          className="w-full h-11 bg-[#050817] text-white rounded-md
          text-sm font-medium hover:bg-black transition
          shadow-lg shadow-black/10 mt-2"
          onClick={()=>{handleSignup()}}
        >
          Create account
        </button>

      </div>

      {/* Login */}
      <p className="text-center text-sm text-gray-400 mt-6">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-orange-500 font-medium hover:underline"
        >
          Login
        </a>
      </p>

    </AuthLayout>
  );
};

export default Signup;