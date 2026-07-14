import MainLayout from "../layouts/MainLayout";
import IncomeChart from "../components/dashboard/IncomeChart";
import ExpenseChart from "../components/dashboard/ExpenseChart";
import useTransactions from "../hooks/useTransactions";

import "../styles/dashboard.css";
import "../styles/analytics.css";

function Analytics() {
  const {
    transactions,
    totalIncome,
    totalExpense,
    totalBalance,
  } = useTransactions();

  const totalTransactions = transactions.length;

  const savingsRate =
    totalIncome === 0
      ? 0
      : (((totalIncome - totalExpense) / totalIncome) * 100).toFixed(1);

  return (
    <MainLayout>
      <div className="dashboard">

        <h1>Financial Analytics</h1>

        <p>
          Monitor your financial performance and spending habits.
        </p>

        <div className="analytics-cards">

          <div className="analytics-card">
            <h3>Total Transactions</h3>
            <h2>{totalTransactions}</h2>
          </div>

          <div className="analytics-card">
            <h3>Total Income</h3>
            <h2>Rs. {totalIncome.toLocaleString()}</h2>
          </div>

          <div className="analytics-card">
            <h3>Total Expense</h3>
            <h2>Rs. {totalExpense.toLocaleString()}</h2>
          </div>

          <div className="analytics-card">
            <h3>Savings Rate</h3>
            <h2>{savingsRate}%</h2>
          </div>

        </div>

        <div className="chart-section">
          <IncomeChart />
          <ExpenseChart />
        </div>

        <div className="ai-summary">
          <h2>🤖 AI Financial Summary</h2>

          <p>
            Your current balance is
            <strong> Rs. {totalBalance.toLocaleString()}</strong>.
          </p>

          <p>
            You've completed
            <strong> {totalTransactions} </strong>
            transactions.
          </p>

          <p>
            Savings rate is
            <strong> {savingsRate}%</strong>.
          </p>
        </div>

      </div>
    </MainLayout>
  );
}

export default Analytics;