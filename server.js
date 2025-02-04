const express = require("express");
const cors = require("cors");
const classifyRoute = require("./routes/classifyRoute");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Use the classify route
app.use("/api", classifyRoute);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
