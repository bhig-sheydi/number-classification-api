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
  res.status(404).json({ 
    error: "Route not found",
    details: {
      requestedUrl: req.originalUrl,
      method: req.method,
      timestamp: new Date().toISOString(),
    },
  });
});

// Global error handler to catch unexpected errors
app.use((err, req, res, next) => {
  console.error("Internal Server Error:", err.message);

  // Determine the status code based on the error type
  const statusCode = err.statusCode || 500;

  // Detailed error response
  res.status(statusCode).json({ 
    error: err.message || "Something went wrong, please try again later.",
    details: {
      statusCode: statusCode,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined, // Stack trace in development
      timestamp: new Date().toISOString(),
      path: req.path,
      method: req.method,
    },
  });
});

// Start server with error handling
app.listen(port, (err) => {
  if (err) {
    console.error("Server failed to start:", err);
    process.exit(1); // Exit with failure
  }
  console.log(`Server running on port ${port}`);
});