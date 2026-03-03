/**
 * Computes the n-th Fibonacci number.
 * @param {number} n
 * @returns {number} The n-th Fibonacci number.
 */
const fibonacci = (n) => {
  if (n < 0) throw new Error('Fibonacci is not defined for negative numbers');
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};

module.exports = fibonacci;
