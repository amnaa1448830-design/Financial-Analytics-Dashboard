import "../../styles/addTransactionButton.css";

function AddTransactionButton({ onClick }) {
  return (
    <button className="add-btn" onClick={onClick}>
      + Add Transaction
    </button>
  );
}

export default AddTransactionButton;