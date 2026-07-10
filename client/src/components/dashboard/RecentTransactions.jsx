import { FaTrash } from "react-icons/fa";
import useTransactions from "../../hooks/useTransactions";
import "../../styles/transactions.css";

function RecentTransactions() {
  const { transactions, deleteTransaction } = useTransactions();

  return (
    <div className="transactions-box">
      <h3>Recent Transactions</h3>

      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        transactions.map((item) => (
          <div className="transaction-item" key={item.id}>
            <div>
              <h4>{item.title}</h4>
              <p>{item.date}</p>
            </div>

            <div className="transaction-right">
              <span
                className={
                  item.type === "Income"
                    ? "income"
                    : "expense"
                }
              >
                {item.type === "Income" ? "+" : "-"} Rs. {item.amount}
              </span>

              <button
                className="delete-btn"
                onClick={() => deleteTransaction(item.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default RecentTransactions;