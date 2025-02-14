// Check if a number is prime
exports.isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Check if a number is perfect
exports.isPerfect = (num) => {
  let sum = 1;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
};

// Check if a number is an Armstrong number
exports.isArmstrong = (num) => {
  const digits = num.toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return sum === num;
};

// Get number properties (Armstrong, odd/even)
exports.getProperties = (num) => {
  const properties = [];
  if (exports.isArmstrong(num)) properties.push("armstrong");
  if (num % 2 === 0) properties.push("even");
  else properties.push("odd");
  return properties;
};

// Calculate sum of digits
exports.getDigitSum = (num) => {
  return num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
};