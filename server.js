const express = require("express");
const cors = require("cors"); // Import the cors package
const classifyRoute = require("./routes/classifyRoute");

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running!" });
});

// Use the classify route
app.use("/api", classifyRoute);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    error: true,
    message: "Route not found",
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err.message);
  res.status(500).json({
    error: true,
    message: "Something went wrong, please try again later.",
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});