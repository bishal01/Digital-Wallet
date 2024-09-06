import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Retrieve stored user data from localStorage
    const storedData = JSON.parse(localStorage.getItem('userData'));
    const storedRegistrationData = JSON.parse(localStorage.getItem('userRegistrationData'));
  
    // Check if either stored data source matches the entered email and password
    const userFromData = storedData && storedData.email === formData.email && storedData.password === formData.password;
    const userFromRegistration = storedRegistrationData && storedRegistrationData.email === formData.email && storedRegistrationData.password === formData.password;
  
    if (userFromData || userFromRegistration) {
      // Store a flag or token to mark the user as logged in
      localStorage.setItem('currentUser', JSON.stringify({ email: formData.email }));
  
      if (userFromData) {
        // Navigate to home or dashboard page for users in 'userData'
        navigate('/Admin');
      } else if (userFromRegistration) {
        // Navigate to admin page for users in 'userRegistrationData'
        navigate('/');
      }
  
      // Optionally show a success message
      alert('Login successful!');
    } else {
      // Login failed
      alert('Invalid email or password');
    }
  };
  return (
    <div>
      <div>
  <section className=" mt-5">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Login
          </h1>
          <form className="space-y-4 md:space-y-6" >
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button 
            onClick={handleSubmit}
  type="submit" 
  className="w-full text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-bold rounded-lg text-lg px-6 py-3 shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
  Login
</button>            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don't have an account? <Link to="/Sign Up" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

    </div>
  )


}
export default Login