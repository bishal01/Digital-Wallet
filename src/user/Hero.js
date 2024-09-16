import React,{useState} from 'react'
import Heroimg from './img/img2.jpg'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'

const Hero = () => {
  const [isDepositCardOpen, setIsDepositCardOpen] = useState(false);
  const [isTransferCardOpen, setIsTransferCardOpen] = useState(false);
  const userData = localStorage.getItem('userRegistrationData');

  // State for deposit and transfer forms
  const [formData, setFormData] = useState({
    amount: '',
    accountNumber: '',
    transactionDate: '',
    transferTo: '',
    description: ''
  });

  // Toggle Deposit Card
  const toggleDepositCard = () => {
    setIsDepositCardOpen(!isDepositCardOpen);
    setIsTransferCardOpen(false); // Close transfer card when deposit is open
  };

  // Toggle Transfer Card
  const toggleTransferCard = () => {
    setIsTransferCardOpen(!isTransferCardOpen);
    setIsDepositCardOpen(false); // Close deposit card when transfer is open
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(`Updated ${name}:`, value);  // Log the input change
  };

  // Handle form submission for deposit and transfer
    // Handle form submission for deposit and transfer
    const handleSubmit = (e) => {
      e.preventDefault();
    
      // Retrieve existing transactions from local storage
      let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    
      // Determine the type of transaction (deposit or transfer)
      const transactionType = isDepositCardOpen ? 'Deposit' : 'Transfer';
    
      // Create a new transaction object
      const newTransaction = {
        type: transactionType,
        amount: formData.amount,
        accountNumber: formData.accountNumber,
        transactionDate: formData.transactionDate,
        transferTo: formData.transferTo,
        description: formData.description
      };
    
      // Add the new transaction to the existing list
      transactions.push(newTransaction);
    
      // Save the updated transactions back to local storage
      localStorage.setItem('transactions', JSON.stringify(transactions));
    
      // Show success alert
      Swal.fire('Success', `${transactionType} transaction successful!`, 'success');
    
      // Reset form data after submission
      setFormData({
        amount: '',           // Reset the amount
        accountNumber: '',     // Reset the account number
        transactionDate: '',   // Reset the transaction date
        transferTo: '',        // Reset the transfer field
        description: ''        // Reset the description
      });
    
      setIsDepositCardOpen(false);
      setIsTransferCardOpen(false);
    };

    const handleSubmitTransfer = (e) => {
      e.preventDefault();
    
      // Retrieve existing transfer transactions from local storage
      let transferTransactions = JSON.parse(localStorage.getItem('transferTransactions')) || [];
    
      // Create a new transaction object for transfer
      const newTransferTransaction = {
        type: 'Transfer',
        amount: formData.amount,
        transferTo: formData.transferTo,
        description: formData.description,
        transactionDate: formData.transactionDate
      };
    
      // Add the new transfer transaction to the existing list
      transferTransactions.push(newTransferTransaction);
    
      // Save the updated transfer transactions back to local storage
      localStorage.setItem('transferTransactions', JSON.stringify(transferTransactions));
    
      // Show success alert
      Swal.fire('Success', 'Transfer transaction successful!', 'success');
    
      // Reset form data after submission
      setFormData({
        amount: '',           // Reset the amount
        transferTo: '',        // Reset the transferTo field
        description: '',       // Reset the description
        transactionDate: ''    // Reset the transaction date
      });
    
      setIsTransferCardOpen(false);
    };

  return (
    <>
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
     
        <button className="bg-white ml-3 text-blue-950 flex items-center py-2 px-6 rounded-full hover:bg-gray-200 focus:outline-none">
          <span className="flex-grow text-center">
            <Link to="view_transactions" > View Updated transaction </Link>
          </span>
    
        </button>
        <button className="bg-white ml-3 text-blue-950 flex items-center py-2 px-6 rounded-full hover:bg-gray-200 focus:outline-none">
          <span className="flex-grow text-center">
            <Link to="view_transfer" > Transaction History </Link>
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
      name="amount" // Add name attribute
      value={formData.amount} // Bind to formData state
      onChange={handleInputChange} // Handle input changes
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      placeholder="Enter deposit amount"
      required 
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-700">Account Number</label>
    <input 
      type="text" 
      name="accountNumber" // Add name attribute
      value={formData.accountNumber} // Bind to formData state
      onChange={handleInputChange} // Handle input changes
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      placeholder="Enter account number"
      required 
    />
  </div>
  <div>
    <label className="block text-sm font-medium text-gray-700">Transaction Date</label>
    <input 
      type="date" 
      name="transactionDate" // Add name attribute
      value={formData.transactionDate} // Bind to formData state
      onChange={handleInputChange} // Handle input changes
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
      <p>Please <Link href="//Sign up" className="text-blue-500">sign up first</Link>.</p>
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
            <form className="space-y-4" onSubmit={handleSubmitTransfer }>
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
            <p>Please <Link to="/Sign up" className="text-blue-500">sign up first</Link>.</p>
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
    </>
  )
}





export default Hero