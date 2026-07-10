import "../../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div>
        <h2>Dashboard</h2>
        <p>Welcome back, Amna 👋</p>
      </div>

      <div className="navbar-right">
        <span className="icon">🔔</span>
        <span className="icon">👤</span>
      </div>
    </header>
  );
}

export default Navbar;