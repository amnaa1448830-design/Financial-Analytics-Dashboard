import { useState } from "react";
import useGoals from "../../hooks/useGoals";
import "../../styles/addGoal.css";

function AddGoalModal({ isOpen, onClose }) {
  const { addGoal } = useGoals();

  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("🎯");
  const [target, setTarget] = useState("");
  const [saved, setSaved] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    if (!title || !target || !saved) {
      alert("Please fill all fields");
      return;
    }

    addGoal({
      title,
      icon,
      target: Number(target),
      saved: Number(saved),
    });

    setTitle("");
    setIcon("🎯");
    setTarget("");
    setSaved("");

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Add Goal</h2>

        <input
          type="text"
          placeholder="Goal Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Emoji (🎯 💻 🚗)"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
        />

        <input
          type="number"
          placeholder="Target Amount"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />

        <input
          type="number"
          placeholder="Saved Amount"
          value={saved}
          onChange={(e) => setSaved(e.target.value)}
        />

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="save-btn"
            onClick={handleSave}
          >
            Save
          </button>

        </div>

      </div>
    </div>
  );
}

export default AddGoalModal;