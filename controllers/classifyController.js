const axios = require("axios");
const numberUtils = require("../utils/numberUtils");

exports.classifyNumber = async (req, res) => {
  try {
    const { number } = req.query;

    // Validate input (check if it's a valid number)
    if (!number || isNaN(number)) {
      return res.status(400).json({ error: true, message: "Invalid number provided." });
    }

    const num = parseInt(number);

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
    }

    // Return successful response
    res.json({
      number: num,
      is_prime: isPrime,
      is_perfect: isPerfect,
      properties,
      digit_sum: digitSum,
      fun_fact: funFact,
    });

  } catch (error) {
    console.error(`Internal Server Error: ${error.message}`);
    res.status(500).json({ error: true, message: "Something went wrong, please try again later." });
  }
};
