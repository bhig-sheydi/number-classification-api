const axios = require("axios");
const numberUtils = require("../utils/numberUtils");

exports.classifyNumber = async (req, res) => {
  try {
    const { number } = req.query;

    // Validate input
    if (!number || isNaN(number)) {
      return res.status(400).json({
        number: number || "undefined",
        error: true,
      });
    }

    const num = parseInt(number);

    // Validate if the number is a positive integer
    if (!Number.isInteger(num) || num < 0) {
      return res.status(400).json({
        number: num,
        error: true,
      });
    }

    // Classify number properties
    const isPrime = numberUtils.isPrime(num);
    const isPerfect = numberUtils.isPerfect(num);
    const properties = numberUtils.getProperties(num);
    const digitSum = numberUtils.getDigitSum(num);
    let funFact = "No fun fact available.";

    // Fetch fun fact from Numbers API
    try {
      const funFactResponse = await axios.get(`http://numbersapi.com/${num}/math`);
      funFact = funFactResponse.data;
    } catch (apiError) {
      console.error(`Numbers API Error: ${apiError.message}`);
      // If the API fails, return a 502 Bad Gateway error
      return res.status(502).json({
        number: num,
        error: true,
        message: "Failed to fetch fun fact from external API.",
      });
    }

    // Return successful response
    res.status(200).json({
      number: num,
      is_prime: isPrime,
      is_perfect: isPerfect,
      properties,
      digit_sum: digitSum,
      fun_fact: funFact,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({
      number: req.query.number || "undefined",
      error: true,
      message: "Something went wrong, please try again later.",
    });
  }
};