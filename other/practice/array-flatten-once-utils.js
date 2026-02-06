/**
 * Flattens an array by one level.
 * @param {Array<any>} arr The array to flatten.
 * @returns {Array<any>} The new flattened array.
 */
function flattenOnce(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return arr.reduce((acc, val) => acc.concat(val), []);
}

module.exports = flattenOnce;