// other/practice/array-initial-utils.js

/**
 * Gets all but the last element of `array`.
 *
 * @param {Array} arr The array to query.
 * @returns {Array} Returns the slice of `array`.
 */
function arrayInitial(arr) {
  if (!Array.isArray(arr)) {
    return []; // Or throw an error, depending on desired behavior for non-arrays
  }
  return arr.slice(0, -1);
}

module.exports = arrayInitial;