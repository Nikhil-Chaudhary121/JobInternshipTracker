const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#e9e9e9] flex items-center justify-center p-6">

      <div className="w-full max-w-6xl min-h-[650px] bg-white rounded-2xl overflow-hidden flex shadow-sm">

        {/* Left Section */}
        <div className="hidden md:flex md:w-1/2 p-2">
          <div
            className="w-full rounded-xl p-8 flex flex-col justify-between"
            style={{
              background:
                "radial-gradient(circle at 50% 65%, #ff9b61 0%, #f7c5a8 30%, #f3ddd5 65%, #eee9e7 100%)",
            }}
          >

            {/* Logo */}
            <div className="font-semibold text-sm  flex items-center gap-1">
              <span>◢</span>
              Tracker
            </div>

            {/* Text */}
            <div className="max-w-sm">
              <p className="text-sm text-gray-700 mb-3">
                Your next opportunity
              </p>

              <h1 className="text-3xl font-semibold leading-tight text-black">
                Stay organized. Track applications. Land your next role.
              </h1>
            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-14">
          <div className="w-full max-w-md">
            {children}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;