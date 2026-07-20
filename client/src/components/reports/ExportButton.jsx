import "../../styles/exportButtons.css";

import useTransactions from "../../hooks/useTransactions";
import { exportPDF } from "../../utils/exportPDF";
import { exportCSV } from "../../utils/exportCSV";

function ExportButton() {
  const { transactions } = useTransactions();

  return (
    <div className="export-section">

      <h2>Export Reports</h2>

      <div className="export-buttons">

        <button
          className="pdf-btn"
          onClick={() => exportPDF(transactions)}
        >
          📄 Download PDF
        </button>

        <button
          className="csv-btn"
          onClick={() => exportCSV(transactions)}
        >
          📊 Export CSV
        </button>

        <button
          className="print-btn"
          onClick={() => window.print()}
        >
          🖨 Print Report
        </button>

      </div>

    </div>
  );
}

export default ExportButton;