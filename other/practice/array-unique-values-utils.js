/**
 * Returns an array with unique values from the input array.
 * @param {Array<any>} arr The input array.
 * @returns {Array<any>} A new array with unique values.
 */
function uniqueValues(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return [...new Set(arr)];
}

module.exports = uniqueValues;