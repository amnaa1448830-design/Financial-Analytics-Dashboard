import useTransactions from "../../hooks/useTransactions";
import "../../styles/reportCards.css";

function ReportCards() {
  const {
    totalIncome,
    totalExpense,
    totalBalance,
    savings,
  } = useTransactions();

  const cards = [
    {
      title: "Total Income",
      value: totalIncome,
      icon: "💰",
    },
    {
      title: "Total Expense",
      value: totalExpense,
      icon: "💸",
    },
    {
      title: "Savings",
      value: savings,
      icon: "💵",
    },
    {
      title: "Net Balance",
      value: totalBalance,
      icon: "⚖️",
    },
  ];

  return (
    <div className="report-cards">

      {cards.map((card) => (
        <div
          className="report-card"
          key={card.title}
        >

          <h2>{card.icon}</h2>

          <h3>{card.title}</h3>

          <h1>
            Rs. {card.value.toLocaleString()}
          </h1>

        </div>
      ))}

    </div>
  );
}

export default ReportCards;