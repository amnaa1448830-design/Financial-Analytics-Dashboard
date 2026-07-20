import MainLayout from "../layouts/MainLayout";

import ReportCards from "../components/reports/ReportCards";
import IncomeExpenseReportChart from "../components/reports/IncomeExpenseReportChart";
import ExpenseBreakdownReportChart from "../components/reports/ExpenseBreakdownReportChart";
import MonthlySummary from "../components/reports/MonthlySummary";
import AIFinancialAnalysis from "../components/reports/AIFinancialAnalysis";
import ExportButton from "../components/reports/ExportButton";

import "../styles/reports.css";
import "../styles/reportCards.css";
import "../styles/reportChart.css";
import "../styles/reportPieChart.css";
import "../styles/monthlySummary.css";
import "../styles/aiFinancialAnalysis.css";
import "../styles/exportButtons.css";

function Reports() {
  return (
    <MainLayout>

      <div className="reports-page">

        <div className="reports-header">
          <h1>Financial Reports</h1>

          <p>
            View and download detailed financial reports.
          </p>
        </div>

        <ReportCards />

        <IncomeExpenseReportChart />

        <ExpenseBreakdownReportChart />

        <MonthlySummary />

        <AIFinancialAnalysis />

        <ExportButton />

      </div>

    </MainLayout>
  );
}

export default Reports;