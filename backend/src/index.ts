import express from "express";
import mongoose from "mongoose";
require('dotenv').config()
import userRouter from "./routes/userRoutes";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", userRouter);

const URI = process.env.MONGODB_URI as string;


// MongoDB connection
mongoose
  .connect(URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define routes
app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
