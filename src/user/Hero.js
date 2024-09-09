import React,{useState} from 'react'
import Heroimg from './img/img2.jpg'
import Swal from 'sweetalert2';

const Hero = () => {
  const [isDepositCardOpen, setIsDepositCardOpen] = useState(false);
  const [isTransferCardOpen, setIsTransferCardOpen] = useState(false);
  const userData = localStorage.getItem('userRegistrationData');


  const [formData, setFormData] = useState({
    amount: '',
    accountNumber: '',
    transactionDate: '',
  });
  const [formData1, setFormData1] = useState({
    amount: '',
    accountNumber: '',
    transactionDate: '',
    transferTo: '',  // Additional field for Transfer
    description: '',  // Additional field for Transfer
  });
  const toggleDepositCard = () => {
    setIsDepositCardOpen(!isDepositCardOpen);
  };
  const toggleTransferCard = () => {
    setIsTransferCardOpen(!isTransferCardOpen); // Close transfer card when deposit is open
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success alert using SweetAlert2 based on the transaction type
    if (isDepositCardOpen) {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your deposit transaction was successful.',
        confirmButtonText: 'OK',
        timer: 3000,
        timerProgressBar: true,
      });
    }
     else if (isTransferCardOpen) {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your transfer transaction was successful.',
        confirmButtonText: 'OK',
        timer: 3000,
        timerProgressBar: true,
      });
      
    }
    setFormData({
      amount: '',
      accountNumber: '',
      transactionDate: '',
      transferTo: '',
      description: '',
    });

    // Close both cards
    setIsDepositCardOpen(false);
    setIsTransferCardOpen(false);

  }

  return (
    <div>
        <section className="text-gray-600 body-font mt-5 md:h-[90vh]  ">
        <div className="container mx-auto w-[90%] flex h-full px-5 py-12 flex-col md:flex-row items-center bg-gradient-to-r from-blue-950 to-blue-900 rounded-3xl shadow-lg">
          
            <div className="order-1 md:order-2 lg:max-w-lg lg:w-full md:w-1/2 w-1/2  mb-8 md:mb-0 flex justify-center">
                <img className="object-cover object-center rounded-full border-4 border-white shadow-lg max-w-full h-auto sm:w-5/6" alt="hero" src={Heroimg} />
            </div>
         
            <div className="bg-dark-nav text-white py-10">
  

  <div className="flex flex-col-reverse order-2 md:order-2 md:flex-row items-center justify-between px-6 md:px-12 py-16">
    {/* Key Information and Features */}
    <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
      <h1 className="text-4xl font-medium mb-4">Mobile Wallet</h1>
      <p className="mb-8 text-xl text-gray-300">"Your Money, Your World, at Your Fingertips"</p>
      <div className="flex justify-center md:justify-start">
        <button className="bg-white text-blue-950 flex items-center py-2 px-6 rounded-full hover:bg-gray-200 focus:outline-none">
          <span className="flex-grow text-center">Learn More</span>
          <span className="bg-black text-white rounded-full p-2 ml-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>

   
  </div>

  {/* Sections for Sending and Requesting Money */}
  <div className="order-3 md:order-3 text-white py-10">
  <div className="flex flex-col md:flex-row justify-around items-center px-6 md:px-12">
    <div className="text-center md:text-left">
      <h2 className="text-2xl font-medium mb-4">Deposit Money</h2>
      <button 
      onClick={toggleDepositCard}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
        Deposit
      </button>
     
    </div>
    {
  userData ? (
    isDepositCardOpen && (
      <div className="bg-white text-black rounded-lg shadow-lg mt-6 p-6 max-w-md mx-auto">
        <h3 className="text-lg font-medium mb-4">Deposit Transaction</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <input 
              type="number" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter deposit amount"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Account Number</label>
            <input 
              type="text" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter account number"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Transaction Date</label>
            <input 
              type="date" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required 
            />
          </div>
          <div className="flex">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              Submit
            </button>
            <button 
              type="button" 
              onClick={toggleDepositCard} 
              className="ml-4 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    )
  ) : (
    isDepositCardOpen && (
      <div className="bg-red-100 text-red-700 p-4 rounded-lg mt-6 max-w-md mx-auto">
      <p>Please <a href="/signup" className="text-blue-500">sign up first</a>.</p>
      <button 
        type="button" 
        onClick={toggleDepositCard}
        className="mt-4 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
      >
        Close
      </button>
    </div>
  ))
}
    <div className="text-center md:text-left mt-8 md:mt-0">
      <h2 className="text-2xl font-medium mb-4">Transfer Money</h2>
      <button
      onClick={toggleTransferCard}
      className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
        Transfer
      </button>
    </div>
  </div>
</div>

</div>

{userData ? (
        isTransferCardOpen && (
          <div className="bg-white text-black rounded-lg shadow-lg mt-6 p-6 max-w-md mx-auto">
            <h3 className="text-lg font-medium mb-4">Transfer Transaction</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Amount</label>
                <input 
                  type="number" 
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter transfer amount"
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Transfer To</label>
                <input 
                  type="text" 
                  name="transferTo"
                  value={formData.transferTo}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter recipient account number"
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <input 
                  type="text" 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter transaction description"
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Transaction Date</label>
                <input 
                  type="date" 
                  name="transactionDate"
                  value={formData.transactionDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required 
                />
              </div>
              <div className="flex">
                <button 
                  type="submit" 
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                  Submit
                </button>
                <button 
                  type="button" 
                  onClick={toggleTransferCard} 
                  className="ml-4 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )
      ) : (
        isTransferCardOpen && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mt-6 max-w-md mx-auto">
            <p>Please <a href="/signup" className="text-blue-500">sign up first</a>.</p>
            <button 
              type="button" 
              onClick={toggleTransferCard}
              className="mt-4 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
        )
      )}


        </div>
    </section>

    </div>
  )
}

export default Hero