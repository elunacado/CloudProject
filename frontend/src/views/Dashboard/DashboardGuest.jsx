import Sidebar from "../../components/Sidebar/Sidebar";

export default function DashboardGuest() {
  const guestMenu = [" 👤 Profile", "📅 Manage my reservation", "⏻ Logout"];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar items={guestMenu} />

      <main style={{ flex: 1, padding: "40px" }}>
        <h1>Dashboard Guest</h1>
        <p>Welcome to the guest's dashboard.</p>
      </main>
    </div>
  );
}
