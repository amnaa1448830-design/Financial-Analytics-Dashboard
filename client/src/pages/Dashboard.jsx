import { useState } from "react";

import {
  FaWallet,
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaPiggyBank,
} from "react-icons/fa6";

import useTransactions from "../hooks/useTransactions";

import MainLayout from "../layouts/MainLayout";
import InfoCard from "../components/dashboard/InfoCard";
import IncomeChart from "../components/dashboard/IncomeChart";
import ExpenseChart from "../components/dashboard/ExpenseChart";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import AIInsight from "../components/dashboard/AIInsight";
import AddTransactionButton from "../components/dashboard/AddTransactionButton";
import AddTransactionModal from "../components/dashboard/AddTransactionModal";
import SearchBar from "../components/dashboard/SearchBar";
import TransactionFilter from "../components/dashboard/TransactionFilter";

import "../styles/dashboard.css";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  const {
    totalBalance,
    totalIncome,
    totalExpense,
    savings,
  } = useTransactions();

  return (
    <MainLayout>
      <div className="dashboard">

        {/* Header */}
        <div
          className="dashboard-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, Amna 👋</p>
          </div>

          <AddTransactionButton
            onClick={() => setIsModalOpen(true)}
          />
        </div>

        {/* Cards */}
        <div className="card-container">

          <InfoCard
            title="Total Balance"
            amount={`Rs. ${totalBalance.toLocaleString()}`}
            icon={<FaWallet />}
            change="+12%"
            color="blue"
          />

          <InfoCard
            title="Income"
            amount={`Rs. ${totalIncome.toLocaleString()}`}
            icon={<FaArrowTrendUp />}
            change="+8%"
            color="green"
          />

          <InfoCard
            title="Expense"
            amount={`Rs. ${totalExpense.toLocaleString()}`}
            icon={<FaArrowTrendDown />}
            change="-5%"
            color="red"
          />

          <InfoCard
            title="Savings"
            amount={`Rs. ${savings.toLocaleString()}`}
            icon={<FaPiggyBank />}
            change="+18%"
            color="purple"
          />

        </div>

        {/* Charts */}
        <div className="chart-section">
          <IncomeChart />
          <ExpenseChart />
        </div>

        {/* Search */}
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* Filter */}
        <TransactionFilter
          filterType={filterType}
          setFilterType={setFilterType}
        />

        {/* Recent Transactions */}
        <RecentTransactions
          searchTerm={searchTerm}
          filterType={filterType}
        />

        {/* AI Insight */}
        <AIInsight />

        {/* Modal */}
        <AddTransactionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

      </div>
    </MainLayout>
  );
}

export default Dashboard;