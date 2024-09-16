import React , {useState,useEffect} from 'react'

const Transfer = () => {
    const [transferTransactions, setTransferTransactions] = useState([]);

    useEffect(() => {
      // Fetch the transfer transactions from localStorage
      const storedTransactions = JSON.parse(localStorage.getItem('transferTransactions')) || [];
      setTransferTransactions(storedTransactions);
    }, []);
  return (
    <>
          <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <h3 className="text-lg font-medium mb-4 p-4 bg-blue-900 text-white">Transfer History</h3>
        <table className="min-w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-900 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Transfer To</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4">Transaction Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {transferTransactions.length > 0 ? (
              transferTransactions.map((transaction, index) => (
                <tr key={index} className="hover:bg-gray-700 transition-colors">
                  <td className="py-2 px-4 text-gray-300">{transaction.amount}</td>
                  <td className="py-2 px-4 text-gray-300">{transaction.transferTo}</td>
                  <td className="py-2 px-4 text-gray-300">{transaction.description}</td>
                  <td className="py-2 px-4 text-gray-300">{transaction.transactionDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-4 text-center text-gray-400">
                  No transfer transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Transfer
