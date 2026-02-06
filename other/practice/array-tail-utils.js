/**
 * Gets all elements of an array except the first one.
 * @param {Array<any>} arr The array to query.
 * @returns {Array<any>} A new array containing all elements of `arr` except the first.
 */
function tail(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return arr.length > 0 ? arr.slice(1) : [];
}

module.exports = tail;
