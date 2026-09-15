const AuthInput = ({ label, type = "text", placeholder }) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-800">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-11 px-4 rounded-md border border-gray-200
        bg-white text-sm outline-none
        focus:border-black focus:ring-1 focus:ring-black
        placeholder:text-gray-400 transition"
      />
    </div>
  );
};

export default AuthInput;