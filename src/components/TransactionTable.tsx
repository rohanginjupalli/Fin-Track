
import {  type Transaction } from "../store/apis/transactionsApi";
import { IoArrowUpCircleSharp,IoArrowDownCircleSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useDeleteTransactionMutation } from "../store/apis/transactionsApi";
import { useState } from "react";

interface TransactionTableProps {
  transactions: Transaction[];
}

  type SortField = "amount" | "type" | "date" | null;
  type SortOrder = "asc" | "desc";

function TransactionTable({transactions}:TransactionTableProps) {

    const [sortField, setSortField] = useState<SortField>(null);
    const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

     const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

    const [deleteTransaction] = useDeleteTransactionMutation();
    console.log(transactions);
    
    const handleDelete = async (id: number) => {
    
    
    try {
      await deleteTransaction(id).unwrap(); 
      console.log(`Deleted transaction with id: ${id}`);
    } catch (err) {
      console.error("Failed to delete:", err);
    }
  };

  let sortedTransactions = [...transactions];

  if (sortField === "amount") {
    sortedTransactions.sort((a, b) =>
      sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount
    );
  }

  if (sortField === "type") {
    sortedTransactions.sort((a, b) =>
      sortOrder === "asc"
        ? a.type.localeCompare(b.type)
        : b.type.localeCompare(a.type)
    );
  }

  if (sortField === "date") {
    sortedTransactions.sort((a, b) =>
      sortOrder === "asc"
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }


    const renderedTnx = sortedTransactions.map((txn: Transaction) => (
        <tr key={txn.id} className="odd:bg-white even:bg-gray-50 border-b border-gray-200 text-gray-800">
            <td className="px-6 py-4">
                <div className="flex items-center gap-2" >
                      {txn.type === "income" ? (
                        <IoArrowUpCircleSharp className="text-green-600 text-xl" />
                      ) : (
                        <IoArrowDownCircleSharp className="text-red-600 text-xl " />
                      )}
                      <span>{txn.title}</span>
                </div>
            </td>
            <td className="px-6 py-4" >{txn.category}</td>
            <td className={ txn.type === "income" ? "text-green-600 px-6 py-4" : "text-red-600 px-6 py-4"}>
                ₹{txn.amount}
            </td>
            <td className="px-6 py-4">{txn.type}</td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-5" >
                <span>{txn.date}</span>
                <MdDelete className="text-2xl cursor-pointer hover:text-red-600 transition-colors" onClick={()=>{
                  handleDelete(txn.id);
                }}  />
              </div>
              </td>
        </tr>
    ))


  

  

  return (
    <div className="relative overflow-x-auto bg-white shadow-lg rounded-2xl">
      <table className="table-auto md:table-fixed w-full text-sm text-left text-gray-800">
        <thead className="text-xs text-gray-800 uppercase bg-[#e0f2fe]">
          <tr>
            <th scope="col" className="px-6 py-3">Title</th>
            <th scope="col" className="px-6 py-3">Category</th>
            <th scope="col" className="px-6 py-3"
                onClick={() => handleSort("amount")}
            >
              Amount {" "}{sortField === "amount" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th scope="col" className="px-6 py-3"
                 onClick={() => handleSort("type")}
            >
              Type{" "}{sortField === "type" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th scope="col" className="px-6 py-3"
                onClick={() => handleSort("date")}
            >
              Date {sortField === "date" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
          </tr>
        </thead>
        <tbody>
          {renderedTnx}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionTable