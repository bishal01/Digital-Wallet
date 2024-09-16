import React, { useEffect, useState } from 'react';


const Viewtr = () => {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions from localStorage when the component mounts
  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(storedTransactions);  // Set the transactions to state
  }, []);
  return (
    <div>
       <div>
      <h2>Transaction History</h2>

      {/* Render the table */}
      <table className="min-w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden">
  <thead>
    <tr className="bg-blue-900 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
      <th className="py-3 px-4">Type</th>
      <th className="py-3 px-4">Amount</th>
      <th className="py-3 px-4">Account Number</th>
      <th className="py-3 px-4">Transaction Date</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-700">
    {transactions.length > 0 ? (
      transactions
        .filter((transaction) => transaction.accountNumber === "98624") // Filter by account number
        .map((transaction, index) => (
          <tr key={index} className="hover:bg-gray-700 transition-colors">
            <td className="py-2 px-4 text-gray-300">{transaction.type}</td>
            <td className="py-2 px-4 text-gray-300">{transaction.amount}</td>
            <td className="py-2 px-4 text-gray-300">{transaction.accountNumber}</td>
            <td className="py-2 px-4 text-gray-300">{transaction.transactionDate}</td>
          </tr>
        ))
    ) : (
      <tr>
        <td colSpan="4" className="py-4 text-center text-gray-400">
          No transactions found
        </td>
      </tr>
    )}
  </tbody>
</table>
    </div>
    </div>
  )
}

export default Viewtr
