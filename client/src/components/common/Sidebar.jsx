import { NavLink } from "react-router-dom";
import "../../styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>FinSight</h2>
      </div>

      <nav className="menu">
        <ul>

          <li>
            <NavLink to="/dashboard">
              📊 Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/transactions">
              💳 Transactions
            </NavLink>
          </li>

          <li>📈 Analytics</li>

          <li>💰 Budget</li>

          <li>🎯 Goals</li>

          <li>📄 Reports</li>

          <li>⚙️ Settings</li>

        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;