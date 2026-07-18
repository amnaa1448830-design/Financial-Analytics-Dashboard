import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import TransactionProvider from "./context/TransactionContext";
import GoalProvider from "./context/GoalContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TransactionProvider>
        <GoalProvider>
          <App />
        </GoalProvider>
      </TransactionProvider>
    </BrowserRouter>
  </StrictMode>
);