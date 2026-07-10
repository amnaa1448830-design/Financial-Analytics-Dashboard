import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import useTransactions from "../../hooks/useTransactions";
import "../../styles/chart.css";

function IncomeChart() {
  const { transactions } = useTransactions();

  // Income transactions only
  const incomeTransactions = transactions.filter(
    (item) => item.type === "Income"
  );

  // Convert transactions into chart data
  const chartData = incomeTransactions.map((item) => ({
    name: item.title,
    income: item.amount,
  }));

  return (
    <div className="chart-box">
      <h3>Income Overview</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="income"
            stroke="#2563EB"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IncomeChart;