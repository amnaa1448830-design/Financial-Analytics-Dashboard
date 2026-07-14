import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route
        path="/transactions"
        element={<Transactions />}
      />

      <Route
        path="/analytics"
        element={<Analytics />}
      />
    </Routes>
  );
}

export default App;