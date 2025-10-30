import Sidebar from "../../components/Sidebar/Sidebar"
import Button from "../../components/Button/Button"

export default function MakeReservationView() {
    return(
       <div style={{ display: "flex", height: "100vh" }}>
              <Sidebar items={[{
                label: " ← Go Back", path: "/dashboard-guest"
                }]} />
        
              <main style={{ flex: 1, padding: "40px" }}>
                <h1>Make a Reservation</h1>
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
                    <input type="date" name="" id="" />
                    <p>Time</p>
                    <input
                    type="time"
                    id="appointment"
                    name="appointment"
                    min="06:00"
                    max="10:00"
                    required />
                    <span>  -  </span>
                    <input
                    type="time"
                    id="appointment"
                    name="appointment"
                    min="06:00"
                    max="10:00"
                    required />
                </div>
                 <Button
                          label="Confirm"
                          url="/dashboard-guest"
                />
              </main>
        </div>
    )
}
//Blank change

