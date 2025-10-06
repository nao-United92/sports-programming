
/**
 * Calculates the nth Fibonacci number using memoization.
 *
 * @param {number} n The index of the Fibonacci number to calculate.
 * @returns {number} Returns the nth Fibonacci number.
 */
const memo = {};
export const fibonacci = (n) => {
  if (n < 0) {
    throw new Error('Fibonacci is only defined for non-negative integers.');
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (memo[n]) {
    return memo[n];
  }
  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
};
