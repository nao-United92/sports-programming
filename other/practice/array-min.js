// other/practice/array-min.js
/**
 * Returns the minimum value in an array of numbers.
 *
 * @param {Array<number>} arr The array of numbers to inspect.
 * @returns {number|undefined} Returns the minimum value, or `undefined` if the array is empty or invalid (contains non-numbers).
 * @example
 *
 * arrayMin([1, 2, 3, 4]);
 * // => 1
 *
 * arrayMin([-1, -5, -2]);
 * // => -5
 *
 * arrayMin([]);
 * // => undefined
 *
 * arrayMin([1, 'a', 3]);
 * // => undefined
 */
function arrayMin(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  // Ensure all elements are actual numbers
  if (arr.some(item => typeof item !== 'number')) {
    return undefined;
  }
  return Math.min(...arr);
}

module.exports = arrayMin;
