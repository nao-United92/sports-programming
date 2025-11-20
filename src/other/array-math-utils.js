/**
 * Calculates the sum of all numbers in an array.
 * Non-numeric values are ignored.
 *
 * @param {Array<number>} arr The array of numbers to sum.
 * @returns {number} The sum of the numbers in the array.
 */
export const sumArray = (arr) => {
  if (!Array.isArray(arr)) {
    return 0;
  }
  return arr.reduce((sum, num) => {
    return typeof num === 'number' ? sum + num : sum;
  }, 0);
};
