import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Signup1 = () => {
    const [formData, setFormData] = useState({
        username: '',
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const navigate = useNavigate();
    
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
      
        // Check if username is longer than 5 characters
        if (formData.username.length <= 5) {
          alert('Username must be more than 5 characters long!');
          return;
        }
      
        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
      
        // Check if password is more than 5 characters and contains @ or #
        const passwordPattern = /^(?=.*[@#])[A-Za-z\d@#]{6,}$/;
        if (!passwordPattern.test(formData.password)) {
          alert('Password must be more than 5 characters long and contain at least one special character (@ or #)!');
          return;
        }
      
        // Save data to local storage
        localStorage.setItem('userData', JSON.stringify(formData));
        alert('Registration data stored successfully!');
      
        // Redirect to the login page
        navigate('/login');
      };
      
  return (
    <div>
       <section className=" mt-5">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full  lg:py-0">
           
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Admin Sign Up
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      <div>
        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
        <input type="text" name="username" id="username" value={formData.username} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="harry" required />
      </div>
      <div>
        <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
        <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Harry Potter" required />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
        <input type="password" name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required />
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
        </div>
      </div>
      <button 
  type="submit" 
  className="w-full text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-bold rounded-lg text-lg px-6 py-3 shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
  Create an account
</button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
      </p>
    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Signup1
