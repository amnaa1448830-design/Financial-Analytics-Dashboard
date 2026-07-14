import MainLayout from "../layouts/MainLayout";
import SearchBar from "../components/dashboard/SearchBar";
import TransactionFilter from "../components/dashboard/TransactionFilter";
import RecentTransactions from "../components/dashboard/RecentTransactions";

import { useState } from "react";

function Transactions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  return (
    <MainLayout>
      <div className="dashboard">

        <h1>Transactions</h1>

        <p>
          View and manage all your financial transactions.
        </p>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <TransactionFilter
          filterType={filterType}
          setFilterType={setFilterType}
        />

        <RecentTransactions
          searchTerm={searchTerm}
          filterType={filterType}
        />

      </div>
    </MainLayout>
  );
}

export default Transactions;