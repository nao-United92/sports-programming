// other/practice/array-tail-utils.js

/**
 * Gets all but the first element of `array`.
 *
 * @param {Array} arr The array to query.
 * @returns {Array} Returns the slice of `array`.
 */
function arrayTail(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) {
    return [];
  }
  return arr.slice(1);
}

module.exports = arrayTail;