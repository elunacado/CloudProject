import './LoginView.css';
import { useNavigate } from "react-router-dom";

export default function LoginView() {
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    navigate("/dashboard-guest");
  };

  const handleListerLogin = () => {
    navigate("/dashboard-lister");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Bienvenido/Welcome</h1>

        <p className="login-subtitle">Nombre de usuario/Username</p>
        <input type="text" placeholder='Username'/>

        <p className="login-subtitle">Contraseña/Password</p>
        <input type="password" placeholder='Password'/>

        <button onClick={handleGuestLogin}>Ingresar como invitado / Log in as guest</button>
        <button onClick={handleListerLogin}>Ingresar como lister / Log in as lister</button>
      </div>
    </div>
  );
}
