import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import Budget from "./pages/Budget";
import Goals from "./pages/Goals";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Navigate to="/dashboard" />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/transactions"
        element={<Transactions />}
      />

      <Route
        path="/analytics"
        element={<Analytics />}
      />

      <Route
        path="/budget"
        element={<Budget />}
      />

      <Route
        path="/goals"
        element={<Goals />}
      />

    </Routes>
  );
}

export default App;