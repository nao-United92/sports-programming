/**
 * Gets the first element of `array`.
 *
 * @param {Array} arr The array to query.
 * @returns {*} Returns the first element of `array`.
 */
function arrayHead(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
}

module.exports = arrayHead;