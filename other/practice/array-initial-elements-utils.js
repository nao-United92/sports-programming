// other/practice/array-initial-elements-utils.js

/**
 * Creates a slice of `array` with `n` initial elements dropped.
 *
 * @param {Array} arr The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 */
function arrayInitialElements(arr, n = 1) {
  if (!Array.isArray(arr)) {
    return [];
  }
  if (n < 0) {
    n = 0; // Ensure n is not negative
  }
  // If n is greater than or equal to the array length, return an empty array.
  // Otherwise, return a slice from the beginning up to (length - n) elements.
  return n >= arr.length ? [] : arr.slice(0, arr.length - n);
}

module.exports = arrayInitialElements;