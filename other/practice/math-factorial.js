/**
 * Computes the factorial of a non-negative integer.
 * @param {number} n
 * @returns {number} The factorial of n.
 */
const factorial = (n) => {
  if (n < 0) throw new Error('Factorial is not defined for negative numbers');
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

module.exports = factorial;
