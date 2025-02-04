// Validate input to ensure it is a positive integer
const validateNumber = (num) => {
  if (typeof num !== "number" || !Number.isInteger(num) || num < 0) {
    throw new Error("Invalid input: Please provide a positive integer.");
  }
};

// Check if a number is prime
exports.isPrime = (num) => {
  try {
    validateNumber(num);
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  } catch (error) {
    return { error: error.message };
  }
};

// Check if a number is perfect
exports.isPerfect = (num) => {
  try {
    validateNumber(num);
    let sum = 1;
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) sum += i;
    }
    return sum === num;
  } catch (error) {
    return { error: error.message };
  }
};

// Get number properties (Armstrong, odd/even)
exports.getProperties = (num) => {
  try {
    validateNumber(num);
    let properties = num % 2 === 0 ? ["even"] : ["odd"];
    if (exports.isArmstrong(num)) properties.unshift("armstrong");
    return properties;
  } catch (error) {
    return { error: error.message };
  }
};

// Check if a number is an Armstrong number
exports.isArmstrong = (num) => {
  try {
    validateNumber(num);
    const digits = num.toString().split("").map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === num;
  } catch (error) {
    return { error: error.message };
  }
};

// Calculate sum of digits
exports.getDigitSum = (num) => {
  try {
    validateNumber(num);
    return num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  } catch (error) {
    return { error: error.message };
  }
};
