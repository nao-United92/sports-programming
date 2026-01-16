/**
 * Gets all but the first element of `array`.
 *
 * @param {Array} arr The array to query.
 * @returns {Array} Returns the slice of `array`.
 */
function arrayTail(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (arr.length <= 1) {
    return [];
  }
  return arr.slice(1);
}

module.exports = arrayTail;
