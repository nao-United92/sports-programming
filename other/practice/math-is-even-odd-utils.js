/**
 * Utilities to check if a number is even or odd.
 */
const isEvenOddUtils = {
  /**
   * Checks if a number is even.
   * @param {number} num - The number to check.
   * @returns {boolean} True if even, false otherwise.
   */
  isEven: (num) => num % 2 === 0,

  /**
   * Checks if a number is odd.
   * @param {number} num - The number to check.
   * @returns {boolean} True if odd, false otherwise.
   */
  isOdd: (num) => Math.abs(num % 2) === 1
};

module.exports = isEvenOddUtils;
