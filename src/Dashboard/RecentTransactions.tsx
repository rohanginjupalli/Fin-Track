import { useGetTransactionsQuery } from "../store/apis/transactionsApi";

interface TransactionDetails {
  id:number,
  title:string,
  category:string,
  type:string,
  amount:number,
  date:string
}
function RecentTransactions() {

  const { data=[], error, isFetching } = useGetTransactionsQuery();

  

  const renderedTnx = data.map((txn) => (
            <tr key={txn.id} className="border-t">
              <td className="p-2">{txn.title}</td>
              <td>{txn.category}</td>
              <td className={txn.type === "income" ? "text-green-600" : "text-red-600"}>
                ₹{txn.amount}
              </td>
              <td>{txn.type}</td>
              <td>{txn.date}</td>
            </tr>
            ))


  return (
    <div>
      <table className="w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th>Title</th>
            <th >Category</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {renderedTnx}
        </tbody>
      </table>
    </div>
  )
}

export default RecentTransactions;
