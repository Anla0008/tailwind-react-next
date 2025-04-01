
const SignUpForm = () => {
  return (
<form class="flex flex-col gap-4 max-w-sm mx-auto p-4 bg-white shadow-md rounded-lg">
  <label for="email" class="text-sm font-medium text-gray-700">Email:</label>
  <input 
    type="email" 
    id="email" 
    name="email" 
    required 
    class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</form>


  );
};

export default SignUpForm;
