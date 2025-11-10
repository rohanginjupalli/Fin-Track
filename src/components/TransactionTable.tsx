
import {  type Transaction } from "../store/apis/transactionsApi";
import { IoArrowUpCircleSharp,IoArrowDownCircleSharp } from "react-icons/io5";

interface TransactionTableProps {
  transactions: Transaction[];
}

function TransactionTable({transactions}:TransactionTableProps) {

    const renderedTnx = transactions.map((txn: Transaction) => (
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
            <td className="px-6 py-4">{txn.date}</td>
        </tr>
    ))

  return (
    <div className="relative overflow-x-auto bg-white shadow-lg rounded-2xl">
      <table className="table-auto md:table-fixed w-full text-sm text-left text-gray-800">
        <thead className="text-xs text-gray-800 uppercase bg-[#e0f2fe]">
          <tr>
            <th scope="col" className="px-6 py-3">Title</th>
            <th scope="col" className="px-6 py-3">Category</th>
            <th scope="col" className="px-6 py-3">Amount</th>
            <th scope="col" className="px-6 py-3">Type</th>
            <th scope="col" className="px-6 py-3">Date</th>
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