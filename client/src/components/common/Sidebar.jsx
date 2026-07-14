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
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }
            >
              📊 Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }
            >
              💳 Transactions
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }
            >
              📈 Analytics
            </NavLink>
          </li>

          <li>
            <NavLink to="#">
              💰 Budget
            </NavLink>
          </li>

          <li>
            <NavLink to="#">
              🎯 Goals
            </NavLink>
          </li>

          <li>
            <NavLink to="#">
              📄 Reports
            </NavLink>
          </li>

          <li>
            <NavLink to="#">
              ⚙️ Settings
            </NavLink>
          </li>

        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;