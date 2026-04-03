/**
 * Checks if a number is a power of another number.
 *
 * @param {number} num - The number to check.
 * @param {number} n - The base.
 * @returns {boolean} - True if num is a power of n, false otherwise.
 */
function isPowerOfN(num, n) {
  if (num === 1) return true;
  if (n <= 1) return num === n;
  let temp = n;
  while (temp < num) {
    temp *= n;
  }
  return temp === num;
}

module.exports = isPowerOfN;
