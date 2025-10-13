/**
 * Calculates the factorial of a number.
 *
 * @param {number} n The number.
 * @returns {number} The factorial of the number.
 */
export const factorial = (n) => {
  if (n < 0) {
    return NaN;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};