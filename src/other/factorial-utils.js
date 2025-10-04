
/**
 * Calculates the factorial of a number.
 *
 * @param {number} n The number to calculate the factorial of.
 * @returns {number} Returns the factorial of the number.
 */
export const factorial = (n) => {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error('Factorial is only defined for non-negative integers.');
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};
