import "../../styles/budget.css";

function BudgetAdvice({
  percentage,
  highestCategory,
  remaining,
}) {
  let message = "";

  if (percentage >= 100) {
    message =
      "⚠️ Warning! You have exceeded your monthly budget.";
  } else if (percentage >= 80) {
    message =
      "⚠️ You are close to reaching your monthly budget.";
  } else if (percentage >= 50) {
    message =
      "🙂 Your spending is moderate. Keep monitoring your expenses.";
  } else {
    message =
      "✅ Great! Your spending is under control. Keep saving!";
  }

  return (
    <div className="budget-advice">

      <h2>🤖 AI Budget Advisor</h2>

      <p>
        Budget Used:
        <strong> {percentage.toFixed(1)}%</strong>
      </p>

      <p>
        Highest Spending Category:
        <strong> {highestCategory}</strong>
      </p>

      <p>
        Remaining Budget:
        <strong> Rs. {remaining.toLocaleString()}</strong>
      </p>

      <div className="advice-box">
        {message}
      </div>

    </div>
  );
}

export default BudgetAdvice;