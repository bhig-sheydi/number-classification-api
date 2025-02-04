const express = require("express");
const classifyController = require("../controllers/classifyController");

const router = express.Router();

// Define the API endpoint
router.get("/classify-number", classifyController.classifyNumber);

module.exports = router;