import { useGetTransactionsQuery, type Transaction } from "../store/apis/transactionsApi";
import { useState } from "react"
import Button from "../components/Button"
import Modal from "../components/Modal"

// Using Transaction type from the API slice; remove unused local interface.

function AddTransaction() {
  const { data, error, isFetching } = useGetTransactionsQuery();
  const transactions: Transaction[] = data ?? [];


  const [showForm,setShowForm] = useState(false);
  
  const handleClick = ()=>{
    setShowForm(true)
  }

  
  const renderedTnx = transactions.map((txn: Transaction) => (
            <tr key={txn.id} className="border-t">
              <td className="p-2">{txn.title}</td>
              <td>{txn.category}</td>
              <td className={txn.type === "Income" ? "text-green-600" : "text-red-600"}>
                ₹{txn.amount}
              </td>
              <td>{txn.type}</td>
              <td>{txn.date}</td>
            </tr>
            ))

  return (
  <div>
    {showForm&&<Modal setShowForm ={setShowForm} />}
    <div className=" flex justify-between p-5">
        <div>
          <p className="text-2xl font-bold" >All Transactions</p>
          <p className="text-xl font-semibold" >Manage your income and expenses</p>
        </div>
        <div>
          <Button rounded className="bg-gray-500 text-white" onClick={handleClick} >
            + Add Transaction
          </Button>
        </div>
    </div>
    <div className="ml-10 w-4xl" >
      {isFetching && <p className="p-4 text-gray-500">Loading transactions...</p>}
      {error && !isFetching && <p className="p-4 text-red-600">Failed to load transactions.</p>}
      {!isFetching && !error && (
        transactions.length === 0 ? (
          <p className="p-4 text-gray-500">No transactions found.</p>
        ) : (
          <table className="w-full border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Title</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {renderedTnx}
            </tbody>
          </table>
        )
      )}
    </div>
  </div>
  )
}

export default AddTransaction