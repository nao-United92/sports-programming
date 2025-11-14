/**
 * Calculates the greatest common divisor (GCD) of two numbers.
 *
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The greatest common divisor.
 */
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

/**
 * Calculates the least common multiple (LCM) of two numbers.
 *
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The least common multiple.
 */
const lcm = (a, b) => {
  return Math.abs(a * b) / gcd(a, b);
};

/**
 * Checks if a number is a power of two.
 *
 * @param {number} n The number to check.
 * @returns {boolean} True if the number is a power of two, false otherwise.
 */
const isPowerOfTwo = (n) => {
  if (n <= 0) {
    return false;
  }
  return (n & (n - 1)) === 0;
};

module.exports = {
  gcd,
  lcm,
  isPowerOfTwo,
};
