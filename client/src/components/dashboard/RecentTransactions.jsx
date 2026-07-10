import { FaTrash } from "react-icons/fa";
import useTransactions from "../../hooks/useTransactions";
import "../../styles/transactions.css";

function RecentTransactions({ searchTerm, filterType }) {
  const { transactions, deleteTransaction } = useTransactions();

  const filteredTransactions = transactions.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterType === "All" || item.type === filterType;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="transactions-box">
      <h3>Recent Transactions</h3>

      {filteredTransactions.length === 0 ? (
        <p className="no-data">No transactions found.</p>
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
                {item.type === "Income" ? "+" : "-"} Rs.{" "}
                {item.amount.toLocaleString()}
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