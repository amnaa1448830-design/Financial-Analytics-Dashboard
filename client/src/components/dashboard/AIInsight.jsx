import "../../styles/aiInsight.css";

function AIInsight() {
  return (
    <div className="ai-card">
      <div className="ai-header">
        <h3>🤖 AI Financial Insight</h3>
      </div>

      <div className="ai-body">

        <div className="insight positive">
          📈 Income increased by <strong>8%</strong> compared to last month.
        </div>

        <div className="insight warning">
          ⚠ Food expenses increased by <strong>20%</strong>.
        </div>

        <div className="insight recommendation">
          💡 Recommendation:
          <br />
          Reduce restaurant spending by <strong>Rs. 3,000</strong> per month.
        </div>

        <div className="insight saving">
          🎯 Potential Monthly Savings:
          <strong> Rs. 3,000</strong>
        </div>

      </div>
    </div>
  );
}

export default AIInsight;