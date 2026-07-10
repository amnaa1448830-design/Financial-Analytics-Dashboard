import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

function MainLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />
        <main style={{ padding: "20px" }}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;