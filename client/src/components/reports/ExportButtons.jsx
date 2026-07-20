import "../../styles/exportButtons.css";

function ExportButtons() {
  return (
    <div className="export-section">

      <h2>Export Reports</h2>

      <div className="export-buttons">

        <button className="pdf-btn">
          📄 Download PDF
        </button>

        <button className="csv-btn">
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

export default ExportButtons;