import { useGetTransactionsQuery, type Transaction } from "../store/apis/transactionsApi";
import { useState } from "react"
import Button from "../components/Button"
import Modal from "../components/Modal"
import TransactionTable from "../components/TransactionTable";


function AddTransaction() {
  const { data, error, isFetching } = useGetTransactionsQuery();
  const transactions: Transaction[] = data ?? [];


  const [showForm,setShowForm] = useState(false);
  
  const handleClick = ()=>{
    setShowForm(true)
  }


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
          <TransactionTable transactions={transactions}  />
        )
      )}
    </div>
  </div>
  )
}

export default AddTransaction