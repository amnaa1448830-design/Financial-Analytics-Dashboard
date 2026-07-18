import useGoals from "../../hooks/useGoals";
import "../../styles/goalAdvisor.css";

function GoalAdvisor() {
  const { goals } = useGoals();

  if (goals.length === 0) {
    return (
      <div className="advisor-card">
        <h2>🤖 AI Goal Advisor</h2>
        <p>No goals available.</p>
      </div>
    );
  }

  const completed = goals.filter(
    (goal) => goal.saved >= goal.target
  ).length;

  const highest = [...goals].sort(
    (a, b) => (b.saved / b.target) - (a.saved / a.target)
  )[0];

  const lowest = [...goals].sort(
    (a, b) => (a.saved / a.target) - (b.saved / b.target)
  )[0];

  return (
    <div className="advisor-card">

      <h2>🤖 AI Goal Advisor</h2>

      <p>
        ✅ Completed Goals:
        <strong> {completed}</strong>
      </p>

      <p>
        📈 Highest Progress:
        <strong> {highest.title}</strong>
      </p>

      <p>
        📉 Lowest Progress:
        <strong> {lowest.title}</strong>
      </p>

      <div className="advisor-tip">
        💡 Recommendation:
        <br />
        Focus on
        <strong> {lowest.title}</strong>.
        You're closest to completing
        <strong> {highest.title}</strong>.
      </div>

    </div>
  );
}

export default GoalAdvisor;