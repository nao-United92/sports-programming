const gcd = require('./math-gcd-utils');

/**
 * Calculates the Least Common Multiple (LCM) of two numbers.
 * 
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} The LCM of a and b.
 */
function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
}

module.exports = lcm;
