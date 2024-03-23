const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./Routes/userRoute");
require("dotenv").config();

// Middleware
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(express.json());

// Routes
app.use("/api", userRoute);

// Start server
const PORT = process.env.PORT || 3000; // Default to port 3000 if PORT is not provided in .env
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
