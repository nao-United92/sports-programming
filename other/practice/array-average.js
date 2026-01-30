// other/practice/array-average.js
/**
 * Calculates the average of all numbers in an array.
 *
 * @param {Array<number>} arr The array of numbers to average.
 * @returns {number} Returns the average of the numbers, or 0 if the array is empty or invalid (contains non-numbers).
 * @example
 *
 * arrayAverage([1, 2, 3, 4]);
 * // => 2.5
 *
 * arrayAverage([-1, 0, 1]);
 * // => 0
 *
 * arrayAverage([]);
 * // => 0
 *
 * arrayAverage([1, 'a', 3]);
 * // => 0
 */
function arrayAverage(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  // Ensure all elements are actual numbers
  if (arr.some(item => typeof item !== 'number')) {
    return 0;
  }
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}

module.exports = arrayAverage;
