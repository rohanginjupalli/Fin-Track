import { useGetTransactionsQuery, type Transaction } from "../store/apis/transactionsApi";
import TransactionTable from "../components/TransactionTable";

function RecentTransactions() {

  const { data } = useGetTransactionsQuery();
  const transactions: Transaction[] = data ?? [];

  return (
    <div>
      <TransactionTable transactions={transactions} />
    </div>
  )
}

export default RecentTransactions;
