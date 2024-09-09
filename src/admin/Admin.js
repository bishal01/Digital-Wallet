import React, { useState ,useEffect } from "react";
import Navbar1 from "./Navbar1";
import c1 from './c1.png'
import c4 from './c4.png'
import c6 from './c6.jpeg'


const Admin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve and parse userData from localStorage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const users = [
    { username: "Sunrise25", fullName: "Smith Panday", phone: "622322662", email: "jonsmith@mail.com" },
    { username: "Bottle55", fullName: "Bottle Rai", phone: "622322662", email: "bottle@gmail.com" },
    { username: "Keshav", fullName: "Keshav Sigdel", phone: "622322662", email: "khero@mail.com" },
    { username: "Lian", fullName: "Smith Lian", phone: "622322662", email: "jonsmith@mail.com" },
    { username: "Hari09", fullName: "Hari Adhikari", phone: "622322662", email: "haru@mail.com" },
    { username: "Royal", fullName: "Eminem Sharma", phone: "622322662", email: "eminem@mail.com" },
    { username: "Emma", fullName: "Johnson", phone: "622322662", email: "jonsmith@mail.com" },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm) ||
      user.fullName.toLowerCase().includes(searchTerm) ||
      user.phone.includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm)
  );
  return (
    <div className="bg-black" >
      <Navbar1/>
        <div className="w-full overflow-x-hidden border-t flex flex-col">
            <main className="w-full flex-grow p-6">
            <h1 className="text-3xl text-black pb-6">Dashboard</h1>
    
            <div className="flex flex-wrap justify-center mt-6">
 
  <div className="w-full lg:w-1/2 pr-0 lg:pr-2 flex flex-col justify-around lg:flex-row">
    <div className="p-6 bg-white rounded-lg shadow-md mr-10 lg:w-1/2 lg:pr-2">
      <p className="text-xl pb-3 flex items-center">
        <i className="fas fa-plus mr-3"></i> Admin Profile
      </p>
      <h3 className="text-2xl font-semibold mb-4">Admin</h3>
      <div className="flex flex-col">
        {userData ? (
          <div className="flex flex-col">
            <p className="text-lg">
              <span className="font-medium">Username:</span> {userData.username}
            </p>
            <p className="text-lg">
              <span className="font-medium">Email:</span> {userData.email}
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>

   
    <div className="p-6 shadow-md lg:w-1/2">
      <img
        src={c6}
        alt="Admin Profile"
        className="w-full "
      />
    </div>
  </div>
</div>
    
             
    
                <div className="w-full mt-8">
                  <div>
                    <div>
                    <p className="text-xl text-white pb-3 flex items-center">
                        <i className="fas fa-list mr-3"></i> Wallet User
                    </p>
                    </div>
               

                  </div>
                                   <div>
                                   <form className="max-w-md mb-4 mx-auto">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by Username, Full Name, Contact, or Email..."
            onChange={handleSearch}
            value={searchTerm}
            required
          />
        </div>
      </form>

                        </div>
                  
                        <div className="bg-white overflow-auto">
        <table id="userTable" className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">UserName</th>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Full Name</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td className="w-1/3 text-left py-3 px-4">{user.username}</td>
                  <td className="w-1/3 text-left py-3 px-4">{user.fullName}</td>
                  <td className="text-left py-3 px-4">
                    <a className="hover:text-blue-500" href={`tel:${user.phone}`}>
                      {user.phone}
                    </a>
                  </td>
                  <td className="text-left py-3 px-4">
                    <a className="hover:text-blue-500" href={`mailto:${user.email}`}>
                      {user.email}
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>




                </div>
            </main>
    
        
        </div>
        
    </div>
  )
}

export default Admin
