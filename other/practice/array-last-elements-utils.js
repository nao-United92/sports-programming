// other/practice/array-last-elements-utils.js

/**
 * Creates a slice of `array` with `n` last elements.
 *
 * @param {Array} arr The array to query.
 * @param {number} [n=1] The number of elements to return from the end.
 * @returns {Array} Returns the slice of `array`.
 */
function arrayLastElements(arr, n = 1) {
  if (!Array.isArray(arr)) {
    return [];
  }
  if (n < 0) {
    n = 0; // Ensure n is not negative
  }
  // Return a slice from the end, making sure not to go beyond the start of the array.
  return arr.slice(Math.max(0, arr.length - n));
}

module.exports = arrayLastElements;
