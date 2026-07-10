import "../../styles/filter.css";

function TransactionFilter({ filterType, setFilterType }) {
  return (
    <div className="filter-container">
      <label className="filter-label">
        Filter Transactions
      </label>

      <select
        className="filter-select"
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="All">All Transactions</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
    </div>
  );
}

export default TransactionFilter;