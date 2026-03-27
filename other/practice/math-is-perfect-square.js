/**
 * Checks if a number is a perfect square.
 *
 * @param {number} n - The number to check.
 * @returns {boolean} - True if the number is a perfect square, false otherwise.
 */
function isPerfectSquare(n) {
  if (n < 0) return false;
  const sqrt = Math.round(Math.sqrt(n));
  return sqrt * sqrt === n;
}

module.exports = isPerfectSquare;
