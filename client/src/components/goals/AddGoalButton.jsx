import "../../styles/addGoal.css";

function AddGoalButton({ onClick }) {
  return (
    <button
      className="add-goal-btn"
      onClick={onClick}
    >
      + Add Goal
    </button>
  );
}

export default AddGoalButton;