const express = require("express");
const cors = require("cors");
const classifyRoute = require("./routes/classifyRoute");

const app = express();
const port = process.env.PORT || 3000;

// Middleware with error handling
app.use(cors());
app.use(express.json());

// Basic health check route
app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running!" });
});

// Use the classify route
app.use("/api", classifyRoute);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Global error handler to catch unexpected errors
app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err.message);
  res.status(500).json({ error: "Something went wrong, please try again later." });
});

// Start server with error handling
app.listen(port, (err) => {
  if (err) {
    console.error("Server failed to start:", err);
    process.exit(1); // Exit with failure
  }
  console.log(`Server running on port ${port}`);
});
