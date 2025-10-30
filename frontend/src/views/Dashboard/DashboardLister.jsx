import Sidebar from "../../components/Sidebar/Sidebar";
import ListerCard from "../../components/ListerCard/ListerCard"

export default function DashboardLister() {
  const listMenu = [
    {label: " 👤 Profile", path: "#"},
    {label: " 📅 Room Management", path: "/dashboard-lister"},
  
  ];


  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar items={listMenu} />

      <main style={{ flex: 1, padding: "40px" }}>
        <ListerCard 
          room_information="Room 101"
          date="2024-07-15"
          time="10:00 AM - 11:00 AM"
        />
      </main>
    </div>
  );
}
