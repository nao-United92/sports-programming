/**
 * Gets the last element of `array`.
 *
 * @param {Array} arr The array to query.
 * @returns {*} Returns the last element of `array`.
 */
function arrayLast(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (arr.length === 0) {
    return undefined;
  }
  return arr[arr.length - 1];
}

module.exports = arrayLast;