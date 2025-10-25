import Sidebar from "../../components/Sidebar/Sidebar";


export default function DashboardLister() {
  const listMenu = [" 👤 Profile", "📅 Room Management", "⏻ Logout"];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar items={listMenu} />

      <main style={{ flex: 1, padding: "40px" }}>
        <h1>Dashboard Lister</h1>
        <p>Welcome to the lister's dashboard.</p>
      </main>
    </div>
  );
}
