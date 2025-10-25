import Sidebar from "../../components/Sidebar/Sidebar"
import "../../components/Card/Card.css"

export default function EditReservationView() {
    return(
        <div style={{ display: "flex", height: "100vh" }}>
              <Sidebar items={[{
                label: " ← Go Back", path: "/dashboard-guest"
                }]} />
        
              <main style={{ flex: 1, padding: "40px" }}>
                <h1>Hola Mundo</h1>
                <div className="card">
                    <p>Room</p>
                    <select name="" id="">
                        <option value="">101</option>
                        <option value="">102</option>
                        <option value="">103</option>
                        <option value="">104</option>
                        <option value="">105</option>
                    </select>
                    <p>Date</p>
                    <p>TIme</p>
                </div>
              </main>
        </div>
    )
}

