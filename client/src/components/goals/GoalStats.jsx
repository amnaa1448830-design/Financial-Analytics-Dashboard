import useGoals from "../../hooks/useGoals";
import "../../styles/goalStats.css";

function GoalStats() {
  const { goals } = useGoals();

  const totalGoals = goals.length;

  const completedGoals = goals.filter(
    (goal) => goal.saved >= goal.target
  ).length;

  const remainingGoals =
    totalGoals - completedGoals;

  const totalSaved = goals.reduce(
    (sum, goal) => sum + goal.saved,
    0
  );

  return (
    <div className="goal-stats">

      <div className="stat-card">
        <h2>🎯</h2>
        <h3>{totalGoals}</h3>
        <p>Total Goals</p>
      </div>

      <div className="stat-card">
        <h2>🏆</h2>
        <h3>{completedGoals}</h3>
        <p>Completed</p>
      </div>

      <div className="stat-card">
        <h2>⏳</h2>
        <h3>{remainingGoals}</h3>
        <p>Remaining</p>
      </div>

      <div className="stat-card">
        <h2>💰</h2>
        <h3>
          Rs. {totalSaved.toLocaleString()}
        </h3>
        <p>Total Saved</p>
      </div>

    </div>
  );
}

export default GoalStats;