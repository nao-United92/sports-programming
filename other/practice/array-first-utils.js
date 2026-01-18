// other/practice/array-first-utils.js

/**
 * Gets the first element of `array`.
 *
 * @param {Array} arr The array to query.
 * @returns {*} Returns the first element of `array`.
 */
function arrayFirst(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }
  return arr[0];
}

module.exports = arrayFirst;
