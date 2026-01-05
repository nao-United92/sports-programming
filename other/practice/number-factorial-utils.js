/**
 * Calculates the factorial of a non-negative integer.
 * The factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
 * 0! is defined as 1.
 *
 * @param {number} n The non-negative integer.
 * @returns {number} The factorial of n.
 */
const factorial = (n) => {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    throw new TypeError('Expected a non-negative integer for the argument.');
  }
  if (n < 0) {
    throw new Error('Expected a non-negative integer.');
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

export default factorial;
