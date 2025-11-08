import ExpenseIncomeGraph from "./ExpenseIncomeGraph"
import RecentTransactions from "./RecentTransactions"
import SummaryCard from "./SummaryCard"

interface aboutCard{
  title:string,
  amount:number
}

function Home() {

  const summaryData:aboutCard[] = [
    { title: "Total Income :", amount: 50000 },
    { title: "Total Expense :", amount: 20000 },
    { title: "Remaining Balance :", amount: 30000 },
  ];

  

  return (
    <div>
        <div className="mt-10 px-6 w-full">
          <h2 className="text-2xl font-bold mb-5">Welcome , User</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {summaryData.map((item, index) => (
                <SummaryCard key={index} title={item.title} amount={item.amount} />
              ))}
            </div>
        </div>
        <div  className=" mt-10 px-6 grid grid-cols-6 gap-4  " >
          <div className="col-span-2 text-xl font-bold ">
            <ExpenseIncomeGraph />
          </div>
          <div className="col-span-4 text-xl font-bold ">
            <RecentTransactions />
          </div>
            
        </div>
    </div>
  )
}

export default Home