const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");

// Route imports
const authRoutes = require("./routes/auth");
const rsvpRoutes = require("./routes/rsvp");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/rsvp", rsvpRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
