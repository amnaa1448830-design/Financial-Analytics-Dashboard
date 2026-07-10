import useTransactions from "../../hooks/useTransactions";
import "../../styles/transactions.css";

function RecentTransactions() {
  const { transactions } = useTransactions();

  return (
    <div className="transactions-box">
      <h3>Recent Transactions</h3>

      {transactions.map((item) => (
        <div className="transaction-item" key={item.id}>
          <div>
            <h4>{item.title}</h4>
            <p>{item.date}</p>
          </div>

          <span
            className={
              item.type === "Income"
                ? "income"
                : "expense"
            }
          >
            {item.type === "Income" ? "+" : "-"} Rs.
            {item.amount}
          </span>
        </div>
      ))}
    </div>
  );
}

export default RecentTransactions;