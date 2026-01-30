// other/practice/array-max.js
/**
 * Returns the maximum value in an array of numbers.
 *
 * @param {Array<number>} arr The array of numbers to inspect.
 * @returns {number|undefined} Returns the maximum value, or `undefined` if the array is empty or invalid (contains non-numbers).
 * @example
 *
 * arrayMax([1, 2, 3, 4]);
 * // => 4
 *
 * arrayMax([-1, -5, -2]);
 * // => -1
 *
 * arrayMax([]);
 * // => undefined
 *
 * arrayMax([1, 'a', 3]);
 * // => undefined
 */
function arrayMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  // Ensure all elements are actual numbers
  if (arr.some(item => typeof item !== 'number')) {
    return undefined;
  }
  return Math.max(...arr);
}

module.exports = arrayMax;