// other/practice/array-sum.js
/**
 * Calculates the sum of all numbers in an array.
 *
 * @param {Array<number>} arr The array of numbers to sum.
 * @returns {number} Returns the sum of the numbers, or 0 if the array is empty or invalid (contains non-numbers).
 * @example
 *
 * arraySum([1, 2, 3, 4]);
 * // => 10
 *
 * arraySum([-1, 0, 1]);
 * // => 0
 *
 * arraySum([]);
 * // => 0
 *
 * arraySum([1, 'a', 3]);
 * // => 0
 */
function arraySum(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }
  // Ensure all elements are actual numbers
  if (arr.some(item => typeof item !== 'number')) {
    return 0;
  }
  return arr.reduce((acc, curr) => acc + curr, 0);
}

module.exports = arraySum;
