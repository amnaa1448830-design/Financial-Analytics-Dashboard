import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import useTransactions from "../../hooks/useTransactions";
import "../../styles/chart.css";

const COLORS = [
  "#2563EB",
  "#22C55E",
  "#EF4444",
  "#F59E0B",
  "#8B5CF6",
  "#06B6D4",
  "#EC4899",
];

function ExpenseChart() {
  const { transactions } = useTransactions();

  // Sirf Expense Transactions
  const expenseTransactions = transactions.filter(
    (item) => item.type === "Expense"
  );

  // Category Wise Total
  const expenseData = [];

  expenseTransactions.forEach((item) => {
    const existing = expenseData.find(
      (data) => data.name === item.title
    );

    if (existing) {
      existing.value += item.amount;
    } else {
      expenseData.push({
        name: item.title,
        value: item.amount,
      });
    }
  });

  return (
    <div className="chart-box">
      <h3>Expense Breakdown</h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>

          <Pie
            data={expenseData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {expenseData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseChart;