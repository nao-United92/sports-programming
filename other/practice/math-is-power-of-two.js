/**
 * Checks if a number is a power of two.
 * 
 * @param {number} num - The number to check.
 * @returns {boolean} True if power of two, false otherwise.
 */
function isPowerOfTwo(num) {
  if (num <= 0) return false;
  return (num & (num - 1)) === 0;
}

module.exports = isPowerOfTwo;
