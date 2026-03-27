/**
 * Checks if a number is a power of three.
 *
 * @param {number} n - The number to check.
 * @returns {boolean} - True if the number is a power of three, false otherwise.
 */
function isPowerOfThree(n) {
  if (n <= 0) return false;
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
}

module.exports = isPowerOfThree;
