import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Server is working!");
});

// Connect to DB and start server
const startServer = async () => {
  try {
    await connectDB(); // important to await DB connection
    app.listen(PORT, () => {
      console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB", err);
    process.exit(1);
  }
};

startServer();
