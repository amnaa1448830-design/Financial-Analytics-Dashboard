import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import useTransactions from "../../hooks/useTransactions";
import "../../styles/reportPieChart.css";

const COLORS = [
  "#2563EB",
  "#22C55E",
  "#F97316",
  "#EF4444",
  "#A855F7",
  "#06B6D4",
  "#EAB308",
];

function ExpenseBreakdownReportChart() {
  const { transactions } = useTransactions();

  const expenseTransactions = transactions.filter(
    (item) => item.type === "Expense"
  );

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
    <div className="report-pie-chart">

      <h2>Expense Breakdown</h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <PieChart>

          <Pie
            data={expenseData}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
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

export default ExpenseBreakdownReportChart;