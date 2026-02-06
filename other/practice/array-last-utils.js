/**
 * Gets the last element of an array.
 * @param {Array<any>} arr The array to query.
 * @returns {any} The last element of `arr`.
 */
function last(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return arr.length > 0 ? arr[arr.length - 1] : undefined;
}

module.exports = last;