const gcd = require('./math-gcd');

/**
 * Computes the least common multiple (LCM) of two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} The LCM of a and b.
 */
const lcm = (a, b) => {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
};

module.exports = lcm;
