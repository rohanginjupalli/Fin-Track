import Panel from "../components/Panel"
import { useGetTransactionsQuery } from "../store/apis/transactionsApi"

interface SummaryCardDetails {
  title:string,
  amount:number,
}


function SummaryCard({title,amount}:SummaryCardDetails) {

  

  return (
    <div>
      
      <Panel>
        <h2 className="text-gray-600 text-sm font-semibold">{title}</h2>
        <p className="text-2xl ">{amount}</p>
      </Panel>
    </div>
  )
}

export default SummaryCard