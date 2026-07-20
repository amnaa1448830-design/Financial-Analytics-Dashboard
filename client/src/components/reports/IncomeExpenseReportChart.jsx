import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import useTransactions from "../../hooks/useTransactions";
import "../../styles/reportChart.css";

function IncomeExpenseReportChart() {
  const {
    totalIncome,
    totalExpense,
  } = useTransactions();

  const data = [
    {
      name: "Income",
      amount: totalIncome,
    },
    {
      name: "Expense",
      amount: totalExpense,
    },
  ];

  return (
    <div className="report-chart">

      <h2>Income vs Expense</h2>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="amount"
            fill="#2563EB"
            radius={[8,8,0,0]}
          />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default IncomeExpenseReportChart;