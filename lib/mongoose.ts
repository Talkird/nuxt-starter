import mongoose from "mongoose";

let conn: typeof mongoose | null = null;

export async function connectDB() {
  if (conn) return conn;
  if (!process.env.MONGO_URI) throw new Error("MONGO_URI not set");

  conn = await mongoose.connect(process.env.MONGO_URI);
  return conn;
}
