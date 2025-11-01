import Sidebar from "../../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditReservationView() {
  const navigate = useNavigate();
  const [room, setRoom] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // La URL base del backend se toma desde las variables de entorno de Vite
  const API_URL = import.meta.env.VITE_API_URL;

  const editReservation = async () => {
    try {
      const response = await fetch(`${API_URL}/api/edit-reservation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ room, date, startTime, endTime }),
      });

      const data = await response.json();

      navigate("/feedback", {
        state: { label: data.message },
      });
    } catch (error) {
      console.error("Error al editar la reserva:", error);
      navigate("/feedback", {
        state: { label: "There was an error updating the reservation." },
      });
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        items={[
          { label: " ← Go Back", path: "/dashboard-guest" },
        ]}
      />

      <main style={{ flex: 1, padding: "40px" }}>
        <h1>Modify Reservation</h1>
        <div className="card">
          <p>Room</p>
          <select value={room} onChange={(e) => setRoom(e.target.value)}>
            <option value="">Select room</option>
            <option value="101">101</option>
            <option value="102">102</option>
            <option value="103">103</option>
            <option value="104">104</option>
            <option value="105">105</option>
          </select>

          <p>Date</p>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <p>Time</p>
          <input
            type="time"
            min="06:00"
            max="22:00"
            required
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <span>  -  </span>
          <input
            type="time"
            min="06:00"
            max="22:00"
            required
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>

        <button onClick={editReservation}>Edit reservation</button>
      </main>
    </div>
  );
}
