import { useState } from "react";

import MainLayout from "../layouts/MainLayout";
import GoalCard from "../components/goals/GoalCard";
import GoalStats from "../components/goals/GoalStats";
import GoalAdvisor from "../components/goals/GoalAdvisor";
import GoalCelebration from "../components/goals/GoalCelebration";
import AddGoalButton from "../components/goals/AddGoalButton";
import AddGoalModal from "../components/goals/AddGoalModal";

import useGoals from "../hooks/useGoals";

import "../styles/goals.css";
import "../styles/goalStats.css";
import "../styles/goalAdvisor.css";
import "../styles/goalCelebration.css";

function Goals() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { goals } = useGoals();

  return (
    <MainLayout>
      <div className="goal-page">

        <div className="goal-top">
          <div>
            <h1>Financial Goals</h1>
            <p>
              Track your savings goals and achieve financial freedom.
            </p>
          </div>

          <AddGoalButton
            onClick={() => setIsModalOpen(true)}
          />
        </div>

        <GoalStats />

        <div className="goal-grid">
          {goals.map((goal) => (
            <GoalCard
              key={goal.id}
              id={goal.id}
              icon={goal.icon}
              title={goal.title}
              saved={goal.saved}
              target={goal.target}
            />
          ))}
        </div>

        <GoalAdvisor />

        <GoalCelebration />

        <AddGoalModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

      </div>
    </MainLayout>
  );
}

export default Goals;