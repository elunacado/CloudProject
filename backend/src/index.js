import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const API_URL = import.meta.env.VITE_API_URL;


dotenv.config();
const app = express();
app.use(cors({
  origin: [
    API_URL, // tu frontend en producción
    "http://localhost:5173"            // para desarrollo local
  ],
  methods: ["GET", "POST"]
}));

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.post("/api/edit-reservation", (req, res) => {
  const { room, date, startTime, endTime } = req.body;
  console.log("Edited Reservation:", { room, date, startTime, endTime });

  // Podrías guardar esto en una base de datos, etc.
  res.json({
    success: true,
    message: `The reservation for room ${room} on ${date} has been updated from ${startTime} to ${endTime}.`,
  });
});

app.post("/api/make-reservation", (req, res) => {
  const { room, date, startTime, endTime } = req.body;

  console.log("New reservatione received", { room, date, startTime, endTime });

  res.json({
    success: true,
    message: `Reservation created for room ${room} on ${date} from ${startTime} to ${endTime}. The lister has been notified.`,
  });
});



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
