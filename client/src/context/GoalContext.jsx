import { createContext, useState } from "react";

export const GoalContext = createContext();

function GoalProvider({ children }) {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Buy Laptop",
      icon: "💻",
      target: 100000,
      saved: 45000,
    },
    {
      id: 2,
      title: "Buy Bike",
      icon: "🏍️",
      target: 200000,
      saved: 80000,
    },
    {
      id: 3,
      title: "Dubai Trip",
      icon: "✈️",
      target: 150000,
      saved: 15000,
    },
    {
      id: 4,
      title: "New iPhone",
      icon: "📱",
      target: 180000,
      saved: 30000,
    },
  ]);

  const addGoal = (goal) => {
    setGoals((prev) => [
      {
        id: Date.now(),
        ...goal,
      },
      ...prev,
    ]);
  };

  const deleteGoal = (id) => {
    setGoals((prev) =>
      prev.filter((goal) => goal.id !== id)
    );
  };

  const updateSavedAmount = (id, amount) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              saved: goal.saved + Number(amount),
            }
          : goal
      )
    );
  };

  return (
    <GoalContext.Provider
      value={{
        goals,
        addGoal,
        deleteGoal,
        updateSavedAmount,
      }}
    >
      {children}
    </GoalContext.Provider>
  );
}

export default GoalProvider;