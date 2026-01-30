// other/practice/array-unique.js
/**
 * Creates a duplicate-free version of an array, using Set for efficiency.
 *
 * @param {Array} arr The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * arrayUnique([2, 1, 2]);
 * // => [2, 1]
 *
 * arrayUnique([1, 2, 3, 3, 4, 5, 5]);
 * // => [1, 2, 3, 4, 5]
 */
function arrayUnique(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return [...new Set(arr)];
}

module.exports = arrayUnique;