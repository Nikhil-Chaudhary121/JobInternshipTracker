import { ToastContainer , toast } from "react-toastify";
import AuthLayout from "../components/AuthLayout";
import { useState } from "react";
import { useNavigate  } from "react-router-dom";

const Login = ({setIsLoggedIn}) => {
  const navigate = useNavigate()
  const [inputs , setInputs] = useState({
    username  : "",
    password : "",
  })

  const handleLogin = async() => {
    try {
      const res =  await fetch(`https://jobinternshiptracker.onrender.com/user/login`, {
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
        console.log("Error in Login Request : ", data.error)
        return;
      }
      // console.log(data);
       toast.success("Logged In", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          localStorage.setItem('user', JSON.stringify(data))
          setIsLoggedIn(true)
          navigate("/")
    } catch (error) {
      console.log("Error in login from frontend :" ,error.message)
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
          
        </div>

        <h2 className="text-3xl font-semibold text-black">
          Welcome back
        </h2>

        <p className="text-sm text-gray-400 mt-2">
          Track your job and internship applications and stay on top of your career search.   
        </p>
      </div>

      <div className="space-y-5">

      <div className="space-y-2">
      <label className="text-sm font-medium text-gray-800">
       username
      </label>

      <input
        type='text'
        placeholder='Enter your username'
        className="w-full h-11 px-4 rounded-md border border-gray-200
        bg-white text-sm outline-none
        focus:border-black focus:ring-1 focus:ring-black
        placeholder:text-gray-400 transition"
        onChange={(e) =>{
                setInputs({ ...inputs, username: e.target.value })}}
        value={inputs.username}
      />
    </div>

      <div className="space-y-2">
      <label className="text-sm font-medium text-gray-800">
       password
      </label>

      <input
        type='text'
        placeholder='Password'
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

        <div className="flex justify-end">
          <a
            href="#"
            className="text-xs text-gray-500 hover:text-black"
          >
            Forgot password?
          </a>
        </div>

        <button
          type=""
          className="w-full h-11 bg-[#050817] text-white rounded-md
          text-sm font-medium hover:bg-black transition
          shadow-lg shadow-black/10"
          onClick={()=>{handleLogin()}}
        >
          Login
        </button>

      </div>

      <p className="text-center text-sm text-gray-400 mt-6">
        Don't have an account?{" "}
        <a
          href="/signup"
          className="text-orange-500 font-medium hover:underline"
        >
          Create account
        </a>
      </p>

    </AuthLayout>
  );
};

export default Login;