import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://cloud-project-fkj80xo02-elunacados-projects.vercel.app",
];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.includes(origin)){
      return callback(null, true);
    } else {
      return callback(new Error("CORS not allowed"));
    }
  },
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization"],
  credentials: true
}));

app.options("*", cors());

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.post("/api/make-reservation", (req, res) => {
  const { room, date, startTime, endTime } = req.body;
  console.log("New reservation received", { room, date, startTime, endTime });
  res.json({
    success: true,
    message: `Reservation created for room ${room} on ${date} from ${startTime} to ${endTime}.`
  });
});

app.post("/api/edit-reservation", (req, res) => {
  const { room, date, startTime, endTime } = req.body;
  console.log("Edited Reservation:", { room, date, startTime, endTime });
  res.json({
    success: true,
    message: `Reservation for room ${room} on ${date} updated from ${startTime} to ${endTime}.`
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
