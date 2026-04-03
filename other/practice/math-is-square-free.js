/**
 * Checks if a number is square-free (not divisible by any perfect square other than 1).
 * @param {number} n - The number to check.
 * @returns {boolean} True if square-free, false otherwise.
 */
function mathIsSquareFree(n) {
  if (n < 1) return false;
  if (n === 1) return true;
  
  for (let i = 2; i * i <= n; i++) {
    if (n % (i * i) === 0) return false;
  }
  return true;
}

module.exports = mathIsSquareFree;
