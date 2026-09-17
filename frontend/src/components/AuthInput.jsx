const AuthInput = ({ label, type = "text", placeholder  , inputs , setInputs}) => {
  
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-800">
        {label}
      </label>

      
    </div>
  );
};

export default AuthInput;