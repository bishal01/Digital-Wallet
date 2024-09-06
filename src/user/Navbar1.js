import React, { useState } from 'react';
import { RiMenu2Fill } from 'react-icons/ri';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const Navbar1 = () => {
  const [open, setOpen] = useState(false);
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

  // Toggle the menu
  const menufunc = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="bg-blue-950 pb-6 top-0 z-50 bg-light-nav pt-4">
        <nav className="flex justify-between items-center w-[97%] mx-auto">
          {/* Logo */}
          <div>
            <NavLink to="/" className="text-3xl font-bold text-white no-underline">
            AMSEV's Wallet
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="lg:block hidden">
            <ul className="md:flex hidden gap-12 items-center">
              <li>
                <NavLink className="lg:text-lg text-base text-gray-100 hover:text-gray-300" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="lg:text-lg text-base text-gray-100 hover:text-gray-300" to="/About">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="lg:text-lg text-base text-gray-100 hover:text-gray-300" to="/Services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink className="lg:text-lg text-base text-gray-100 hover:text-gray-300" to="/Product">
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink className="lg:text-lg text-base text-gray-100 hover:text-gray-300" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden flex min-h-[65vh] items-center justify-center absolute z-50 left-0 top-full py-10 text-center w-full bg-black transition-transform duration-300 ${open ? 'translate-y-0' : '-translate-y-full'}`}>
            <ul className="flex items-center gap-9 flex-col text-center">
              <li>
                <NavLink
                  onClick={() => setOpen(false)}
                  className="md:text-lg text-base text-gray-100 hover:text-gray-300 px-3 py-5"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setOpen(false)}
                  className="md:text-lg text-base text-gray-100 hover:text-gray-300 px-3 py-5"
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setOpen(false)}
                  className="md:text-lg text-base text-gray-100 hover:text-gray-300 px-3 py-5"
                  to="/Services"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setOpen(false)}
                  className="md:text-lg text-base text-gray-100 hover:text-gray-300 px-3 py-5"
                  to="/Product"
                >
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setOpen(false)}
                  className="md:text-lg text-base text-gray-100 hover:text-gray-300 px-3 py-5"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <div className="md:hidden">
                  {isLoggedIn() ? (
                    <button
                      onClick={handleLogout}
                      className="inline-flex items-center bg-gray-100 rounded-full py-1 px-4 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0"
                    >
                      Logout
                    </button>
                  ) : (
                    <>
                      <Link to="/Adminlog">
                        <button className="inline-flex items-center bg-gray-100 rounded-full py-1 px-4 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0">
                          Admin Sign Up
                        </button>
                      </Link>
                      <Link to="/SignUp">
                        <button className="inline-flex items-center bg-gray-100 rounded-full ml-3 py-1 px-4 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0">
                          Sign Up
                        </button>
                      </Link>
                    </>
                  )}
                </div>
              </li>
            </ul>
          </div>

          {/* Right Section (Desktop) */}
          <div className="flex items-center gap-9 mb-1">
            {/* Desktop Buttons */}
            <div className="md:block hidden">
              {isLoggedIn() ? (
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center bg-gray-100 rounded-full py-1 px-4 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/Adminlog">
                    <button className="inline-flex items-center bg-gray-100 rounded-full py-1 px-4 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0">
                      Admin Sign Up
                    </button>
                  </Link>
                  <Link to="/Sign Up">
                    <button className="inline-flex items-center bg-gray-100 rounded-full ml-3 py-1 px-4 focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden block px-3">
              <button onClick={menufunc} className="text-gray-50">
                <RiMenu2Fill className="text-[20px]" />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar1;
