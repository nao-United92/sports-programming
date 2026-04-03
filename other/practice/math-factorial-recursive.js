/**
 * Calculates the factorial of a number recursively.
 *
 * @param {number} n - The number to calculate the factorial of.
 * @returns {number} - The factorial of n.
 */
function factorialRecursive(n) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

module.exports = factorialRecursive;
