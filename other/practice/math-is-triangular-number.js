/**
 * Checks if a number is a triangular number.
 * A triangular number counts objects arranged in an equilateral triangle.
 * A number x is triangular if 8x + 1 is a perfect square.
 *
 * @param {number} n - The number to check.
 * @returns {boolean} - True if the number is a triangular number, false otherwise.
 */
function isTriangularNumber(n) {
  if (n < 0) return false;
  if (n === 0) return true; // 0 is T_0
  const val = 8 * n + 1;
  const sqrt = Math.round(Math.sqrt(val));
  return sqrt * sqrt === val;
}

module.exports = isTriangularNumber;
