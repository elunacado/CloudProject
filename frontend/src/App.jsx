import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginView from "./pages/LoginPage";
import DashboardGuest from "./pages/DashboardGuest";
import DashboardLister from "./pages/DashboardLister";
import EditReservation from "./pages/EditReservation";
import MakeReservation from "./pages/MakeReservation";
import Feedback from "./pages/Feedback";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/dashboard-guest" element={<DashboardGuest />} />
        <Route path="/dashboard-lister" element={<DashboardLister />} />
        <Route path="/edit-reservation" element={<EditReservation/>}></Route>
        <Route path="/make-reservation" element={<MakeReservation/>}></Route>
        <Route path="/feedback" element={<Feedback/>}></Route>
      </Routes>
    </Router>
  );
}
