// import mongoose from "mongoose";
// import dotenv from "dotenv";

// async function connectDB() {
//   try {
//     mongoose.connect(process.env.MONGO_URI);
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     process.exit(1); // Exit the process with failure
//   }
// }

// export default connectDB;

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
}

export default connectDB;
