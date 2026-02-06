/**
 * Gets all elements of an array except the last one.
 * @param {Array<any>} arr The array to query.
 * @returns {Array<any>} A new array containing all elements of `arr` except the last.
 */
function initial(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return arr.length > 0 ? arr.slice(0, -1) : [];
}

module.exports = initial;
