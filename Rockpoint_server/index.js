//import modules
import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import mainpostRoutes from "./routes/mainpostRoutes.js";
import ladiespostRoutes from "./routes/ladiespostRoutes.js";
import menspostRoutes from "./routes/menspostRoutes.js";
import youthspostRoutes from "./routes/youthspostRoutes.js";
import worshipteamspostRoutes from "./routes/worshipteamspostRoutes.js";

// Load environment variables from .env file
dotenv.config();

//app setup
const app = express();

//connect to databases
connectDB();

//middleware
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the backend" });
});

//routes mounting
app.use("/api/mainpost", mainpostRoutes);
app.use("/api/ladiespost", ladiespostRoutes);
app.use("/api/menspost", menspostRoutes);
app.use("/api/youthspost", youthspostRoutes);
app.use("/api/worshipteamspost", worshipteamspostRoutes);

//ports
const port = process.env.PORT || 8080;

//listeners
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
