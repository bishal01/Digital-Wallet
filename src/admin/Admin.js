import React ,{useEffect,useState} from 'react'
import heroimg from '../user/img/img2.jpg'
const Admin = () => {
    const [storedData, setStoredData] = useState(null);

    useEffect(() => {
      // Retrieve data from local storage
      const data = localStorage.getItem('userRegistrationData');
      if (data) {
        setStoredData(JSON.parse(data));
      }
    }, []);
  return (
    <div>
        <section className="text-gray-600 body-font mt-5 md:h-[90vh]  ">
        <div className="container mx-auto w-[90%] flex h-full px-5 py-12 flex-col md:flex-row items-center bg-gradient-to-r from-blue-950 to-blue-900 rounded-3xl shadow-lg">
          
            <div className="order-1 md:order-2 lg:max-w-lg lg:w-full md:w-1/2 w-1/2  mb-8 md:mb-0 flex justify-center">
                <img className="object-cover object-center rounded-full border-4 border-white shadow-lg max-w-full h-auto sm:w-5/6" alt="hero" src={heroimg} />
            </div>
         
         

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">Field</th>
          <th scope="col" className="px-6 py-3">Value</th>
        </tr>
      </thead>
      <tbody>
        {storedData && (
          <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Name</th>
              <td className="px-6 py-4">{storedData.name}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Address</th>
              <td className="px-6 py-4">{storedData.address}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Phone</th>
              <td className="px-6 py-4">{storedData.phone}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Email</th>
              <td className="px-6 py-4">{storedData.email}</td>
            </tr>
            {/* Add more rows as needed */}
          </>
        )}
      </tbody>
    </table>
</div>

        </div>
    </section>
    </div>
  )
}

export default Admin
