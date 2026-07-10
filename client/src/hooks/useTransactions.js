import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function useTransactions() {
  return useContext(TransactionContext);
}

export default useTransactions;