import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();
const PORT = 8080 || process.env.PORT;
connectDB();
// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Server is working!");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
