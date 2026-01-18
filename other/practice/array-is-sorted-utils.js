// other/practice/array-is-sorted-utils.js

/**
 * Checks if an array is sorted.
 *
 * @param {Array} arr The array to check.
 * @param {Function} [comparator] The comparator function to use for sorting.
 *   If not provided, elements are compared using default less than/greater than operators.
 *   The comparator function should return a negative number if a < b, a positive number if a > b, and 0 if a == b.
 * @returns {boolean} Returns true if the array is sorted, false otherwise.
 */
function arrayIsSorted(arr, comparator = (a, b) => a < b ? -1 : a > b ? 1 : 0) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return true; // An empty or single-element array is considered sorted
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (comparator(arr[i], arr[i + 1]) > 0) {
      return false;
    }
  }

  return true;
}

module.exports = arrayIsSorted;