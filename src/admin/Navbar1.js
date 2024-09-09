import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar1 = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userRegistrationData = JSON.parse(localStorage.getItem("userRegistrationData"));
  const navigate = useNavigate();
  
  // Check if user data exists in local storage
  const isLoggedIn = () => {
    return localStorage.getItem('userData') !== null || localStorage.getItem('userRegistrationData') !== null;
  };
  
  
  const handleLogout = () => {
    // Remove user data from local storage
    localStorage.removeItem('userData');
    localStorage.removeItem('userRegistrationData');
    // Redirect to home or login page after logout
    navigate('/');
  };
  return (
    <div className='bg-black' >
         <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="index.html" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          
            <span className="ml-3 text-xl text-white font-extrabold ">
              <Link to='/Admin' >AMSEV PTY</Link>
               </span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
     
      <Link to="/Admin" className="mr-5 text-white px-4 hover:text-gray-300 cursor-pointer">Home</Link>
    
    
  
         
        </nav>
        {isLoggedIn() ? (
        <button
          onClick={handleLogout}
          className="inline-flex items-center bg-gray-100 rounded-full py-1 px-4 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0"
        >
          Logout
        </button>
      ) : (
        <>
          <button
            className="inline-flex items-center bg-gray-100 rounded-full py-1 px-4 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0"
          >
            <Link to="/Adminlog">Admin Sign Up</Link>
          </button>
          <button
            className="inline-flex items-center bg-gray-100 rounded-full ml-3 py-1 px-4 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0"
          >
            <Link to="/Sign Up">Sign Up</Link>
          </button>
        </>
      )}
        </div>
      </header>
    </div>
  )
}

export default Navbar1