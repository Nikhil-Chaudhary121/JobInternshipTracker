const AuthInput = ({ label,  placeholder  , inputs , setInputs}) => {
  
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-800">
        {[label  , placeholder , inputs , setInputs]}
      </label>


      
    </div>
  );
};

export default AuthInput;