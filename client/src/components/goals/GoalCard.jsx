import { useState } from "react";
import useGoals from "../../hooks/useGoals";
import "../../styles/goals.css";

function GoalCard({
  id,
  icon,
  title,
  saved,
  target,
}) {
  const {
    updateSavedAmount,
    deleteGoal,
  } = useGoals();

  const [amount, setAmount] = useState("");

  const percentage = Math.min(
    (saved / target) * 100,
    100
  );

  const handleUpdate = () => {
    if (!amount || Number(amount) <= 0) {
      alert("Enter a valid amount");
      return;
    }

    updateSavedAmount(id, amount);
    setAmount("");
  };

  let status = "🟡 In Progress";
  let badgeClass = "progress";

  if (percentage >= 100) {
    status = "🏆 Completed";
    badgeClass = "completed";
  } else if (percentage >= 70) {
    status = "🟢 On Track";
    badgeClass = "track";
  }

  return (
    <div className="goal-card">

      <div className="goal-header">

        <h2>
          {icon} {title}
        </h2>

        <button
          className="delete-goal-btn"
          onClick={() => deleteGoal(id)}
        >
          🗑
        </button>

      </div>

      <span className={`goal-badge ${badgeClass}`}>
        {status}
      </span>

      <p>
        Saved:
        <strong> Rs. {saved.toLocaleString()}</strong>
      </p>

      <p>
        Target:
        <strong> Rs. {target.toLocaleString()}</strong>
      </p>

      <div className="goal-progress">
        <div
          className="goal-fill"
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>

      <h3>{percentage.toFixed(0)}%</h3>

      <div className="goal-update">

        <input
          type="number"
          placeholder="Add Savings"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        <button onClick={handleUpdate}>
          Update
        </button>

      </div>

    </div>
  );
}

export default GoalCard;