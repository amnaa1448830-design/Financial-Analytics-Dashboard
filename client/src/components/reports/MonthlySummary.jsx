import useTransactions from "../../hooks/useTransactions";
import "../../styles/monthlySummary.css";

function MonthlySummary() {
  const {
    transactions,
    totalIncome,
    totalExpense,
    savings,
    totalBalance,
  } = useTransactions();

  const incomeTransactions = transactions.filter(
    (item) => item.type === "Income"
  );

  const expenseTransactions = transactions.filter(
    (item) => item.type === "Expense"
  );

  const highestIncome =
    incomeTransactions.length > 0
      ? incomeTransactions.reduce((max, item) =>
          item.amount > max.amount ? item : max
        )
      : null;

  const highestExpense =
    expenseTransactions.length > 0
      ? expenseTransactions.reduce((max, item) =>
          item.amount > max.amount ? item : max
        )
      : null;

  return (
    <div className="monthly-summary">

      <h2>Monthly Financial Summary</h2>

      <table>

        <tbody>

          <tr>
            <td>Total Income</td>
            <td>Rs. {totalIncome.toLocaleString()}</td>
          </tr>

          <tr>
            <td>Total Expense</td>
            <td>Rs. {totalExpense.toLocaleString()}</td>
          </tr>

          <tr>
            <td>Total Savings</td>
            <td>Rs. {savings.toLocaleString()}</td>
          </tr>

          <tr>
            <td>Net Balance</td>
            <td>Rs. {totalBalance.toLocaleString()}</td>
          </tr>

          <tr>
            <td>Highest Income</td>
            <td>
              {highestIncome
                ? `${highestIncome.title} (Rs. ${highestIncome.amount.toLocaleString()})`
                : "N/A"}
            </td>
          </tr>

          <tr>
            <td>Highest Expense</td>
            <td>
              {highestExpense
                ? `${highestExpense.title} (Rs. ${highestExpense.amount.toLocaleString()})`
                : "N/A"}
            </td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default MonthlySummary;