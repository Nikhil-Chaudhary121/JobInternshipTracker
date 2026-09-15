import AuthLayout from "../components/AuthLayout";
import AuthInput from "../components/AuthInput";

const Login = () => {
  return (
    <AuthLayout>

      <div className="mb-7">
        <div className="text-3xl text-orange-400 mb-4">
          *
        </div>

        <h2 className="text-3xl font-semibold text-black">
          Welcome back
        </h2>

        <p className="text-sm text-gray-400 mt-2">
          Login to access your personal hub and continue
          where you left off.
        </p>
      </div>

      <form className="space-y-5">

        <AuthInput
          label="Your email or username"
          placeholder="you@example.com"
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="••••••••••"
        />

        <div className="flex justify-end">
          <a
            href="#"
            className="text-xs text-gray-500 hover:text-black"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full h-11 bg-[#050817] text-white rounded-md
          text-sm font-medium hover:bg-black transition
          shadow-lg shadow-black/10"
        >
          Login
        </button>

      </form>

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