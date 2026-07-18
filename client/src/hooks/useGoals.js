import { useContext } from "react";
import { GoalContext } from "../context/GoalContext";

function useGoals() {
  return useContext(GoalContext);
}

export default useGoals;