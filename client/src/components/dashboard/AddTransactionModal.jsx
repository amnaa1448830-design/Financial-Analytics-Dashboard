import { useState } from "react";
import useTransactions from "../../hooks/useTransactions";
import "../../styles/addTransactionModal.css";

function AddTransactionModal({ isOpen, onClose }) {
  const { addTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");
  const [date, setDate] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    if (!title || !amount || !date) {
      alert("Please fill all fields");
      return;
    }

    addTransaction({
      title,
      amount: Number(amount),
      type,
      date,
    });

    setTitle("");
    setAmount("");
    setType("Income");
    setDate("");

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Transaction</h2>

        <input
          type="text"
          placeholder="Transaction Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Income</option>
          <option>Expense</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
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

export default AddTransactionModal;