import { FaTrash } from "react-icons/fa";
import useTransactions from "../../hooks/useTransactions";
import "../../styles/transactions.css";

function RecentTransactions({ searchTerm }) {
  const { transactions, deleteTransaction } = useTransactions();

  const filteredTransactions = transactions.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="transactions-box">
      <h3>Recent Transactions</h3>

      {filteredTransactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        filteredTransactions.map((item) => (
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