import Sidebar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

export default function DashboardGuest() {
  const guestMenu = [
    {label: " 👤 Profile", path: "#"},
    {label: " 📅 Manage my reservation", path: "/dashboard-guest"},
    
  ];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar items={guestMenu} />

      <main style={{ flex: 1, padding: "40px" }}>
        <h1>Welcome to Room Appointer</h1>
        <Button
          label="Make a Reservation"
          url="/make-reservation"
        />
        
        <Card
          room_information="Room 101"
          date="2024-07-15"
          time="10:00 AM - 11:00 AM"
        />
        <Button
          label="Edit Reservation"
          url="/edit-reservation"
        />
        <Button
          label="Cancel Reservation"
          url="#"
        />
      </main>
    </div>
  );
}
