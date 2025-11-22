import type { Transaction } from "../store/apis/transactionsApi";
import TransactionTable from "../components/TransactionTable";

interface RecentTransactionsProps {
  transactions: Transaction[];
}

function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
    <div>
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default RecentTransactions;
