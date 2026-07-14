import MainLayout from "../layouts/MainLayout";
import useTransactions from "../hooks/useTransactions";
import BudgetCategoryCard from "../components/budget/BudgetCategoryCard";
import BudgetAdvice from "../components/budget/BudgetAdvice";

import "../styles/budget.css";

function Budget() {
  const { totalExpense, transactions } = useTransactions();

  const monthlyBudget = 100000;

  const remaining = monthlyBudget - totalExpense;

  const percentage = Math.min(
    (totalExpense / monthlyBudget) * 100,
    100
  );

  const getSpent = (category) =>
    transactions
      .filter(
        (t) =>
          t.type === "Expense" &&
          t.category === category
      )
      .reduce((sum, t) => sum + t.amount, 0);

  const categoryData = [
    {
      name: "Food",
      spent: getSpent("Food"),
    },
    {
      name: "Shopping",
      spent: getSpent("Shopping"),
    },
    {
      name: "Entertainment",
      spent: getSpent("Entertainment"),
    },
    {
      name: "Transport",
      spent: getSpent("Transport"),
    },
  ];

  const highestCategory =
    categoryData.sort(
      (a, b) => b.spent - a.spent
    )[0].name;

  return (
    <MainLayout>
      <div className="dashboard">

        <h1>Budget Planner</h1>

        <p>
          Manage your monthly budget and monitor spending.
        </p>

        <div className="budget-card">

          <h2>Monthly Budget</h2>

          <h1>
            Rs. {monthlyBudget.toLocaleString()}
          </h1>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${percentage}%`,
              }}
            ></div>
          </div>

          <div className="budget-info">

            <div>
              <h3>Spent</h3>

              <p>
                Rs. {totalExpense.toLocaleString()}
              </p>
            </div>

            <div>
              <h3>Remaining</h3>

              <p>
                Rs. {remaining.toLocaleString()}
              </p>
            </div>

          </div>

        </div>

        <div className="budget-grid">

          <BudgetCategoryCard
            icon="🍔"
            title="Food"
            budget={20000}
            spent={getSpent("Food")}
          />

          <BudgetCategoryCard
            icon="🛍️"
            title="Shopping"
            budget={15000}
            spent={getSpent("Shopping")}
          />

          <BudgetCategoryCard
            icon="🎬"
            title="Entertainment"
            budget={10000}
            spent={getSpent("Entertainment")}
          />

          <BudgetCategoryCard
            icon="🚗"
            title="Transport"
            budget={12000}
            spent={getSpent("Transport")}
          />

        </div>

        <BudgetAdvice
          percentage={percentage}
          highestCategory={highestCategory}
          remaining={remaining}
        />

      </div>
    </MainLayout>
  );
}

export default Budget;