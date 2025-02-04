const axios = require("axios");
const numberUtils = require("../utils/numberUtils");

exports.classifyNumber = async (req, res) => {
  const { number } = req.query;

  // Validate input (check if it's a valid number)
  if (!number || isNaN(number)) {
    return res.status(400).json({ number, error: true });
  }

  const num = parseInt(number);

  // Classify number properties
  const isPrime = numberUtils.isPrime(num);
  const isPerfect = numberUtils.isPerfect(num);
  const properties = numberUtils.getProperties(num);
  const digitSum = numberUtils.getDigitSum(num);

  try {
    // Fetch fun fact from Numbers API
    const funFactResponse = await axios.get(`http://numbersapi.com/${num}/math`);
    const funFact = funFactResponse.data;

    // Return response
    res.json({ number: num, is_prime: isPrime, is_perfect: isPerfect, properties, digit_sum: digitSum, fun_fact: funFact });
  } catch (error) {
    res.json({ number: num, is_prime: isPrime, is_perfect: isPerfect, properties, digit_sum: digitSum, fun_fact: "No fun fact available." });
  }
};
