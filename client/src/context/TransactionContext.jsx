import { createContext, useState } from "react";

export const TransactionContext = createContext();

function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Salary",
      amount: 80000,
      type: "Income",
      category: "Salary",
      date: "2026-07-01",
    },
    {
      id: 2,
      title: "Groceries",
      amount: 5200,
      type: "Expense",
      category: "Food",
      date: "2026-07-02",
    },
    {
      id: 3,
      title: "Netflix",
      amount: 1100,
      type: "Expense",
      category: "Entertainment",
      date: "2026-07-03",
    },
    {
      id: 4,
      title: "Freelance",
      amount: 15000,
      type: "Income",
      category: "Freelance",
      date: "2026-07-04",
    },
  ]);

  // Add Transaction
  const addTransaction = (transaction) => {
    setTransactions((prev) => [
      {
        id: Date.now(),
        category: transaction.category || "Other",
        ...transaction,
      },
      ...prev,
    ]);
  };

  // Delete Transaction
  const deleteTransaction = (id) => {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
  };

  // Totals
  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalBalance = totalIncome - totalExpense;

  const savings = totalBalance;

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
        totalIncome,
        totalExpense,
        totalBalance,
        savings,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionProvider;