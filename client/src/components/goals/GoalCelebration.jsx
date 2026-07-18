import useGoals from "../../hooks/useGoals";
import "../../styles/goalCelebration.css";

function GoalCelebration() {
  const { goals } = useGoals();

  const completedGoals = goals.filter(
    (goal) => goal.saved >= goal.target
  );

  if (completedGoals.length === 0) return null;

  return (
    <div className="celebration-card">

      <h2>🎉 Congratulations!</h2>

      <p>
        You have completed{" "}
        <strong>{completedGoals.length}</strong>{" "}
        financial goal
        {completedGoals.length > 1 ? "s" : ""}.
      </p>

      <ul>
        {completedGoals.map((goal) => (
          <li key={goal.id}>
            {goal.icon} {goal.title}
          </li>
        ))}
      </ul>

      <h3>
        🚀 Keep going! You're building a
        stronger financial future.
      </h3>

    </div>
  );
}

export default GoalCelebration;