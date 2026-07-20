import useTransactions from "../../hooks/useTransactions";
import "../../styles/aiFinancialAnalysis.css";

function AIFinancialAnalysis() {
  const {
    totalIncome,
    totalExpense,
    savings,
  } = useTransactions();

  const savingsRate =
    totalIncome > 0
      ? ((savings / totalIncome) * 100).toFixed(1)
      : 0;

  let score = 100;

  if (savingsRate < 20) score -= 30;
  if (totalExpense > totalIncome * 0.8) score -= 20;
  if (totalExpense > totalIncome) score -= 30;

  let recommendation = "";

  if (savingsRate >= 40) {
    recommendation =
      "Excellent savings habit. Keep investing consistently.";
  } else if (savingsRate >= 20) {
    recommendation =
      "Good financial health. Try increasing your monthly savings.";
  } else {
    recommendation =
      "Your savings are low. Reduce unnecessary expenses and increase savings.";
  }

  return (
    <div className="ai-analysis">

      <h2>🤖 AI Financial Analysis</h2>

      <div className="score-box">

        <h1>{score}/100</h1>

        <p>Financial Health Score</p>

      </div>

      <div className="analysis-grid">

        <div>
          <h3>💰 Savings Rate</h3>
          <p>{savingsRate}%</p>
        </div>

        <div>
          <h3>💸 Total Expense</h3>
          <p>Rs. {totalExpense.toLocaleString()}</p>
        </div>

        <div>
          <h3>💵 Total Income</h3>
          <p>Rs. {totalIncome.toLocaleString()}</p>
        </div>

      </div>

      <div className="recommendation">

        <h3>💡 Recommendation</h3>

        <p>{recommendation}</p>

      </div>

    </div>
  );
}

export default AIFinancialAnalysis;