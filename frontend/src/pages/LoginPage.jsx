import { useNavigate } from "react-router-dom";
import LoginView from "../views/Login/LoginView.jsx";

export default function Login() {
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    navigate("/dashboard-guest");
  };

  const handleListerLogin = () => {
    navigate("/dashboard-lister");
  };

  return (
    <LoginView
      onGuestLogin={handleGuestLogin}
      onListerLogin={handleListerLogin}
    />
  );
}
