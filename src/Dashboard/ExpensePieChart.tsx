import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { type Transaction } from "../store/apis/transactionsApi";

interface PieProps {
  transactions: Transaction[];
}

const COLORS = ["#4ade80", "#f87171"]; 

function ExpensePieChart({ transactions }: PieProps) {
  // Safely convert amounts to numbers (API might return strings)
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const data = [
    { name: "Income", value: income },
    { name: "Expenses", value: expense },
  ];

  const total = income + expense;

  if (total === 0) {
    return (
      <div className="bg-white shadow-lg rounded-2xl p-6 h-96 flex items-center justify-center">
        <p className="text-gray-600">No transactions to display</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 h-96">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            dataKey="value"
            label
          >
            {data.map((_, idx) => (
              <Cell key={idx} fill={COLORS[idx]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpensePieChart;
