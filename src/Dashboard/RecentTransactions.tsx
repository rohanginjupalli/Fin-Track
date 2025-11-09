interface TransactionDetails {
  id:number,
  title:string,
  category:string,
  type:string,
  amount:number,
  date:string
}
function RecentTransactions() {

  const transactions:TransactionDetails[] = 
  [
    { id: 1, title: "Biryani", category: "Food", type: "Expense", amount: 200, date: "2024-11-01" },
    { id: 2, title: "Salary", category: "Job", type: "Income", amount: 50000, date: "2024-09-22" },
    { id: 3, title: "Metro Ticket", category: "Travel", type: "Expense", amount: 50, date: "2024-10-12" },
  ];

  const renderedTnx = transactions.map((txn) => (
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
