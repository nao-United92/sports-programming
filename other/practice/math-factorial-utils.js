/**
 * Calculates the factorial of a number.
 * 
 * @param {number} n - The number to calculate factorial for.
 * @returns {number} The factorial of n. Returns 1 for n <= 1.
 */
function factorial(n) {
  if (n < 0) return 0;
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

module.exports = factorial;
