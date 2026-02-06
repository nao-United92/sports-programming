/**
 * Gets the first element of an array.
 * @param {Array<any>} arr The array to query.
 * @returns {any} The first element of `arr`.
 */
function head(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return arr.length > 0 ? arr[0] : undefined;
}

module.exports = head;