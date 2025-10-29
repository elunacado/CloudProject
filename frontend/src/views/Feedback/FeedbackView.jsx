import { useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function FeedbackView() {
  const location = useLocation();
  const label = location.state?.label || "Default Feedback Label";

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <h1>{label}</h1>
      <Button label="Logout" url="/" />
    </div>
  );
}
//THis is a test
