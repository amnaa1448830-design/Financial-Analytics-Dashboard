import "../../styles/budget.css";

function BudgetCategoryCard({
  icon,
  title,
  budget,
  spent,
}) {
  const percentage = Math.min(
    (spent / budget) * 100,
    100
  );

  return (
    <div className="category-card">

      <h2>
        {icon} {title}
      </h2>

      <p>
        Budget:
        <strong> Rs. {budget.toLocaleString()}</strong>
      </p>

      <p>
        Spent:
        <strong> Rs. {spent.toLocaleString()}</strong>
      </p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>

      <span>{percentage.toFixed(0)}%</span>

    </div>
  );
}

export default BudgetCategoryCard;