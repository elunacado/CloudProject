import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginView from "./pages/Login";
import DashboardGuest from "./pages/DashboardGuest";
import DashboardLister from "./pages/DashboardLister";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/dashboard-guest" element={<DashboardGuest />} />
        <Route path="/dashboard-lister" element={<DashboardLister />} />
      </Routes>
    </Router>
  );
}
