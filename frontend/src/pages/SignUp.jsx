import AuthLayout from "../components/AuthLayout.jsx";
import AuthInput from "../components/AuthInput.jsx";


const Signup = () => {
  return (
    <AuthLayout>

      <div className="mb-7">
        <div className="text-3xl text-orange-400 mb-4">
          *
        </div>

        <h2 className="text-3xl font-semibold text-black">
          Create an account
        </h2>

        <p className="text-sm text-gray-400 mt-2">
          Access your tasks, notes, and projects anytime
          anywhere — and keep everything flowing in one place.
        </p>
      </div>

      <form className="space-y-4">

        <AuthInput
          label="Name"
          placeholder="Enter your name"
        />

        <AuthInput
          label="Username"
          placeholder="Choose a username"
        />

        <AuthInput
          label="Your email"
          type="email"
          placeholder="you@example.com"
        />

        <AuthInput
          label="Create password"
          type="password"
          placeholder="••••••••••"
        />

        <button
          type="submit"
          className="w-full h-11 bg-[#050817] text-white rounded-md
          text-sm font-medium hover:bg-black transition
          shadow-lg shadow-black/10 mt-2"
        >
          Create account
        </button>

      </form>

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