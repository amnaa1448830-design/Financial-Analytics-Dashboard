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

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Salary":
        return "💼";
      case "Food":
        return "🍔";
      case "Shopping":
        return "🛍️";
      case "Transport":
        return "🚗";
      case "Entertainment":
        return "🎬";
      case "Bills":
        return "💡";
      case "Freelance":
        return "💻";
      default:
        return "📌";
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="transactions-box">
      <h3>Recent Transactions</h3>

      {filteredTransactions.length === 0 ? (
        <p className="no-data">No transactions found.</p>
      ) : (
        filteredTransactions.map((item) => (
          <div className="transaction-item" key={item.id}>
            <div className="transaction-left">
              <h4>
                {getCategoryIcon(item.category)} {item.title}
              </h4>

              <p>
                <span className="category-badge">
                  {item.category}
                </span>

                {" • "}

                {formatDate(item.date)}
              </p>
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