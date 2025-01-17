require("dotenv").config(); // Add this at the top

const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;
let client;

async function connectDB() {
  if (!uri) {
    throw new Error("MongoDB URI not defined in environment variables");
  }

  try {
    client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
}

function getDB() {
  if (!client) {
    throw new Error("Database not initialized. Call connectDB first.");
  }
  return client.db();
}

module.exports = { connectDB, getDB };
