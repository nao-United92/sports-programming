// other/practice/array-last-utils.js

/**
 * Gets the last element of `array`.
 *
 * @param {Array} arr The array to query.
 * @returns {*} Returns the last element of `array`.
 */
function arrayLast(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined; // Consistent with Array.prototype.at(-1) for empty, or general JS behavior for out of bounds
  }
  return arr[arr.length - 1];
}

module.exports = arrayLast;
